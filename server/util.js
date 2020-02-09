const fs = require('fs')
const path = require('path')
const root = path.resolve(__dirname, '../')

const util = {
  // ファイル取得
  getFiles: dir => fs.readdirSync(dir, {withFileTypes: true}),
  // assets用ファイル取得(再帰)
  getFilesRec: dir =>
    util
      .getFiles(dir)
      .filter(dirent => !dirent.name.startsWith('.'))
      .reduce((obj, file) => {
        obj[file.name] = file.isFile()
          ? `${dir.replace(root, '')}/${file.name}`
          : util.getFilesRec(`${dir}/${file.name}`)
        return obj
      }, {})
}

module.exports = util
