const LEVEL6_DATA = {
    id: 6,
    title: "iDeCo",
    icon: "&#127968;",
    description: "確定拠出年金、節税効果、受取方法を学ぶ",
    modules: [
        {
            id: 601,
            title: "iDeCo（個人型確定拠出年金）",
            duration: "15分",
            content: "<h2>iDeCoとは</h2>" +
                "<p><strong>iDeCo（イデコ・個人型確定拠出年金）</strong>は、自分で掛金を出し、自分で運用商品を選んで運用する私的年金制度です。掛金が<strong>全額所得控除</strong>になるという強力な税制優遇が最大の特徴です。</p>" +
                "<h2>iDeCoの3つの税制メリット</h2>" +
                "<div class='info-box tip'><p><strong>メリット1：掛金が全額所得控除</strong><br>毎月の掛金が全額、所得税と住民税の計算から控除されます。年収500万円の会社員が月23,000円（年27.6万円）拠出した場合、年間約5.5万円の節税効果があります。</p></div>" +
                "<div class='info-box tip'><p><strong>メリット2：運用益が非課税</strong><br>通常20.315%かかる運用益への課税がゼロ。NISAと同様の非課税メリットがあります。</p></div>" +
                "<div class='info-box tip'><p><strong>メリット3：受取時の税制優遇</strong><br>一時金で受け取る場合は退職所得控除、年金で受け取る場合は公的年金等控除が適用されます。</p></div>" +
                "<h2>掛金の上限額</h2>" +
                "<table><thead><tr><th>加入者の区分</th><th>月額上限</th><th>年額上限</th></tr></thead>" +
                "<tbody>" +
                "<tr><td>自営業者（第1号被保険者）</td><td>68,000円</td><td>816,000円</td></tr>" +
                "<tr><td>会社員（企業年金なし）</td><td><strong>23,000円</strong></td><td>276,000円</td></tr>" +
                "<tr><td>会社員（企業型DCあり）</td><td>20,000円</td><td>240,000円</td></tr>" +
                "<tr><td>会社員（DBあり）</td><td>12,000円</td><td>144,000円</td></tr>" +
                "<tr><td>公務員</td><td>12,000円</td><td>144,000円</td></tr>" +
                "<tr><td>専業主婦(夫)（第3号）</td><td>23,000円</td><td>276,000円</td></tr>" +
                "</tbody></table>" +
                "<h2>iDeCoの受取方法</h2>" +
                "<p>iDeCoは原則<strong>60歳以降</strong>に受け取ることができます。受取方法は3つあります。</p>" +
                "<table><thead><tr><th>受取方法</th><th>税制優遇</th><th>特徴</th></tr></thead>" +
                "<tbody>" +
                "<tr><td>一時金</td><td>退職所得控除</td><td>一括で受け取る。勤続年数に応じた控除あり</td></tr>" +
                "<tr><td>年金</td><td>公的年金等控除</td><td>5〜20年かけて分割で受け取る</td></tr>" +
                "<tr><td>併用</td><td>両方適用</td><td>一部を一時金、残りを年金で受け取る</td></tr>" +
                "</tbody></table>" +
                "<h2>iDeCoの注意点</h2>" +
                "<ul>" +
                "<li><strong>60歳まで原則引き出せない</strong>（流動性が極めて低い）</li>" +
                "<li>口座管理手数料が毎月かかる（月171〜600円程度）</li>" +
                "<li>元本確保型商品（定期預金）もあるが運用益は小さい</li>" +
                "<li>受取時に退職金と合算される場合、控除枠を超えることがある</li>" +
                "</ul>" +
                "<div class='info-box warning'><p><strong>NISAとiDeCoの使い分け：</strong>流動性が必要ならNISA、節税効果を最大化したいならiDeCo。両方活用するのがベストです。60歳まで使わない老後資金はiDeCoで、それ以外はNISAで運用しましょう。</p></div>" +
                "<h2>節税シミュレーション</h2>" +
                "<table><thead><tr><th>年収</th><th>月額掛金</th><th>年間節税額（目安）</th><th>30年間の節税総額</th></tr></thead>" +
                "<tbody>" +
                "<tr><td>400万円</td><td>23,000円</td><td>約41,400円</td><td>約124万円</td></tr>" +
                "<tr><td>500万円</td><td>23,000円</td><td>約55,200円</td><td>約166万円</td></tr>" +
                "<tr><td>700万円</td><td>23,000円</td><td>約82,800円</td><td>約248万円</td></tr>" +
                "<tr><td>1,000万円</td><td>23,000円</td><td>約91,080円</td><td>約273万円</td></tr>" +
                "</tbody></table>",
            quiz: [
                {
                    id: "q6_1",
                    type: "choice",
                    question: "iDeCoの最大のメリットとして最も適切なものはどれですか？",
                    options: ["いつでも引き出せる", "掛金が全額所得控除になる", "元本保証がある", "手数料が無料"],
                    answer: 1,
                    explanation: "iDeCoの最大のメリットは掛金が全額所得控除になることです。所得税と住民税の両方が軽減されます。"
                },
                {
                    id: "q6_2",
                    type: "choice",
                    question: "企業年金のない会社員のiDeCo掛金上限（月額）はいくらですか？",
                    options: ["12,000円", "20,000円", "23,000円", "68,000円"],
                    answer: 2,
                    explanation: "企業年金のない会社員（第2号被保険者）のiDeCo掛金上限は月額23,000円（年額276,000円）です。"
                },
                {
                    id: "q6_3",
                    type: "choice",
                    question: "iDeCoの注意点として正しいものはどれですか？",
                    options: ["20歳から受け取れる", "原則60歳まで引き出せない", "掛金の上限はない", "口座管理手数料は無料"],
                    answer: 1,
                    explanation: "iDeCoは原則60歳まで引き出すことができません。これは最大の注意点であり、急に資金が必要になっても使えないリスクがあります。"
                }
            ]
        }
    ]
};