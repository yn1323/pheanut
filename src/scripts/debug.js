// デバッグ用

// 状態管理
import store from '../store'
import common from './common'

export default {
  run: scene => {
    if (!store.debug.isDebug) {
      return false
    }
    // デバッググリッドの表示
    common.debugGrid(scene)
  }
}
