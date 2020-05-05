// 共通処理

// 状態管理
import store from '../store'

export default {
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
  grid: () => {
    let size = this.screen()
    return {width: size.width / 16, height: size.height / 16}
  },
  // デバッグ用グリッド
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
  }
}
