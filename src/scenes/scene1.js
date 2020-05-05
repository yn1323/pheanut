// 状態管理
import store from '../store'
// デバッグ用モジュール
import debug from '../scripts/debug'
import common from '../scripts/common'

export default {
  superClass: 'DisplayScene',
  // GameApp.runのオプション(画面サイズなど)を引き継ぐ
  init: function(option) {
    this.superInit(option)
    let colors = ['red', 'blue', 'yellow', 'green']
    this.backgroundColor = colors.random()
    // デバッグ処理(stateのdebugに依存)
    debug.run(this)
    // 画像表示
    common
      .scaleSprite('note.png')
      .addChildTo(this)
      .setPosition(this.gridX.center(0), this.gridY.center(0))
  }
}
