window.SHARED_SIDEBAR_HTML = `
<div class="sidebar">
  <button class="sidebar-toggle">
    <img src="images/chevron_left_20dp_FFFFF.svg" alt="toggle">
  </button>
  <h2>メニュー</h2>

  <div class="menu-item">
    <div class="menu-title">
      <img src="images/linear_scale_20dp_F4F6F9.svg">
      <span>進捗管理</span>
      <img class="arrow" src="images/chevron_right_20dp_F4F6F9.svg">
    </div>
    <ul class="submenu">
      <li><a href="shinkojokyokakunin_shiyoshobetsu_shohimbetsu.html">進行状況確認（仕様書別・商品別）</a></li>
      <li><a href="shinkojokyokakunin_tantoshabetsu_nyukojokyo.html">進行状況確認（担当者別入稿状況）</a></li>
      <li><a href="hatchujokyokanri.html">発注状況管理</a></li>
      <li><a href="manifesto.html">マニフェスト管理</a></li>
    </ul>
  </div>

  <div class="menu-item">
    <div class="menu-title">
      <img src="images/color_lens_20dp_F4F6F9.svg">
      <span>図案管理</span>
      <img class="arrow" src="images/chevron_right_20dp_F4F6F9.svg">
    </div>
    <ul class="submenu">
      <li><a href="mitsumoriiraikensaku.html">見積依頼入力・送信</a></li>
      <li><a href="#">見積回答登録・メーカー決定</a></li>
      <li><a href="betchuzuansakuseiiraitorokushinsei.html">別注図案作成依頼登録・申請</a></li>
      <li><a href="betchuzuansakuseiiraishonin.html">別注図案作成依頼承認</a></li>
      <li><a href="zuankensaku.html">図案情報登録</a></li>
      <li><a href="zuanfuriwake.html">図案振分け</a></li>
      <li><a href="zuanteishutsu.html">図案提出</a></li>
      <li><a href="zuansenteikekkatoroku.html">図案選定結果登録</a></li>
      <li><a href="zuanshinsei.html">図案申請</a></li>
      <li><a href="zuanshoninkekkatoroku.html">図案承認結果登録</a></li>
      <li><a href="mitsumorizuanupload.html">見積図案アップロード</a></li>
    </ul>
  </div>

  <div class="menu-item">
    <div class="menu-title">
      <img src="images/edit_document_20dp_F4F6F9.svg">
      <span>仕様書管理</span>
      <img class="arrow" src="images/chevron_right_20dp_F4F6F9.svg">
    </div>
    <ul class="submenu">
      <li><a href="#">仕様書情報登録</a></li>
      <li><a href="#">仕様書情報決済</a></li>
      <li><a href="#">仕様書情報入稿</a></li>
      <li><a href="#">サンプル承認結果登録</a></li>
    </ul>
  </div>

  <div class="menu-item">
    <div class="menu-title">
      <img src="images/smart_toy_20dp_F4F6F9_FILL0_wght400_GRAD0_opsz20.svg">
      <span>サンプル管理</span>
      <img class="arrow" src="images/chevron_right_20dp_F4F6F9.svg">
    </div>
    <ul class="submenu">
      <li><a href="sampleshinseikensaku.html">サンプル管理</a></li>
      <li><a href="#">最終サンプル提出状況管理（重点解除）</a></li>
    </ul>
  </div>

  <div class="menu-item">
    <div class="menu-title">
      <img src="images/high_quality_20dp_F4F6F9.svg">
      <span>品質管理</span>
      <img class="arrow" src="images/chevron_right_20dp_F4F6F9.svg">
    </div>
    <ul class="submenu">
      <li><a href="#">品質検査合格書登録</a></li>
      <li><a href="#">品質検査合格書決済</a></li>
    </ul>
  </div>

  <div class="menu-item">
    <div class="menu-title">
      <img src="images/manufacturing_20dp_F4F6F9_FILL0_wght400_GRAD0_opsz20.svg">
      <span>発注管理</span>
      <img class="arrow" src="images/chevron_right_20dp_F4F6F9.svg">
    </div>
    <ul class="submenu">
      <li><a href="keiyakushosofuirai.html">契約書送付依頼</a></li>
      <li><a href="#">契約書登録</a></li>
      <li><a href="#">発注入力</a></li>
      <li><a href="#">発注書決済</a></li>
      <li><a href="#">証紙依頼書入力</a></li>
      <li><a href="#">証紙依頼書決済</a></li>
      <li><a href="#">契約書サイン</a></li>
      <li><a href="#">契約書送信</a></li>
      <li><a href="hatchujohoMsysemrenkei.html">発注情報Mｼｽﾃﾑ連携</a></li>
      <li><a href="#">発注履歴照会</a></li>
    </ul>
  </div>

  <div class="menu-item">
    <div class="menu-title">
      <img src="images/directions_boat_filled_20dp_F4F6F9.svg">
      <span>入荷管理</span>
      <img class="arrow" src="images/chevron_right_20dp_F4F6F9.svg">
    </div>
    <ul class="submenu">
      <li><a href="#">Ship依頼書/国内手配書登録</a></li>
      <li><a href="#">Ship依頼書/国内手配書決済</a></li>
      <li><a href="#">Ship依頼書送信</a></li>
    </ul>
  </div>

  <div class="menu-item">
    <div class="menu-title">
      <img src="images/map_20dp_F4F6F9.svg">
      <span>マップ管理</span>
      <img class="arrow" src="images/chevron_right_20dp_F4F6F9.svg">
    </div>
    <ul class="submenu">
      <li><a href="shohimmappuseisei.html">商品マップ生成</a></li>
      <li><a href="shohinMAPkokai.html">商品マップ公開</a></li>
    </ul>
  </div>

  <div class="menu-item">
    <div class="menu-title">
      <img src="images/conversation_20dp_F4F6F9_FILL0_wght400_GRAD0_opsz20.svg">
      <span>評価分析</span>
      <img class="arrow" src="images/chevron_right_20dp_F4F6F9.svg">
    </div>
    <ul class="submenu">
      <li><a href="#">人事考課用実績集計</a></li>
    </ul>
  </div>

  <div class="menu-item">
    <div class="menu-title">
      <img src="images/factory_20dp_F4F6F9.svg">
      <span>工場監査</span>
      <img class="arrow" src="images/chevron_right_20dp_F4F6F9.svg">
    </div>
    <ul class="submenu">
      <li><a href="#">ライセンス契約情報入力</a></li>
      <li><a href="#">ライセンス契約チェック</a></li>
      <li><a href="#">工場認定情報入力</a></li>
      <li><a href="#">工場認定有効期限確認</a></li>
    </ul>
  </div>

  <div class="menu-item">
    <div class="menu-title">
      <img src="images/database_20dp_F4F6F9_FILL0_wght400_GRAD0_opsz20.svg">
      <span>マスタ管理</span>
      <img class="arrow" src="images/chevron_right_20dp_F4F6F9.svg">
    </div>
    <ul class="submenu">
      <li><a href="#">コスト管理表</a></li>
      <li><a href="#">商品情報照会</a></li>
      <li><a href="#">システム設定マスタメンテナンス</a></li>
      <li><a href="#">権限グループマスタメンテナンス</a></li>
      <li><a href="#">ユーザーマスタメンテナンス</a></li>
      <li><a href="#">ライセンスマスタメンテナンス</a></li>
      <li><a href="#">ブランドマスタメンテナンス</a></li>
      <li><a href="#">キャラクタマスタメンテナンス</a></li>
      <li><a href="#">アイテム大分類マスタメンテナンス</a></li>
      <li><a href="#">アイテム中分類マスタメンテナンス</a></li>
      <li><a href="#">アイテム小分類マスタメンテナンス</a></li>
      <li><a href="#">資材マスタメンテナンス</a></li>
    </ul>
  </div>

  <img class="sidebar-logo-proma" src="images/logo_proma.bmp" width="120">
  <img class="sidebar-logo-marushin" src="images/logo_white.png" width="155">
</div>
`;
