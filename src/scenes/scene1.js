// 状態管理
import store from '../store'
// デバッグ用モジュール
import '../scripts/util/debug'
// Phina.jsの拡張
import '../extend'

export default {
  superClass: 'DisplayScene',
  // GameApp.runのオプション(画面サイズなど)を引き継ぐ
  init: function(option) {
    this.superInit(option)
    let colors = ['red', 'blue', 'yellow', 'green']
    this.backgroundColor = colors.random()
    // デバッグ処理(stateのdebugに依存)
    Debug(this)
    // 画像表示
    Sprite('note.png')
      .scaleSprite({x: 6})
      .addChildTo(this)
      .setPosition(this.gridX.center(0), this.gridY.center(0))
  }
}
