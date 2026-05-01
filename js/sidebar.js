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
      <img src="images/co_present_20dp_FFFFFF.svg">
      <span>MD</span>
      <img class="arrow" src="images/chevron_right_20dp_F4F6F9.svg">
    </div>
    <ul class="submenu">
      <li><a href="zuankensaku.html">図案情報登録</a></li>
      <li><a href="zuanfuriwake.html">図案振分け</a></li>
    </ul>
  </div>

  <div class="menu-item">
    <div class="menu-title">
      <img src="images/color_lens_20dp_F4F6F9.svg">
      <span>図案管理</span>
      <img class="arrow" src="images/chevron_right_20dp_F4F6F9.svg">
    </div>
    <ul class="submenu">
          <li><a href="betchuzuansakuseiiraikensaku.html">別注図案作成依頼登録・申請</a></li>
          <li><a href="betchuzuansakuseiiraishinsei.html">別注図案作成依頼承認</a></li>
          <li><a href="zuanfuriwakebetchuoem.html">図案振分け（別注/OEM）</a></li>
          <li><a href="zuanteishutsu.html">図案提出</a></li>
          <li><a href="teishutsuzuankensaku.html">図案選定結果登録</a></li>
          <li><a href="zuanshinsei.html">図案申請</a></li>
          <li><a href="zuanshinseikensaku.html">図案承認結果登録</a></li>
    </ul>
  </div>

  <div class="menu-item">
    <div class="menu-title">
      <img src="images/file_present_20dp_FFFFFF.svg">
      <span>見積管理</span>
      <img class="arrow" src="images/chevron_right_20dp_F4F6F9.svg">
    </div>
    <ul class="submenu">
      <li><a href="mitsumoriiraikensaku.html">見積依頼・メーカー決定</a></li>
    </ul>
  </div>

  <div class="menu-item">
    <div class="menu-title">
      <img src="images/edit_document_20dp_F4F6F9.svg">
      <span>仕様書管理</span>
      <img class="arrow" src="images/chevron_right_20dp_F4F6F9.svg">
    </div>
    <ul class="submenu">
      <li><a href="shiyoshokensaku.html">仕様書作成</a></li>
    </ul>
  </div>

  <div class="menu-item">
    <div class="menu-title">
      <img src="images/smart_toy_20dp_F4F6F9_FILL0_wght400_GRAD0_opsz20.svg">
      <span>サンプル管理</span>
      <img class="arrow" src="images/chevron_right_20dp_F4F6F9.svg">
    </div>
    <ul class="submenu">
      <li><a href="sampleshokai.html">サンプル管理</a></li>
      <li><a href="sampleshinseikensaku.html">サンプル承認結果登録</a></li>
      <li><a href="saishusampleteishutsujokyokanri.html">最終サンプル提出状況管理（重点解除）</a></li>
    </ul>
  </div>

  <div class="menu-item">
    <div class="menu-title">
      <img src="images/high_quality_20dp_F4F6F9.svg">
      <span>品質管理</span>
      <img class="arrow" src="images/chevron_right_20dp_F4F6F9.svg">
    </div>
    <ul class="submenu">
      <li><a href="hinshitsukensazuankensaku.html">品質検査合格書登録</a></li>
      <li><a href="hinshitsukensagokakushokensaku.html">品質検査合格書決裁</a></li>
    </ul>
  </div>

  <div class="menu-item">
    <div class="menu-title">
      <img src="images/manufacturing_20dp_F4F6F9_FILL0_wght400_GRAD0_opsz20.svg">
      <span>発注管理</span>
      <img class="arrow" src="images/chevron_right_20dp_F4F6F9.svg">
    </div>
    <ul class="submenu">
      <li><a href="keiyakushosofuiraikakunin.html">契約依頼・発注書作成</a></li>
      <li><a href="hatchujohoMsysemrenkei.html">発注情報Mｼｽﾃﾑ連携</a></li>
      <li><a href="hatchurirekikensaku.html">発注履歴照会</a></li>
    </ul>
  </div>

  <div class="menu-item">
    <div class="menu-title">
      <img src="images/directions_boat_filled_20dp_F4F6F9.svg">
      <span>入荷管理</span>
      <img class="arrow" src="images/chevron_right_20dp_F4F6F9.svg">
    </div>
    <ul class="submenu">
      <li><a href="shipiraishokokunaitehaishoshinseikensaku.html?key=1">Ship依頼書/国内手配書登録</a></li>
      <li><a href="shipiraishokokunaitehaishoshinseikensaku.html?key=2">Ship依頼書/国内手配書決裁</a></li>
      <li><a href="shipiraishososhin.html">Ship依頼書送信</a></li>
      <li><a href="ship_scheduletoroku.html">Shipスケジュール登録</a></li>
      <li><a href="ship_scheduleshokai.html">Shipスケジュール照会</a></li>
      <li><a href="trade-cost-list.html">貿易経費照会</a></li>
      <li><a href="trade-cost-summary.html">貿易経費分析</a></li>
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
      <li><a href="shinchokuMAP.html">進捗マップ</a></li>
      <li><a href="shohinkalist.html">商品化リスト</a></li>
    </ul>
  </div>

  <div class="menu-item">
    <div class="menu-title">
      <img src="images/conversation_20dp_F4F6F9_FILL0_wght400_GRAD0_opsz20.svg">
      <span>評価分析</span>
      <img class="arrow" src="images/chevron_right_20dp_F4F6F9.svg">
    </div>
    <ul class="submenu">
      <li><a href="jinjikokajissekishukei.html">人事考課用実績集計</a></li>
    </ul>
  </div>

  <div class="menu-item">
    <div class="menu-title">
      <img src="images/factory_20dp_F4F6F9.svg">
      <span>工場監査</span>
      <img class="arrow" src="images/chevron_right_20dp_F4F6F9.svg">
    </div>
    <ul class="submenu">
      <li><a href="licensekeiyakujohokensaku.html">ライセンス契約情報入力</a></li>
      <li><a href="licensekeiyakucheck.html">ライセンス契約チェック</a></li>
      <li><a href="kojoninteijohokensaku.html">工場認定情報入力</a></li>
      <li><a href="kojoninteiyukokigenkakunin.html">工場認定有効期限確認</a></li>
    </ul>
  </div>

  <div class="menu-item master-menu">
    <div class="menu-title">
      <img src="images/database_20dp_F4F6F9_FILL0_wght400_GRAD0_opsz20.svg">
      <span>マスタ管理</span>
      <img class="arrow" src="images/chevron_right_20dp_F4F6F9.svg">
    </div>
    <ul class="submenu">
      <li><a href="tenjikainokimaintenanse.html">展示会納期設定</a></li>
      <li><a href="costkanrihyo.html">コスト管理表</a></li>
      <li><a href="shohinjohoichiran.html">商品情報照会</a></li>
      <li><a href="systemsettingsmastermaintenance.html">システム設定マスタメンテナンス</a></li>
      <li><a href="kengengroupmastermaintenanse.html">権限グループマスタメンテナンス</a></li>
      <li><a href="usermasterkensaku.html">ユーザーマスタメンテナンス</a></li>
      <li><a href="licenmastermaintenance.html">ライセンスマスタメンテナンス</a></li>
      <li><a href="licensehimozukemastermaintenance.html">ライセンス/ブランド/キャラクタ紐づけマスタメンテナンス</a></li>
      <li><a href="itembunruihimozukemastermaintenance.html">アイテム大分類/中分類/小分類紐づけマスタメンテナンス</a></li>
      <li><a href="shizaimastermaintenanse.html">資材マスタメンテナンス</a></li>
    </ul>
  </div>

  <img class="sidebar-logo-proma" src="images/logo_proma.bmp" width="120">
  <img class="sidebar-logo-marushin" src="images/logo_white.png" width="155">
