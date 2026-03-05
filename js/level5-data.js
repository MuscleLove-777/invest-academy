const LEVEL5_DATA = {
    id: 5,
    title: "NISA制度",
    icon: "&#127775;",
    description: "新NISA、つみたて投資枠/成長投資枠を学ぶ",
    modules: [
        {
            id: 501,
            title: "新NISA制度を完全理解",
            duration: "15分",
            content: "<h2>NISAとは</h2>" +
                "<p><strong>NISA（少額投資非課税制度）</strong>は、投資で得た利益（売却益・配当金）が非課税になる制度です。通常、投資の利益には約20.315%の税金がかかりますが、NISA口座で運用すれば税金がゼロになります。</p>" +
                "<div class='info-box tip'><p><strong>具体例：</strong>100万円の利益が出た場合、通常なら約20万円が税金として引かれますが、NISAなら100万円がまるまる手元に残ります。</p></div>" +
                "<h2>新NISA（2024年〜）の概要</h2>" +
                "<p>2024年から始まった新NISAは、従来のNISAを大幅に拡充した制度です。</p>" +
                "<table><thead><tr><th>項目</th><th>つみたて投資枠</th><th>成長投資枠</th></tr></thead>" +
                "<tbody>" +
                "<tr><td>年間投資上限</td><td><strong>120万円</strong></td><td><strong>240万円</strong></td></tr>" +
                "<tr><td>非課税保有限度額</td><td colspan='2'><strong>合計1,800万円</strong>（うち成長投資枠は1,200万円まで）</td></tr>" +
                "<tr><td>非課税期間</td><td colspan='2'><strong>無期限</strong></td></tr>" +
                "<tr><td>対象商品</td><td>金融庁が選定した投資信託・ETF</td><td>上場株式・投資信託・ETF・REIT</td></tr>" +
                "<tr><td>買付方法</td><td>積立のみ</td><td>一括・積立どちらも可</td></tr>" +
                "<tr><td>売却後の枠</td><td colspan='2'>翌年に復活（簿価ベース）</td></tr>" +
                "</tbody></table>" +
                "<h2>つみたて投資枠と成長投資枠の使い分け</h2>" +
                "<p>新NISAでは2つの枠を<strong>併用</strong>できます。年間最大360万円（120万円 + 240万円）の投資が可能です。</p>" +
                "<div class='info-box tip'><p><strong>初心者おすすめ戦略：</strong>まずはつみたて投資枠で全世界株式やS&P500連動のインデックスファンドに月10万円（年120万円）を積み立てましょう。余裕があれば成長投資枠も活用します。</p></div>" +
                "<h2>新NISAの注意点</h2>" +
                "<ul>" +
                "<li>NISA口座は1人1口座のみ（金融機関の変更は年1回可能）</li>" +
                "<li>損益通算・繰越控除ができない（NISA口座の損失は他の利益と相殺不可）</li>" +
                "<li>非課税枠の再利用は翌年から（売却した年は枠が復活しない）</li>" +
                "<li>つみたて投資枠は金融庁が選定した商品のみ（約280本）</li>" +
                "</ul>" +
                "<h2>旧NISAとの比較</h2>" +
                "<table><thead><tr><th>項目</th><th>旧つみたてNISA</th><th>旧一般NISA</th><th>新NISA</th></tr></thead>" +
                "<tbody>" +
                "<tr><td>年間上限</td><td>40万円</td><td>120万円</td><td><strong>360万円</strong></td></tr>" +
                "<tr><td>非課税期間</td><td>20年</td><td>5年</td><td><strong>無期限</strong></td></tr>" +
                "<tr><td>総枠</td><td>800万円</td><td>600万円</td><td><strong>1,800万円</strong></td></tr>" +
                "<tr><td>制度期間</td><td>2042年まで</td><td>2023年で終了</td><td><strong>恒久化</strong></td></tr>" +
                "</tbody></table>" +
                "<div class='info-box success'><p><strong>まとめ：</strong>新NISAは投資枠の拡大、非課税期間の無期限化、制度の恒久化により、長期的な資産形成の最強ツールとなりました。活用しない手はありません。</p></div>",
            quiz: [
                {
                    id: "q5_1",
                    type: "choice",
                    question: "新NISAの非課税保有限度額（生涯投資枠）はいくらですか？",
                    options: ["800万円", "1,200万円", "1,800万円", "2,400万円"],
                    answer: 2,
                    explanation: "新NISAの非課税保有限度額は合計1,800万円です。うち成長投資枠は1,200万円までとなっています。"
                },
                {
                    id: "q5_2",
                    type: "choice",
                    question: "新NISAのつみたて投資枠の年間投資上限はいくらですか？",
                    options: ["40万円", "120万円", "240万円", "360万円"],
                    answer: 1,
                    explanation: "つみたて投資枠の年間上限は120万円です。成長投資枠の240万円と合わせて年間最大360万円の投資が可能です。"
                },
                {
                    id: "q5_3",
                    type: "choice",
                    question: "NISA口座の注意点として正しいものはどれですか？",
                    options: ["複数の金融機関で開設できる", "損益通算ができない", "非課税期間は20年間", "元本保証がある"],
                    answer: 1,
                    explanation: "NISA口座では損益通算・繰越控除ができません。NISA口座で発生した損失は、他の口座の利益と相殺することができない点に注意が必要です。"
                }
            ]
        }
    ]
};