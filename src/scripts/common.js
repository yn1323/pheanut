// 共通処理

// 状態管理
import store from '../store'

// エラーメッセージ用
const fileName = 'common.js'

const common = {
  // 画面サイズ
  screen: () => {
    // モバイル以外は画面サイズ最大
    if (!store.layout.isMobile) {
      return store.layout
    }
    // 幅に対する比率
    const RATIO = 1.77
    const WIDTH =
      window.innerHeight > window.innerWidth ? window.innerWidth : 500
    const HEIGHT = WIDTH * RATIO
    return {width: WIDTH, height: HEIGHT}
  },
  // グリッド1つ分のサイズ取得
  grid: () => {
    let size = common.screen()
    return {width: size.width / 16, height: size.height / 16}
  },
  // デバッグ用グリッド表示
  debugGrid: scene => {
    const COLOR = store.debug.gridColor
    let gx = scene.gridX
    let gy = scene.gridY
    // 横線
    let axeX = RectangleShape({
      width: gx.width,
      height: 2,
      fill: COLOR
    })
      .addChildTo(scene)
      .setPosition(gx.center(), gy.center())
    axeX.alpha = 0.5
    // 縦線
    let axeY = RectangleShape({
      width: 2,
      height: gy.width,
      fill: COLOR
    })
      .addChildTo(scene)
      .setPosition(gx.center(), gy.center())
    axeY.alpha = 0.5
    // グリッド点
    let pointGroup = DisplayElement().addChildTo(scene)

    ;(17).times(spanX => {
      ;(17).times(spanY => {
        let point = CircleShape({
          radius: 2,
          fill: COLOR
        })
          .addChildTo(pointGroup)
          .setPosition(gx.span(spanX), gy.span(spanY))
      })
    })
  },
  // スプライトをグリッドに合わせてリサイズ
  // 第2引数がx,yいずれかの場合、縦横比を無視して表示
  // scaleSprite("image.png", {x: 10})   // 幅をグリッド10個分にリサイズ
  scaleSprite: (img, size) => {
    if (!img || !size) {
      console.trace(`${fileName}_scaleSprite`)
      return false;
    }
    let sprite = Sprite(img)
    let originalSize = {
      width: sprite.srcRect.width,
      height: sprite.srcRect.height
    }
    let gridEach = common.grid()
    // 幅、高さ両方指定
    if (size.x && size.y) {
      sprite.width = size.x * gridEach.width
      sprite.height = size.y * gridEach.height
    } else {
      let zoom = size.x
        ? (gridEach.width * size.x) / originalSize.width
        : (gridEach.height * size.y) / originalSize.height
      sprite.width = originalSize.width * zoom
      sprite.height = originalSize.height * zoom
    }
    return sprite
  }
}

export default common
