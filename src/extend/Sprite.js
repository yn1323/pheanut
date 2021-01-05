import common from '../scripts/util/util'

// Spriteクラスの拡張
phina.define('Sprite', {
  superClass: 'Sprite',
  init: function (option) {
    this.superInit(option)
  },
  // スプライトをグリッドに合わせてリサイズ
  // 第1引数がx,yいずれかの場合、縦横比を無視して表示
  // scaleSprite({x: 10})   // 幅をグリッド10個分にリサイズ
  scaleSprite: function (size) {
    if (!size) {
      console.trace('scaleSprite')
      return false
    }
    let originalSize = {
      width: this.srcRect.width,
      height: this.srcRect.height,
    }
    let gridEach = common.grid()
    // 幅、高さ両方指定
    if (size.x && size.y) {
      this.width = size.x * gridEach.width
      this.height = size.y * gridEach.height
    } else {
      let zoom = size.x
        ? (gridEach.width * size.x) / originalSize.width
        : (gridEach.height * size.y) / originalSize.height
      this.width = originalSize.width * zoom
      this.height = originalSize.height * zoom
    }
    return this
  },
})
