const fs = require('fs-extra')
const path = require('path')
const packageDir = path.resolve(__dirname, '../../../')
const pheanutDir = path.resolve(__dirname, '../')
const exec = require('child_process').exec

// ファイルのコピー
const FILES = [
  '/index.html',
  '/assets',
  '/src',
  '/server',
  '/.eslintrc.js',
  '/.gitignore.js',
  '/.prettierrc',
  '/webpack.config.js',
]
FILES.forEach(f => {
  fs.copy(`${pheanutDir}${f}`, `${packageDir}${f}`, () => {
    console.log(`Created [${packageDir}${f}]`)
  })
})

// git ignoreの追加
fs.copy(`${pheanutDir}/ignore`, `${packageDir}/.gitignore`, () => {
  console.log('Created [.gitignore]')
})

// Scriptの追加
fs.readFile(`${pheanutDir}/package.json`, (e, data) => {
  if (e) throw e
  let scripts = JSON.parse(data).scripts
  fs.readFile(`${packageDir}/package.json`, (err, data) => {
    if (err) throw err
    const package = JSON.parse(data)
    delete package.scripts.test
    Object.keys(scripts).forEach(k => {
      package.scripts[k] = scripts[k]
    })
    fs.writeFile(`${packageDir}/package.json`, JSON.stringify(package))
  })
})

// パッケージのインストール
const PACKAGES = [
  { type: '--save', lib: 'git://github.com/phinajs/phina.js.git#develop' },
  { type: '--save', lib: '@fortawesome/fontawesome' },
  { type: '--save-dev', lib: 'eslint' },
  { type: '--save-dev', lib: 'fs-extra' },
  { type: '--save-dev', lib: 'prettier' },
  { type: '--save-dev', lib: 'webpack' },
  { type: '--save-dev', lib: 'webpack-cli' },
  { type: '--save-dev', lib: 'webpack-dev-server' },
  { type: '--save-dev', lib: '@webpack-cli/serve' },
]

PACKAGES.forEach(p => {
  console.log(`installing ${p.lib}...`)
  exec(`npm install ${p.type} ${p.lib}`, (e, stdout, stderr) => {
    if (e) {
      console.log(e)
    }
    console.log(stdout)
  })
})
