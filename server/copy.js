const fs = require('fs-extra')
const path = require('path')
const root = path.resolve(__dirname, '../')

// ファイルのコピー
const COPY_FILES = [
  {from: `${root}/index.html`, to: `${root}/build/index.html`},
  {from: `${root}/assets`, to: `${root}/build/assets`}
]

COPY_FILES.forEach(f => {
  fs.copy(f.from, f.to, e => {
    if (e) throw e
    console.log(`Moved [${f.from} -> ${f.to}]`)
  })
})
