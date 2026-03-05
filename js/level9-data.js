const LEVEL9_DATA = {
    id: 9,
    title: "ファンダメンタル分析",
    icon: "&#128209;",
    description: "財務諸表分析、バリュエーションを学ぶ",
    modules: [
        {
            id: 901,
            title: "ファンダメンタル分析の基礎",
            duration: "15分",
            content: "<h2>ファンダメンタル分析とは</h2>" +
                "<p><strong>ファンダメンタル分析</strong>とは、企業の業績・財務状況・成長性などの「基礎的条件（ファンダメンタルズ）」を分析して、その企業の本質的な価値（内在価値）を算出し、現在の株価が割安か割高かを判断する手法です。</p>" +
                "<h2>財務三表の基礎</h2>" +
                "<p>企業分析の基本は<strong>財務三表</strong>を読み解くことです。</p>" +
                "<table><thead><tr><th>財務諸表</th><th>何がわかるか</th><th>チェックポイント</th></tr></thead>" +
                "<tbody>" +
                "<tr><td><strong>損益計算書（P/L）</strong></td><td>一定期間の収益と費用</td><td>売上高、営業利益、純利益の推移</td></tr>" +
                "<tr><td><strong>貸借対照表（B/S）</strong></td><td>ある時点の資産・負債・純資産</td><td>自己資本比率、有利子負債</td></tr>" +
                "<tr><td><strong>キャッシュフロー計算書（C/F）</strong></td><td>現金の流れ</td><td>営業CF、投資CF、財務CF</td></tr>" +
                "</tbody></table>" +
                "<h2>損益計算書（P/L）の読み方</h2>" +
                "<p>損益計算書は企業の「成績表」です。以下の利益段階を理解しましょう。</p>" +
                "<table><thead><tr><th>利益の種類</th><th>計算方法</th><th>意味</th></tr></thead>" +
                "<tbody>" +
                "<tr><td>売上総利益（粗利）</td><td>売上高 - 売上原価</td><td>商品・サービスの基本的な収益力</td></tr>" +
                "<tr><td><strong>営業利益</strong></td><td>売上総利益 - 販管費</td><td>本業での稼ぐ力（最重要）</td></tr>" +
                "<tr><td>経常利益</td><td>営業利益 ± 営業外損益</td><td>財務活動を含めた通常の収益力</td></tr>" +
                "<tr><td>純利益</td><td>経常利益 ± 特別損益 - 税金</td><td>最終的に残る利益</td></tr>" +
                "</tbody></table>" +
                "<div class='info-box tip'><p><strong>営業利益率の目安：</strong>一般的に営業利益率10%以上は優良企業とされます。業種によって大きく異なるため、同業他社と比較することが重要です。</p></div>" +
                "<h2>キャッシュフロー計算書の重要性</h2>" +
                "<p>利益が出ていても現金がない「黒字倒産」を見抜くにはキャッシュフロー計算書が不可欠です。</p>" +
                "<table><thead><tr><th>CFの種類</th><th>プラスの意味</th><th>マイナスの意味</th><th>理想</th></tr></thead>" +
                "<tbody>" +
                "<tr><td>営業CF</td><td>本業で現金を稼いでいる</td><td>本業で現金が流出</td><td><strong>プラス</strong></td></tr>" +
                "<tr><td>投資CF</td><td>資産を売却</td><td>設備投資をしている</td><td>マイナス（成長のため）</td></tr>" +
                "<tr><td>財務CF</td><td>借入・増資</td><td>返済・配当・自社株買い</td><td>状況による</td></tr>" +
                "</tbody></table>" +
                "<div class='info-box tip'><p><strong>フリーキャッシュフロー（FCF）：</strong>営業CF - 投資CF。企業が自由に使える現金を示します。FCFがプラスで安定的に増えている企業は財務的に健全です。</p></div>" +
                "<h2>バリュエーション（企業価値評価）</h2>" +
                "<table><thead><tr><th>手法</th><th>概要</th><th>適用場面</th></tr></thead>" +
                "<tbody>" +
                "<tr><td>PER比較</td><td>同業他社とPERを比較</td><td>最も一般的</td></tr>" +
                "<tr><td>PBR比較</td><td>純資産に対する株価を比較</td><td>資産が多い企業向け</td></tr>" +
                "<tr><td>DCF法</td><td>将来のCFを現在価値に割引</td><td>理論的に最も正確</td></tr>" +
                "<tr><td>配当割引モデル</td><td>将来の配当を現在価値に割引</td><td>安定配当企業向け</td></tr>" +
                "<tr><td>EV/EBITDA</td><td>企業価値をEBITDAで割る</td><td>M&Aの場面で多用</td></tr>" +
                "</tbody></table>" +
                "<div class='info-box warning'><p><strong>注意：</strong>ファンダメンタル分析で「割安」と判断しても、株価がすぐに上がるとは限りません。市場は非合理的な動きをすることも多く、「割安な状態が長期間続く」こともあります。</p></div>",
            quiz: [
                {
                    id: "q9_1",
                    type: "choice",
                    question: "企業の「本業での稼ぐ力」を最も直接的に示す利益はどれですか？",
                    options: ["売上総利益", "営業利益", "経常利益", "純利益"],
                    answer: 1,
                    explanation: "営業利益は売上総利益から販売費及び一般管理費を差し引いたもので、本業での稼ぐ力を最も直接的に示します。"
                },
                {
                    id: "q9_2",
                    type: "choice",
                    question: "フリーキャッシュフロー（FCF）の計算式として正しいものはどれですか？",
                    options: ["売上高 - 売上原価", "営業CF - 投資CF", "純利益 - 配当金", "経常利益 - 税金"],
                    answer: 1,
                    explanation: "フリーキャッシュフロー（FCF）= 営業CF - 投資CF です。企業が自由に使える現金の量を示す重要な指標です。"
                },
                {
                    id: "q9_3",
                    type: "choice",
                    question: "財務三表に含まれないものはどれですか？",
                    options: ["損益計算書", "貸借対照表", "キャッシュフロー計算書", "株主名簿"],
                    answer: 3,
                    explanation: "財務三表は損益計算書（P/L）、貸借対照表（B/S）、キャッシュフロー計算書（C/F）の3つです。株主名簿は財務三表には含まれません。"
                }
            ]
        }
    ]
};