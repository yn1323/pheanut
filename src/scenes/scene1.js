// 状態管理
import store from '../store'
// デバッグ用モジュール
import '../scripts/util/debug'
// Phina.jsの拡張
import '../extend'

export default {
  superClass: 'DisplayScene',
  // GameApp.runのオプション(画面サイズなど)を引き継ぐ
  init: function (option) {
    this.superInit(option)
    let colors = ['red', 'blue', 'yellow', 'green']
    this.backgroundColor = '#ccc'
    // デバッグ処理(stateのdebugに依存)
    Debug(this)
    // 画像表示
    Sprite('note')
      .scaleSprite({x: 6})
      .addChildTo(this)
      .setPosition(this.gridX.center(0), this.gridY.center(0))

    // Font Awesomeを表示
    // server/config.jsで設定を変更する必要あり
    Label({
      text: String.fromCharCode('0xf17b'),
      fontFamily: 'FontAwesome_brands',
    })
      .addChildTo(this)
      .setPosition(this.gridX.center(-5), this.gridY.center(3))

    // ドット文字の表示
    // server/config.jsで設定を変更する必要あり
    Label({
      text: 'ドット フォント',
      fontFamily: 'dotfont',
    })
      .addChildTo(this)
      .setPosition(this.gridX.center(5), this.gridY.center(-5))

    Label({
      text: 'ふつうのフォント',
    })
      .addChildTo(this)
      .setPosition(this.gridX.center(3), this.gridY.center(-6))
  },
}
