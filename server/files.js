const fs = require('fs')
const path = require('path')
const root = path.resolve(__dirname, '../')
const util = require(`./util`)

const create = () => {
  const ASSETS_DIR = `${root}/assets`
  const SCENE_DIR = `${root}/src/scenes`
  // 拡張子
  const REG_FILE_NAME = /(.*)(?:\.([^.]+$))/

  // asset作成
  fs.writeFile(
    `${root}/src/auto/assets.js`,
    `export default ${JSON.stringify(util.getFilesRec(ASSETS_DIR))}`,
    e => (e ? console.log(e) : '')
  )

  // scene作成
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