</div>
`;

// 図案情報検索ページ専用: 検索条件による一覧絞り込み
window.initZuankensakuFilters = function () {
  var tenjikaiWrap = document.getElementById("searchLicensor");
  var tenjikaiToggle = document.getElementById("searchLicensorToggle");
  var tenjikaiMenu = document.getElementById("searchLicensorMenu");
  var categoryWrap = document.getElementById("searchCategory");
  var categoryToggle = document.getElementById("searchCategoryToggle");
  var categoryMenu = document.getElementById("searchCategoryMenu");
  var inputMeisho = document.getElementById("searchMmeisho");
  var clearBtn = document.getElementById("searchCancelAllBtn");
  var countDisplay = document.getElementById("searchCountDisplay");
  var tbody = document.querySelector("#approvalListArea .result-table tbody");
  if (!tbody) return;

  function buildCategoryOptionsFromDataList() {
    if (!categoryWrap || !categoryMenu) return;
    var listKey = categoryWrap.getAttribute("data-list");
    if (!listKey) return;
    var source = window.AUTOCOMPLETE_LISTS && window.AUTOCOMPLETE_LISTS[listKey];
    if (!Array.isArray(source)) return;

    categoryMenu.innerHTML = "";
    source.forEach(function (item) {
      var label = document.createElement("label");
      label.className = "multi-select-option";

      var input = document.createElement("input");
      input.type = "checkbox";
      input.value = item;

      var span = document.createElement("span");
      span.textContent = item;

      label.appendChild(input);
      label.appendChild(span);
      categoryMenu.appendChild(label);
    });
  }

  buildCategoryOptionsFromDataList();

  var tenjikaiChecks = tenjikaiMenu ? tenjikaiMenu.querySelectorAll('input[type="checkbox"]') : [];
  var categoryChecks = categoryMenu ? categoryMenu.querySelectorAll('input[type="checkbox"]') : [];

  function normalizeText(value) {
    return String(value || "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "")
      .replace(/．/g, ".")
      .replace(/。/g, ".")
      .replace(/０/g, "0")
      .replace(/１/g, "1")
      .replace(/２/g, "2")
      .replace(/３/g, "3")
      .replace(/４/g, "4")
      .replace(/５/g, "5")
      .replace(/６/g, "6")
      .replace(/７/g, "7")
      .replace(/８/g, "8")
      .replace(/９/g, "9");
  }

  function getSelectedValues(checks) {
    var values = [];
    Array.prototype.forEach.call(checks, function (cb) {
      if (cb.checked) values.push(normalizeText(cb.value));
    });
    return values;
  }

  function updateToggleLabel(toggle, checks) {
    if (!toggle) return;
    var checked = [];
    Array.prototype.forEach.call(checks, function (cb) {
      if (cb.checked) checked.push(cb.value);
    });
    if (checked.length === 0) {
      toggle.textContent = "選択してください";
    } else if (checked.length === 1) {
      toggle.textContent = checked[0];
    } else {
      toggle.textContent = checked.length + "件選択中";
    }
  }

  function applyFilter() {
    var visibleCount = 0;
    var condTenjikaiList = getSelectedValues(tenjikaiChecks);
    var condCategoryList = getSelectedValues(categoryChecks);
    var condMeisho = inputMeisho ? normalizeText(inputMeisho.value) : "";

    Array.prototype.forEach.call(tbody.rows, function (row) {
      var cellTenjikai = row.cells[1] ? normalizeText(row.cells[1].textContent) : "";
      var cellCategory = row.cells[2] ? normalizeText(row.cells[2].textContent) : "";
      var cellMeisho = row.cells[3] ? normalizeText(row.cells[3].textContent) : "";
      var match = true;

      if (condTenjikaiList.length > 0 && condTenjikaiList.indexOf(cellTenjikai) === -1) match = false;
      if (condCategoryList.length > 0 && condCategoryList.indexOf(cellCategory) === -1) match = false;
      if (condMeisho && cellMeisho.indexOf(condMeisho) === -1) match = false;

      row.style.display = match ? "" : "none";
      if (match) visibleCount++;
    });

    if (countDisplay) countDisplay.textContent = visibleCount + "件";
  }

  if (tenjikaiToggle && tenjikaiWrap) {
    tenjikaiToggle.addEventListener("click", function (event) {
      event.stopPropagation();
      var isOpen = tenjikaiWrap.classList.toggle("is-open");
      tenjikaiToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  if (categoryToggle && categoryWrap) {
    categoryToggle.addEventListener("click", function (event) {
      event.stopPropagation();
      var isOpen = categoryWrap.classList.toggle("is-open");
      categoryToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  Array.prototype.forEach.call(tenjikaiChecks, function (cb) {
    cb.addEventListener("change", function () {
      updateToggleLabel(tenjikaiToggle, tenjikaiChecks);
      applyFilter();
    });
  });

  Array.prototype.forEach.call(categoryChecks, function (cb) {
    cb.addEventListener("change", function () {
      updateToggleLabel(categoryToggle, categoryChecks);
      applyFilter();
    });
  });

  if (inputMeisho) {
    ["change", "input", "keyup", "blur"].forEach(function (evt) {
      inputMeisho.addEventListener(evt, applyFilter);
    });
  }

  document.addEventListener("click", function (event) {
    var target = event.target;
    if (tenjikaiWrap && !tenjikaiWrap.contains(target)) {
      tenjikaiWrap.classList.remove("is-open");
      if (tenjikaiToggle) tenjikaiToggle.setAttribute("aria-expanded", "false");
    }
    if (categoryWrap && !categoryWrap.contains(target)) {
      categoryWrap.classList.remove("is-open");
      if (categoryToggle) categoryToggle.setAttribute("aria-expanded", "false");
    }
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", function () {
      Array.prototype.forEach.call(tenjikaiChecks, function (cb) { cb.checked = false; });
      Array.prototype.forEach.call(categoryChecks, function (cb) { cb.checked = false; });
      updateToggleLabel(tenjikaiToggle, tenjikaiChecks);
      updateToggleLabel(categoryToggle, categoryChecks);
      if (inputMeisho) inputMeisho.value = "";
      applyFilter();
    });
  }

  updateToggleLabel(tenjikaiToggle, tenjikaiChecks);
  updateToggleLabel(categoryToggle, categoryChecks);
  applyFilter();
};

window.initSidebarNestedMenuToggle = function () {
  if (window.__sidebarNestedMenuToggleInitialized) return;
  window.__sidebarNestedMenuToggleInitialized = true;

  document.addEventListener("click", function (event) {
    var target = event.target;
    if (!(target instanceof Element)) return;

    var childToggle = target.closest(".submenu-group-toggle");
    if (childToggle) {
      var group = childToggle.closest(".submenu-group");
      if (!group) return;

      var allGroups = document.querySelectorAll(".submenu-group.is-open");
      Array.prototype.forEach.call(allGroups, function (openGroup) {
        if (openGroup !== group) {
          openGroup.classList.remove("is-open");
          var openToggle = openGroup.querySelector(".submenu-group-toggle");
          if (openToggle) openToggle.setAttribute("aria-expanded", "false");
        }
      });

      var isChildOpen = group.classList.toggle("is-open");
      childToggle.setAttribute("aria-expanded", isChildOpen ? "true" : "false");
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    var clickedInsideSubmenu = target.closest(".submenu");
    if (!clickedInsideSubmenu) {
      var opened = document.querySelectorAll(".submenu-group.is-open");
      Array.prototype.forEach.call(opened, function (openGroup) {
        openGroup.classList.remove("is-open");
        var openToggle = openGroup.querySelector(".submenu-group-toggle");
        if (openToggle) openToggle.setAttribute("aria-expanded", "false");
      });
    }
  });
};

window.initSidebarNestedMenuToggle();
