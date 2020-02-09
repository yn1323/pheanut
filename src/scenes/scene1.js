// 状態管理
import store from '../store'

export default {
  superClass: 'DisplayScene',
  init: function() {
    this.superInit()
    let colors = ['red', 'blue', 'yellow', 'green']
    this.backgroundColor = colors.random()
  }
}
