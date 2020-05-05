export default {
  name: 'pheanut',
  // レイアウト
  layout: {
    isMobile: true,
    width: window.innerWidth, // モバイル出ない場合の幅
    height: window.innerHeight // モバイル出ない場合の高さ
  },
  // デバッグ
  debug: {
    isDebug: true, // デバッグ
    gridColor: '#aaa' // デバッグ用グリッドの色
  }
}
