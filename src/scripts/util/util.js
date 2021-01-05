// 共通処理

// 状態管理
import store from '../../store'

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
    return { width: WIDTH, height: HEIGHT }
  },
  // グリッド1つ分のサイズ取得
  grid: () => {
    let size = common.screen()
    return { width: size.width / 16, height: size.height / 16 }
  },
}

export default common
