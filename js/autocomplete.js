const lists = {

character:[
  "ジブリ",
  "ムーミン",
  "ディズニー",
  "ドラえもん",
  "ちいかわ"
],
brand:[
  "UNIQLO",
  "GU",
  "NIKE",
  "adidas",
  "PUMA"
],
category:[
  "単品","総合","AW","BTS","サマー","キャラジャン","水野","ゴルフ
  ],  
//得意先
customer:[
  "得意先名１", "得意先名２", "得意先名３", "得意先名４", "得意先名５", 
  "得意先名６", "得意先名７", "得意先名８", "得意先名９", "得意先名１０",
 ],
//仕入先
supplier:[
  "今治ソフトパイル株式会社", "南通華東紡績（Nantong Huadong）", "泉州ガーゼ織物", "株式会社コットンロード", "青島恒泰繊維有限公司",
  "オーガニック・ループ製織", "彩り染タオル製作所", "広州美雅実業", "愛媛テキスタイル工房", "上海ジャガード・インダストリー",
  "株式会社ふわふわ繊維", "山東省天紅紡織集団", "瀬戸内ジャガード織", "ホワイトクラウド・リネン", "極上無撚糸タオル",
  "寧波ゴールデン・テリー", "シャーリング加工・サトウ", "伊予染工", "深セン誠信輸出入有限公司", "株式会社バスタイム・アメニティ",
  "伝統織物・泉州屋", "モダン・ヘム縫製", "サンライズ・パイル", "エコアース・コットン", "浙江万豊紡織",
  "株式会社マシュマロ・タッチ", "ハイクオリティ・ウォッシュ", "四国タオル資材", "スピード刺しゅう工業", "株式会社エブリデイ・タオル"
 ],
 creator:[
  "担当者1", "担当者2", "担当者3", "担当者4", "担当者5",
  "担当者6", "担当者7", "担当者8", "担当者9", "担当者10",
  "担当者11", "担当者12", "担当者13", "担当者14", "担当者15",
  "担当者16", "担当者17", "担当者18", "担当者19", "担当者20"
 ],
// 所属課（担当者別入稿状況用）
department:[
  "第1課",
  "第2課",
  "第3課"
],
// 担当者（担当者別入稿状況用）
tanto:[
  "デザイナー①",
  "デザイナー②",
  "デザイナー③",
  "デザイナー④",
  "デザイナー⑤"
],
 contractNo:[
  "1234567890", "1234567891", "1234567892", "1234567893", "1234567894",
  "1234567895", "1234567896", "1234567897", "1234567898", "1234567899",
  "1234567890", "1234567891", "1234567892", "1234567893", "1234567894",
  "1234567895", "1234567896", "1234567897", "1234567898", "1234567899"
 ],
 productName:[
  "商品名1", "商品名2", "商品名3", "商品名4", "商品名5",
  "商品名6", "商品名7", "商品名8", "商品名9", "商品名10",
  "商品名11", "商品名12", "商品名13", "商品名14", "商品名15",
  "商品名16", "商品名17", "商品名18", "商品名19", "商品名20"
 ],
item:[
  "ミニタオル",
  "ウォッシュタオル",
  "フェイスタオル",
  "バスタオル",
  "マフラータオル",
  "お出かけタオル",
  "ビックバスタオル",
  "ループタオル",
  "ポケット2P",
  "ミニタオル３Ｐ",
  "ファスナー付き",
  "ポケット付き",
  "ドレスタオル",
  "タオルバスマット",
  "ヘアーバンド",
  "3色ミニハンカチ",
  "ガーゼハンカチ",
  "タオル枕カバー",
  "手ぬぐい",
  "マキタオル６０",
  "マキタオル８０",
  "マキタオル１００",
  "その他マキタオル",
  "バスローブ",
  "Dビーチタオル",
  "ビーチスティック",
  "フード付きタオル",
  "フード付きポンチョ",
  "タオルケープ",
  "レジャーバスタオル",
  "スポーツタオル",
  "ジュニアバスタオル",
  "お昼寝ケット",
  "タオルケット",
  "ラウンドビーチ",
  "キャップタオル",
  "ビーチバック",
  "ひざ掛け",
  "ハーフ毛布",
  "毛布",
  "敷きパット",
  "ラップ毛布",
  "ジュニア毛布",
  "着る毛布",
  "ケープ",
  "スリーパー",
  "お昼寝セット",
  "ジュニア枕",
  "ラウンド毛布",
  "ネックウォーマー",
  "ポーチ",
  "バック",
  "巾着",
  "口金ポーチ",
  "ランチョンマット",
  "ストール",
  "ハンカチーフ",
  "ランチーフ",
  "キッチンタオル",
  "マルチクロス",
  "キッチンミトン",
  "鍋敷き",
  "お風呂タオル",
  "エプロン",
  "作務衣・甚平・はんてん",
  "ポンチョ",
  "クッションカバー",
  "クッション（綿入り）",
  "スクールクッション",
  "シートクッション",
  "トイレタリー",
  "ペーパーホルダー",
  "バスマット",
  "キッチンマット",
  "ティッシュＢＯＸカバー",
  "ラグマット",
  "マルチカバー",
  "スリッパ",
  "ルームシューズ",
  "掛けカバー",
  "敷きカバー",
  "ピロケース",
  "こたつ",
  "その他ギフト",
  "とじものWT1P",
  "とじものWT2P",
  "とじものWT3P",
  "とじものFT1P",
  "とじものFT2P",
  "とじものBT1P",
  "マーメイドB/K",
  "B/Kinポーチ",
  "玄関マット",
  "マルチケース",
  "ベビー雑貨",
  "ベビー寝装",
  "ベビータオル",
  "ベビーインテリア",
  "キッチン雑貨",
  "その他タオル",
  "その他サマー",
  "その他寝装",
  "その他インテリア",
  "その他雑貨",
  "その他新入学",
  "パックタオル",
  "ぞうきん",
  "カバーリング",
  "ギフト（タオル）",
  "ギフト（寝装）",
  "ギフト（インテリア）",
  "パーソナルギフト",
  "オーナメントギフト",
  "バンダナ・風呂敷",
  "チェアシート",
  "刺繍ブローチ",
  "コースター",
  "ランドリーバッグ",
  "頭巻きタオル",
  "新入学ミニタオル",
  "腹巻き",
  "収納ボックス",
  "マスコットネックピロ",
  "タオルエプロン",
  "カレンダーギフト",
  "ジュニアエコバック",
  "ナップサック",
  "シューズバッグ",
  "レッスンバッグ",
  "ポケットポーチ",
  "レジャーシート",
  "お出かけシート",
  "ピクニックマット",
  "新入学ハンカチーフ",
  "新入学ランチーフ",
  "背当てタオル",
  "湯上げタオル",
  "新入学リュックサック",
  "レジャーバッグ",
  "キャリータオル",
  "スキニータオル",
  "スカジャン",
  "エコバッグ",
  "腰あてクッション",
  "文房具",
  "氷のう",
  "ゴルフ企画",
  "水野商品",
  "スポンジ",
  "トラベル商品",
  "湯たんぽ",
  "タブレットケース",
  "スタジャン",
  "アロハシャツ",
  "Tシャツ",
  "ジージャン",
  "ジャージ",
  "ペットボトルカバー",
  "ネームタグ",
  "エアタグ",
  "靴下",
  "ペット商品",
  "カー用品",
  "その他"
],
brandChara:[
  "ジブリ", "ムーミン", "ディズニー", "マーベル", "スターウォーズ", "サンリオ", "ミッフィー", "トーマス",
  "くまのがっこう", "オサムグッズ", "スタジオ地図", "スタジオポノック", "ＪＡＬ", "Wendy's", "いないいないばあ",
  "バービー", "ピーターラビット", "リサ＆ガスパール", "カレルチャペック", "リサ・ラーソン", "ドラえもん",
  "ベイビーシャーク", "クマーバ", "ユニバーサル", "ペッパピッグ", "名探偵コナン", "ウォーリーをさがせ", "ミニオンズ", "オブチアキコ",
  "リラックマ", "すみっコぐらし"
],
//品種
productType:[
  "品種１", "品種２", "品種３", "品種４", "品種５", 
  "品種６", "品種７", "品種８", "品種９", "品種１０"
],
//配色
colorScheme:[
  "配色１", "配色２", "配色３", "配色４", "配色５", 
  "配色６", "配色７", "配色８", "配色９", "配色１０"
],
//発注先
orderNo:[
  "CT-2026-0001", "CT-2026-0002", "CT-2026-0003", "CT-2026-0004", "CT-2026-0005", 
  "CT-2026-0006", "CT-2026-0007", "CT-2026-0008", "CT-2026-0009", "CT-2026-0010", "CT-2026-0011"
]
}

