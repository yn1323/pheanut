// 自動生成
import assets from './auto/assets'
import scenes from './auto/scenes'
// 状態管理
import store from './store'
// Phina.js読み込み
import 'phina.js'
phina.globalize()
// シーンクラスのインスタンス化
scenes.forEach(f => {
  import('./scenes/' + f.label).then(p => phina.define(f.label, p.default))
})

// ゲーム初期設定
const CONFIG = {
  startLabel: 'scene1', // 起動画面
  assets: assets, // 素材一覧
  height: 200, // 高さ
  width: 500, // 幅
  scenes: scenes // シーン一覧
}
// Phina.jsの起動
phina.main(() => GameApp(CONFIG).run())
