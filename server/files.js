const fs = require('fs')
const fse = require('fs-extra')
const path = require('path')
const root = path.resolve(__dirname, '../')
const util = require(`./util`)

const create = () => {
  const ASSETS_DIR = `${root}/assets`
  const SCENE_DIR = `${root}/src/scenes`
  // 拡張子
  const REG_FILE_NAME = /(.*)(?:\.([^.]+$))/

  // asset作成
  // font-awesomeのwoffファイルを追加
  const FONT_AWESOME_PATH = `${root}/node_modules/@fortawesome/fontawesome-free/webfonts/`
  const FONTS = [
    {
      from: `${FONT_AWESOME_PATH}fa-solid-900.woff2`,
      to: `${root}/assets/font/fontawesome_solid.woff2`
    },
    {
      from: `${FONT_AWESOME_PATH}fa-brands-400.woff2`,
      to: `${root}/assets/font/fontawesome_brands.woff2`
    },
    {
      from: `${FONT_AWESOME_PATH}fa-regular-400.woff2`,
      to: `${root}/assets/font/fontawesome_regular.woff2`
    }
  ]
  FONTS.forEach(f => {
    fse.copy(f.from, f.to, e => {
      if (e) throw e
      console.log(`Moved [${f.from} -> ${f.to}]`)
    })
  })

  // assets以下のファイルの取得
  // Key名の拡張子を削除
  let assetFiles = util.getFilesRec(ASSETS_DIR)
  assetFiles = util.delExtFromKey(assetFiles)

  // asset.jsの作成
  fs.writeFile(
    `${root}/src/auto/assets.js`,
    `export default ${JSON.stringify(assetFiles)}`,
    e => (e ? console.log(e) : '')
  )

  // scene.js作成
  let scenes = Object.keys(util.getFilesRec(SCENE_DIR)).map(f => {
    let fName = f.match(REG_FILE_NAME)[1]
    return {label: fName, className: fName}
  })
  fs.writeFile(
    `${root}/src/auto/scenes.js`,
    `export default ${JSON.stringify(scenes)}`,
    e => (e ? console.log(e) : '')
  )
}
// For npm script
create()