// ひらがな入力でもカタカナの候補にマッチさせるための正規化
function toKatakana(str) {
  return str.replace(/[\u3041-\u3096]/g, ch =>
    String.fromCharCode(ch.charCodeAt(0) + 0x60)
  )
}

/**
 * 1つの .autocomplete 要素にオートコンプリートをバインドする。
 * ページ読み込み時の既存要素と、createSupplierRow 等で後から追加した行の両方で使う。
 */
function initAutocomplete(box) {
  if (!box || box.dataset.autocompleteInitialized === "1") return

  const input = box.querySelector(".autocomplete-input")
  const dropdown = box.querySelector(".autocomplete-dropdown")
  if (!input || !dropdown) return

  const data = lists[input.dataset.list]
  if (!data || !Array.isArray(data)) {
    return
  }

  function render(list) {
    dropdown.innerHTML = ""

    list.forEach(item => {
      const div = document.createElement("div")
      div.textContent = item

      div.addEventListener("click", () => {
        input.value = item
        dropdown.style.display = "none"
      })

      dropdown.appendChild(div)
    })
  }

  function search(keyword) {
    const normalizedKeyword = toKatakana(keyword.toLowerCase())

    return data.filter(item => {
      const normalizedItem = toKatakana(item.toLowerCase())
      return normalizedItem.includes(normalizedKeyword)
    })
  }

  input.addEventListener("focus", () => {
    render(data)
    dropdown.style.display = "block"
  })

  input.addEventListener("input", () => {
    const keyword = input.value.trim()

    if (keyword === "") {
      render(data)
    } else {
      render(search(keyword))
    }

    dropdown.style.display = "block"
  })

  document.addEventListener("click", e => {
    if (!box.contains(e.target)) {
      dropdown.style.display = "none"
    }
  })

  box.dataset.autocompleteInitialized = "1"
}

