// 状態管理
import store from '../store'
// デバッグ用モジュール
import debug from '../scripts/debug'

export default {
  superClass: 'DisplayScene',
  init: function() {
    this.superInit()
    let colors = ['red', 'blue', 'yellow', 'green']
    this.backgroundColor = colors.random()
    // デバッグ処理(stateのdebugに依存)
    debug.run(this)
  }
}
