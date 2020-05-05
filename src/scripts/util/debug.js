import store from '../../store'

phina.define('Debug', {
  init: function (scene) {
    if(!store.debug) return false;
    this.scene = scene;
    this.debugGrid();
  },
  // デバッグ用グリッド表示
  debugGrid: function() {
    const COLOR = store.debug.gridColor
    let scene = this.scene;
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

      ; (17).times(spanX => {
        ; (17).times(spanY => {
          let point = CircleShape({
            radius: 2,
            fill: COLOR
          })
            .addChildTo(pointGroup)
            .setPosition(gx.span(spanX), gy.span(spanY))
        })
      })
  }
})