window.initAutocomplete = initAutocomplete

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".autocomplete").forEach(initAutocomplete)

  // 検索条件：期間 From～To（書式 yyyymmdd・カレンダー連動）
  initPeriodRangeInputs()
  // Fromのみの日付入力（1フィールド）
  initPeriodFromOnlyInputs()
})

/** yyyymmdd 8桁のみ許可（入力中は数字以外を除去） */
function normalizeYyyymmddInput(raw) {
  return String(raw || "").replace(/\D/g, "").slice(0, 8)
}

/** yyyymmdd を妥当な日付か判定 */
function isValidYyyymmdd(s) {
  if (!/^\d{8}$/.test(s)) return false
  const y = parseInt(s.slice(0, 4), 10)
  const m = parseInt(s.slice(4, 6), 10)
  const d = parseInt(s.slice(6, 8), 10)
  if (m < 1 || m > 12 || d < 1 || d > 31) return false
  const dt = new Date(Date.UTC(y, m - 1, d))
  return dt.getUTCFullYear() === y && dt.getUTCMonth() === m - 1 && dt.getUTCDate() === d
}

/** Date または yyyy-mm-dd 文字列 → yyyymmdd */
function toYyyymmdd(dateOrIso) {
  if (!dateOrIso) return ""
  if (typeof dateOrIso === "string" && /^\d{4}-\d{2}-\d{2}$/.test(dateOrIso)) {
    return dateOrIso.replace(/-/g, "")
  }
  const d = dateOrIso instanceof Date ? dateOrIso : new Date(dateOrIso)
  if (isNaN(d.getTime())) return ""
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, "0")
  const day = String(d.getDate()).padStart(2, "0")
  return `${y}${m}${day}`
}

/** yyyymmdd → yyyy-mm-dd（ネイティブ date の value 用・ローカル日として解釈） */
function yyyymmddToIsoDate(s) {
  if (!isValidYyyymmdd(s)) return ""
  return `${s.slice(0, 4)}-${s.slice(4, 6)}-${s.slice(6, 8)}`
}

/**
 * .period-range-row 内の yyyymmdd テキスト＋カレンダー用 date を初期化。
 * 表示・送信値は常に yyyymmdd。カレンダー選択時に 8 桁へ変換して入れる。
 */
