export default {
  name: 'pheanut',
  // レイアウト
  layout: {
    isMobile: true,
    width: window.innerWidth, // モバイルでない場合の幅
    height: window.innerHeight // モバイルでない場合の高さ
  },
  // デバッグ
  debug: {
    isDebug: true, // デバッグ
    gridColor: '#aaa' // デバッグ用グリッドの色
  }
}
