// 状態管理
import store from '../store'
// デバッグ用モジュール
import debug from '../scripts/debug'

export default {
  superClass: 'DisplayScene',
  // GameApp.runのオプション(画面サイズなど)を引き継ぐ
  init: function(option) {
    this.superInit(option)
    let colors = ['red', 'blue', 'yellow', 'green']
    this.backgroundColor = colors.random()
    // デバッグ処理(stateのdebugに依存)
    debug.run(this)
  }
}