function initPeriodRangeInputs() {
  const row = document.querySelector(".period-range-row")
  if (!row) return

  const fields = row.querySelectorAll(".period-range-field")
  if (fields.length < 2) return

  const fromField = fields[0]
  const toField = fields[1]
  const fromInput = fromField.querySelector(".period-range-yyyymmdd")
  const toInput = toField.querySelector(".period-range-yyyymmdd")
  const fromPicker = fromField.querySelector(".period-range-picker")
  const toPicker = toField.querySelector(".period-range-picker")
  const fromBtn = fromField.querySelector(".period-range-calendar-btn")
  const toBtn = toField.querySelector(".period-range-calendar-btn")
  if (!fromInput || !toInput) return

  function syncPickerFromText(picker, textInput) {
    const iso = yyyymmddToIsoDate(normalizeYyyymmddInput(textInput.value))
    if (iso) picker.value = iso
    else picker.value = ""
  }

  function openPicker(picker, textInput) {
    syncPickerFromText(picker, textInput)
    if (typeof picker.showPicker === "function") {
      try {
        picker.showPicker()
      } catch (_) {
        picker.focus()
        picker.click()
      }
    } else {
      picker.focus()
    }
  }

  function onPickerChange(picker, textInput) {
    if (!picker.value) return
    textInput.value = toYyyymmdd(picker.value)
    textInput.dispatchEvent(new Event("change", { bubbles: true }))
    syncBounds()
  }

  function syncBounds() {
    const fromVal = normalizeYyyymmddInput(fromInput.value)
    const toVal = normalizeYyyymmddInput(toInput.value)
    if (isValidYyyymmdd(fromVal) && isValidYyyymmdd(toVal) && fromVal > toVal) {
      toInput.value = fromVal
    }
    // カレンダーの min/max は yyyy-mm-dd
    const fromIso = yyyymmddToIsoDate(normalizeYyyymmddInput(fromInput.value))
    const toIso = yyyymmddToIsoDate(normalizeYyyymmddInput(toInput.value))
    if (fromIso) {
      toPicker.min = fromIso
    } else {
      toPicker.removeAttribute("min")
    }
    if (toIso) {
      fromPicker.max = toIso
    } else {
      fromPicker.removeAttribute("max")
    }
  }

  function onTextInput(el) {
    el.value = normalizeYyyymmddInput(el.value)
    el.classList.toggle("period-range-invalid", el.value.length === 8 && !isValidYyyymmdd(el.value))
  }

  fromInput.addEventListener("input", () => onTextInput(fromInput))
  toInput.addEventListener("input", () => onTextInput(toInput))
  fromInput.addEventListener("blur", () => {
    onTextInput(fromInput)
    syncBounds()
  })
  toInput.addEventListener("blur", () => {
    onTextInput(toInput)
    syncBounds()
  })

  if (fromPicker && fromBtn) {
    fromBtn.addEventListener("click", () => openPicker(fromPicker, fromInput))
    fromPicker.addEventListener("change", () => onPickerChange(fromPicker, fromInput))
  }
  if (toPicker && toBtn) {
    toBtn.addEventListener("click", () => openPicker(toPicker, toInput))
    toPicker.addEventListener("change", () => onPickerChange(toPicker, toInput))
  }

  syncBounds()
}

/**
 * Fromのみ（Toなし）の1フィールド日付。
 * .period-range-row--from-only 内の .period-range-field を1つだけバインド。
 */
function initPeriodFromOnlyInputs() {
  document.querySelectorAll(".period-range-row--from-only").forEach(row => {
    const field = row.querySelector(".period-range-field")
    if (!field) return
    const textInput = field.querySelector(".period-range-yyyymmdd")
    const picker = field.querySelector(".period-range-picker")
    const btn = field.querySelector(".period-range-calendar-btn")
    if (!textInput) return

    function syncPickerFromText() {
      const iso = yyyymmddToIsoDate(normalizeYyyymmddInput(textInput.value))
      if (iso && picker) picker.value = iso
      else if (picker) picker.value = ""
    }

    function openPicker() {
      if (!picker) return
      syncPickerFromText()
      if (typeof picker.showPicker === "function") {
        try {
          picker.showPicker()
        } catch (_) {
          picker.focus()
          picker.click()
        }
      } else {
        picker.focus()
      }
    }

    function onPickerChange() {
      if (!picker || !picker.value) return
      textInput.value = toYyyymmdd(picker.value)
      textInput.dispatchEvent(new Event("change", { bubbles: true }))
    }

    function onTextInput() {
      textInput.value = normalizeYyyymmddInput(textInput.value)
      textInput.classList.toggle(
        "period-range-invalid",
        textInput.value.length === 8 && !isValidYyyymmdd(textInput.value)
      )
    }

    textInput.addEventListener("input", onTextInput)
    textInput.addEventListener("blur", onTextInput)
    if (picker && btn) {
      btn.addEventListener("click", openPicker)
      picker.addEventListener("change", onPickerChange)
    }
  })
}