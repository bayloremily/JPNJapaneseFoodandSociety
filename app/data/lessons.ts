export type GrammarItem = {
  pattern: string;
  meaning: string;
  accepted: string[];
  example: string;
  translation: string;
  highlight: string;
};

export type VocabItem = {
  kanji: string;
  hira: string;
  eng: string;
  accepted: string[];
  sentence: string;
};

export type Lesson = {
  title: string;
  grammar: GrammarItem[];
  vocab: VocabItem[];
};

export const lessons: Record<string, Lesson> = {
 "chapter1-section1": {
    title: "Chapter 1 Section 1　- 和食とわたし",
    grammar: [
  {
    pattern: "〜につれて",
    meaning: "as; with; as something changes",
    accepted: ["as", "with", "as something changes"],
    example: "日本に住むにつれて、和食がもっと好きになりました。",
    translation: "As I lived in Japan, I came to like Japanese food more.",
    highlight: "につれて"
  },
  {
    pattern: "Nによると",
    meaning: "according to",
    accepted: ["according to"],
    example: "母によると、一汁三菜は健康にいいそうです。",
    translation: "According to my mother, one soup and three side dishes are good for your health.",
    highlight: "によると"
  },
  {
    pattern: "〜のおかげで",
    meaning: "thanks to; because of",
    accepted: ["thanks to", "because of"],
    example: "和食のおかげで、前より元気になりました。",
    translation: "Thanks to Japanese food, I became healthier than before.",
    highlight: "のおかげで"
  }
],
    vocab: [
      {kanji:"和食", hira:"わしょく", eng:"Japanese food", accepted:["japanese food"], sentence:"日本では、{blank}の基本として『一汁三菜』が知られています。"},
      {kanji:"一汁三菜", hira:"いちじゅうさんさい", eng:"one soup and three side dishes", accepted:["one soup and three side dishes", "one soup & three side dishes"], sentence:"{blank}は、汁物と三つのおかずを組み合わせた食事の形です。"},
      {kanji:"おかず", hira:"おかず", eng:"side dish", accepted:["side dish", "side dishes"], sentence:"主食や汁物、そして三つの{blank}をそろえる形が基本です。"},
      {kanji:"焼き魚", hira:"やきざかな", eng:"grilled fish", accepted:["grilled fish"], sentence:"食卓には、ご飯、味噌汁、{blank}などが並ぶことがあります。"},
      {kanji:"煮物", hira:"にもの", eng:"simmered/stewed dish", accepted:["simmered dish", "stewed dish", "simmered/stewed dish"], sentence:"野菜の{blank}は、家庭的な和食の一つです。"},
      {kanji:"並ぶ", hira:"ならぶ", eng:"to be lined up", accepted:["to be lined up", "be lined up", "to be arrayed"], sentence:"食卓にいろいろな料理が{blank}と、見た目もきれいです。"},
      {kanji:"栄養", hira:"えいよう", eng:"nutrition", accepted:["nutrition"], sentence:"和食は{blank}のバランスがいいと言われています。"},
      {kanji:"健康", hira:"けんこう", eng:"health", accepted:["health"], sentence:"毎日の食事は、{blank}にも大きく関係しています。"},
      {kanji:"献立", hira:"こんだて", eng:"menu", accepted:["menu"], sentence:"毎日の{blank}を考えるのは、意外と大変です。"},
      {kanji:"主食", hira:"しゅしょく", eng:"staple food", accepted:["staple food"], sentence:"ご飯は和食の{blank}として大切です。"},
      {kanji:"組み合わせる", hira:"くみあわせる", eng:"to combine", accepted:["to combine", "combine"], sentence:"いろいろなおかずをうまく{blank}ことが大切です。"},
      {kanji:"素朴", hira:"そぼく", eng:"simple", accepted:["simple"], sentence:"和食は{blank}ですが、味わい深いです。"},
      {kanji:"好み", hira:"このみ", eng:"preference", accepted:["preference", "taste"], sentence:"味の{blank}は人によって違います。"},
      {kanji:"選ぶ", hira:"えらぶ", eng:"to choose", accepted:["to choose", "choose", "to select", "select"], sentence:"自分に合う献立を{blank}ことも大切です。"},
      {kanji:"世代", hira:"せだい", eng:"generation", accepted:["generation"], sentence:"食の考え方は{blank}によって少し違います。"},
      {kanji:"洋風", hira:"ようふう", eng:"Western style", accepted:["western style"], sentence:"最近は{blank}の食事も人気があります。"}
    ]
  },

  "chapter2-section1": {
    title: "Chapter 2 Section 1　- 郷土料理の多様性",
    grammar: [
  {
    pattern: "〜きれない",
    meaning: "unable to finish; too much to complete",
    accepted: [
      "unable to finish",
      "cannot finish",
      "too much to complete",
      "too much to finish"
    ],
    example: "大阪では、おいしいものが多すぎて、一日では食べきれませんでした。",
    translation: "In Osaka, there was too much delicious food, so I couldn’t finish eating it all in one day.",
    highlight: "食べきれませんでした"
  },
  {
    pattern: "まるで〜ようだ",
    meaning: "as if; just like",
    accepted: [
      "as if",
      "just like",
      "as though"
    ],
    example: "その景色は、まるで絵のように美しかったです。",
    translation: "That scenery was beautiful as if it were a painting.",
    highlight: "まるで絵のように"
  },
  {
    pattern: "〜だけあって",
    meaning: "as expected of; because",
    accepted: [
      "as expected",
      "as expected of",
      "because",
      "no wonder"
    ],
    example: "有名な観光地だけあって、地元の料理もとてもおいしかったです。",
    translation: "As expected of a famous tourist destination, the local food was also very delicious.",
    highlight: "だけあって"
  }
],
    
    vocab: [
      {kanji:"地域", hira:"ちいき", eng:"region", accepted:["region", "area", "place"], sentence:"日本は北から南まで細長く、海に囲まれていて、{blank}によって食文化も違います。"},
      {kanji:"様々", hira:"さまざま", eng:"various", accepted:["various", "a variety of"], sentence:"そのため、{blank}な郷土料理を食べることができます。"},
      {kanji:"気候", hira:"きこう", eng:"climate", accepted:["climate"], sentence:"地方ごとの地形や{blank}で育まれたおいしい料理がたくさんあります。"},
      {kanji:"郷土料理", hira:"きょうどりょうり", eng:"local cuisine", accepted:["local cuisine", "regional cuisine"], sentence:"わたしは旅行のたびに、その土地の{blank}を食べるのを楽しみにしています。"},
      {kanji:"印象", hira:"いんしょう", eng:"impression", accepted:["impression"], sentence:"特に{blank}に残っている料理をいくつか紹介します。"},
      {kanji:"海鮮", hira:"かいせん", eng:"seafood", accepted:["seafood"], sentence:"北海道では{blank}料理を思う存分楽しみました。"},
      {kanji:"思う存分", hira:"おもうぞんぶん", eng:"as much as one wants", accepted:["as much as one wants", "to one's heart's content"], sentence:"旅行先では、その土地のおいしいものを{blank}味わいたいです。"},
      {kanji:"感動", hira:"かんどう", eng:"to be moved emotionally", accepted:["to be moved emotionally", "moved", "deeply moved"], sentence:"食べきれないほどのイクラやウニが出てきて、とても{blank}しました。"},
      {kanji:"名産品", hira:"めいさんひん", eng:"local specialty", accepted:["local specialty", "local specialties", "specialty"], sentence:"石狩鍋は北海道の{blank}の鮭を使って作られます。"},
      {kanji:"商業", hira:"しょうぎょう", eng:"commerce", accepted:["commerce", "trade"], sentence:"大阪は昔から{blank}の中心地として知られています。"},
      {kanji:"全国", hira:"ぜんこく", eng:"the whole country", accepted:["the whole country", "nationwide", "the entire country"], sentence:"大阪には{blank}から食材が集まるそうです。"},
      {kanji:"中心", hira:"ちゅうしん", eng:"center", accepted:["center", "centre", "focus"], sentence:"大阪は食の流通の{blank}とも言われています。"},
      {kanji:"流通", hira:"りゅうつう", eng:"distribution", accepted:["distribution"], sentence:"食材の{blank}が発達しているので、おいしいものが集まります。"},
      {kanji:"食い倒れ", hira:"くいだおれ", eng:"eat till you drop", accepted:["eat till you drop", "eat-'till-you-drop"], sentence:"大阪は『食い倒れのまち』として有名で、まさに{blank}の文化を感じました。"},
      {kanji:"商店街", hira:"しょうてんがい", eng:"shopping street", accepted:["shopping street", "shopping district"], sentence:"有名な{blank}にあるお好み焼き屋で地元の人と話しました。"},
      {kanji:"地元", hira:"じもと", eng:"local", accepted:["local"], sentence:"{blank}の人が話しかけてくれて、あたたかい気持ちになりました。"},
      {kanji:"高原", hira:"こうげん", eng:"plateau", accepted:["plateau", "highland"], sentence:"長野では、夏でも涼しい{blank}を歩きながら自然を楽しみました。"},
      {kanji:"最適", hira:"さいてき", eng:"ideal", accepted:["ideal", "perfect", "best suited"], sentence:"きれいな水と涼しい気候は、そば作りに{blank}だそうです。"},
      {kanji:"紅葉", hira:"こうよう", eng:"autumn leaves", accepted:["autumn leaves", "fall leaves"], sentence:"秋には{blank}を楽しみに山へ行く人も多いです。"},
      {kanji:"目的", hira:"もくてき", eng:"purpose", accepted:["purpose", "goal", "objective"], sentence:"秋には、紅葉とグルメを{blank}に九州へ行きました。"},
      {kanji:"海外", hira:"かいがい", eng:"overseas", accepted:["overseas", "abroad"], sentence:"長崎には、昔から{blank}との交流を感じさせる場所があります。"},
      {kanji:"影響", hira:"えいきょう", eng:"influence", accepted:["influence", "impact"], sentence:"長崎には{blank}を受けた料理がたくさん残っています。"},
      {kanji:"上品", hira:"じょうひん", eng:"elegant", accepted:["elegant", "refined", "high quality"], sentence:"カステラはしっとりしていて、{blank}な甘さがありました。"},
      {kanji:"多様性", hira:"たようせい", eng:"diversity", accepted:["diversity"], sentence:"各地の郷土料理を通して、日本の{blank}や歴史を知ることができます。"}
    ]
  },

  "chapter3-section1": {
  title: "Chapter 3 Section 1 - 江戸時代のファストフード",
  grammar: [
    {
      pattern: "〜として",
      meaning: "as ~",
      accepted: ["as"],
      example: "ロンドンで和食のシェフとして20年間働いていた。",
      translation: "I worked as a Japanese cuisine chef in London for 20 years.",
      highlight: "として"
    },
    {
      pattern: "〜にともない",
      meaning: "with ~; along with ~",
      accepted: ["with", "along with", "as ~ changes"],
      example: "時代の変化にともなって、人の働き方が変わってきた。",
      translation: "Along with changes in the times, the way people work has changed.",
      highlight: "にともなって"
    },
    {
      pattern: "ちなみに",
      meaning: "by the way",
      accepted: ["by the way"],
      example: "ちなみに、スーパーはここから歩いて3分です。",
      translation: "By the way, the supermarket is a 3-minute walk from here.",
      highlight: "ちなみに"
    }
  ],
  vocab: [
    {
      kanji: "江戸",
      hira: "えど",
      eng: "Edo",
      accepted: ["edo"],
      sentence: "{blank}は東京の昔の名前である。"
    },
    {
      kanji: "徳川家康",
      hira: "とくがわいえやす",
      eng: "Tokugawa Ieyasu",
      accepted: ["tokugawa ieyasu"],
      sentence: "{blank}が江戸に幕府を開いた。"
    },
    {
      kanji: "幕府",
      hira: "ばくふ",
      eng: "shogunate",
      accepted: ["shogunate"],
      sentence: "江戸に{blank}が開かれたことで町が発展した。"
    },
    {
      kanji: "外食",
      hira: "がいしょく",
      eng: "dining out",
      accepted: ["dining out", "eat out"],
      sentence: "{blank}産業は江戸時代に大きく発達した。"
    },
    {
      kanji: "屋台",
      hira: "やたい",
      eng: "food stall",
      accepted: ["food stall", "street food stall", "stall"],
      sentence: "そばやにぎり寿司を売る{blank}が町に並んでいた。"
    },
    {
      kanji: "居酒屋",
      hira: "いざかや",
      eng: "izakaya",
      accepted: ["izakaya", "japanese pub", "pub"],
      sentence: "立ち飲みができる{blank}も現れた。"
    },
    {
      kanji: "単身",
      hira: "たんしん",
      eng: "living alone",
      accepted: ["living alone", "alone"],
      sentence: "{blank}で江戸に移住してきた男性労働者も多かった。"
    },
    {
      kanji: "庶民",
      hira: "しょみん",
      eng: "common people",
      accepted: ["common people", "ordinary people"],
      sentence: "{blank}でも安く手軽に食べられる料理が人気だった。"
    },
    {
      kanji: "裕福",
      hira: "ゆうふく",
      eng: "wealthy",
      accepted: ["wealthy", "rich"],
      sentence: "江戸時代の後期には{blank}な商人や武士が楽しむ高級料理もあった。"
        }
    ]
},


"chapter4-section1": {
  title: "Chapter 4 Section 1 - 人類は麺類",
  grammar: [
    {
      pattern: "〜は〜のようなものだ",
      meaning: "~ is no different than ~",
      accepted: ["is no different than", "is like", "is similar to"],
      example: "人生とはマラソンのようなものだ。",
      translation: "Life is like a marathon.",
      highlight: "のようなものだ"
    },
    {
      pattern: "〜ほど",
      meaning: "to the extent that ~",
      accepted: ["to the extent that", "so much that", "to such a degree that"],
      example: "昨日のパーティーは食べ放題だったので、動けなくなるほど食べてしまった。",
      translation: "Yesterday's party was all-you-can-eat, so I ate so much I couldn't move.",
      highlight: "ほど"
    },
    {
      pattern: "つまり",
      meaning: "in other words; in short",
      accepted: ["in other words", "in short", "to sum up"],
      example: "あの店は大変人気がある。つまり、長く並ばなければいけないということだ。",
      translation: "That shop is very popular. In other words, you have to wait in a long line.",
      highlight: "つまり"
    }
  ],
  vocab: [
    {
      kanji: "麺類",
      hira: "めんるい",
      eng: "noodles",
      accepted: ["noodles", "noodle dishes"],
      sentence: "{blank}は世界中で愛されている食べ物である。"
    },
    {
      kanji: "世界中",
      hira: "せかいじゅう",
      eng: "all over the world",
      accepted: ["all over the world", "worldwide", "throughout the world"],
      sentence: "ラーメンは{blank}で人気が高まっている。"
    },
    {
      kanji: "国民",
      hira: "こくみん",
      eng: "citizen; people of a nation",
      accepted: ["citizen", "people of a nation", "national citizen"],
      sentence: "ラーメンは日本人の『{blank}食』の一つとしてとても人気がある。"
    },
    {
      kanji: "食感",
      hira: "しょっかん",
      eng: "texture",
      accepted: ["texture"],
      sentence: "麺の{blank}やトッピングもさまざまである。"
    },
    {
      kanji: "原料",
      hira: "げんりょう",
      eng: "ingredient; raw material",
      accepted: ["ingredient", "raw material"],
      sentence: "麺の{blank}である小麦がアメリカから大量に輸入された。"
    },
    {
      kanji: "第二次世界大戦",
      hira: "だいにじせかいたいせん",
      eng: "World War II",
      accepted: ["world war ii", "the second world war", "wwii"],
      sentence: "{blank}後、ラーメンは庶民の食べ物として広がった。"
    },
    {
      kanji: "輸入",
      hira: "ゆにゅう",
      eng: "import",
      accepted: ["import", "imported"],
      sentence: "小麦が大量に{blank}されるようになった。"
    },
    {
      kanji: "庶民",
      hira: "しょみん",
      eng: "common people",
      accepted: ["common people", "ordinary people"],
      sentence: "ラーメンは安くておいしい{blank}の食べ物になった。"
    },
    {
      kanji: "ブーム",
      hira: "ブーム",
      eng: "boom",
      accepted: ["boom"],
      sentence: "海外ではラーメン{blank}が起きている。"
    }
  ]
},

"chapter4-section2": {
  title: "Chapter 4 Section 2 - スシ・ポリス",
  grammar: [
    {
      pattern: "〜は〜のようなものだ",
      meaning: "~ is no different than ~",
      accepted: ["is no different than", "is like", "is similar to"],
      example: "文化を一つに決めつけるのは、変化を止めるようなものだ。",
      translation: "To force culture into one fixed form is no different than stopping change.",
      highlight: "ようなものだ"
    },
    {
      pattern: "〜ほど",
      meaning: "to the extent that ~",
      accepted: ["to the extent that", "so much that", "to such a degree that"],
      example: "世界で話題になるほど、日本食は広がっている。",
      translation: "Japanese food has spread so much that it becomes a topic around the world.",
      highlight: "ほど"
    },
    {
      pattern: "つまり",
      meaning: "in other words; in short",
      accepted: ["in other words", "in short", "to sum up"],
      example: "食は変化する。つまり、文化も進化し続けるということだ。",
      translation: "Food changes. In other words, culture also keeps evolving.",
      highlight: "つまり"
    }
  ],
  vocab: [
    {
      kanji: "代表",
      hira: "だいひょう",
      eng: "representative",
      accepted: ["representative", "representing"],
      sentence: "寿司は日本食を{blank}する料理の一つである。"
    },
    {
      kanji: "考案",
      hira: "こうあん",
      eng: "devise; invent",
      accepted: ["devise", "invent"],
      sentence: "カリフォルニアロールは海外で{blank}された寿司である。"
    },
    {
      kanji: "取り入れる",
      hira: "とりいれる",
      eng: "incorporate",
      accepted: ["incorporate", "adopt", "take in"],
      sentence: "その国の人々の好みを{blank}寿司も多い。"
    },
    {
      kanji: "進化",
      hira: "しんか",
      eng: "evolution; develop",
      accepted: ["evolution", "develop", "evolve"],
      sentence: "巻き寿司は海外で独自に{blank}を続けている。"
    },
    {
      kanji: "違和感",
      hira: "いわかん",
      eng: "discomfort; unease",
      accepted: ["discomfort", "unease", "strangeness"],
      sentence: "海外でのローカル化に{blank}を持つ人もいる。"
    },
    {
      kanji: "認証",
      hira: "にんしょう",
      eng: "certification",
      accepted: ["certification"],
      sentence: "政府は海外の日本食レストランの{blank}制度を導入しようとした。"
    },
    {
      kanji: "制度",
      hira: "せいど",
      eng: "system",
      accepted: ["system"],
      sentence: "その{blank}は最終的に実現しなかった。"
    },
    {
      kanji: "日本風",
      hira: "にほんふう",
      eng: "Japanese style",
      accepted: ["japanese style"],
      sentence: "ライスバーガーのように{blank}にアレンジされた料理もある。"
    },
    {
      kanji: "逆輸入",
      hira: "ぎゃくゆにゅう",
      eng: "reverse import",
      accepted: ["reverse import"],
      sentence: "海外で進化した寿司が日本に{blank}されることもある。"
    }
  ]
},

"chapter5-section1": {
  title: "Chapter 5 Section 1 - 食とアニメ・マンガ",
  grammar: [
    {
      pattern: "〜て以来",
      meaning: "since ~",
      accepted: ["since"],
      example: "テレビで見て以来、毎日キャラ弁を作るようになった。",
      translation: "Since seeing it on TV, I started making character bento every day.",
      highlight: "て以来"
    },
    {
      pattern: "〜をこめて",
      meaning: "filled with ~; with ~",
      accepted: ["filled with", "with", "with feelings of"],
      example: "毎朝、愛情をこめておにぎりを握っている。",
      translation: "Every morning, I make rice balls filled with love.",
      highlight: "をこめて"
    },
    {
      pattern: "〜うえで",
      meaning: "in order to; for; when doing ~",
      accepted: ["in order to", "for", "when doing"],
      example: "漢字を勉強するうえで、自分に合ったやり方を見つけるのは大切だ。",
      translation: "In studying kanji, it is important to find a method that suits you.",
      highlight: "うえで"
    }
  ],
  vocab: [
    {
      kanji: "主人公",
      hira: "しゅじんこう",
      eng: "main character",
      accepted: ["main character"],
      sentence: "{blank}が食事をする場面が印象に残っている。"
    },
    {
      kanji: "作品",
      hira: "さくひん",
      eng: "work",
      accepted: ["work", "piece", "title"],
      sentence: "この{blank}をきっかけに日本文化に興味を持った。"
    },
    {
      kanji: "場面",
      hira: "ばめん",
      eng: "scene",
      accepted: ["scene"],
      sentence: "食卓の{blank}は幸せな気分にしてくれた。"
    },
    {
      kanji: "再現",
      hira: "さいげん",
      eng: "recreate",
      accepted: ["recreate", "reproduction"],
      sentence: "アニメに出てきた料理を{blank}して作ってみた。"
    },
    {
      kanji: "愛情",
      hira: "あいじょう",
      eng: "love",
      accepted: ["love", "affection"],
      sentence: "日本ではお弁当が『母の{blank}』のシンボルだと考えられている。"
    },
    {
      kanji: "給食",
      hira: "きゅうしょく",
      eng: "school lunch",
      accepted: ["school lunch"],
      sentence: "学校の{blank}の場面もアニメやマンガによく出てくる。"
    },
    {
      kanji: "告白",
      hira: "こくはく",
      eng: "confession",
      accepted: ["confession"],
      sentence: "お弁当を渡して{blank}するシーンに笑顔になった。"
    },
    {
      kanji: "感謝",
      hira: "かんしゃ",
      eng: "gratitude",
      accepted: ["gratitude", "thanks"],
      sentence: "{blank}の気持ちをこめて手紙を書くこともある。"
    },
    {
      kanji: "きっかけ",
      hira: "きっかけ",
      eng: "motivation; trigger",
      accepted: ["motivation", "trigger", "reason"],
      sentence: "アニメが{blank}で日本語を学び始めた。"
    }
  ]
},

"chapter6-section1": {
  title: "Chapter 6 Section 1 - おふくろの味",
  grammar: [
    {
      pattern: "いつの間にか",
      meaning: "before one knows it",
      accepted: ["before one knows it", "before you realize it"],
      example: "漢字の練習をしていたら、いつの間にか1時間経っていた。",
      translation: "While practicing kanji, before I knew it, an hour had passed.",
      highlight: "いつの間にか"
    },
    {
      pattern: "〜からといって",
      meaning: "just because ~",
      accepted: ["just because"],
      example: "日本人だからといって、寿司が好きだとは限らない。",
      translation: "Just because someone is Japanese does not mean they necessarily like sushi.",
      highlight: "だからといって"
    },
    {
      pattern: "わけではない",
      meaning: "it does not mean that ~",
      accepted: ["it does not mean that", "does not necessarily mean"],
      example: "社長はワインコレクターだが、ワインならどれでもよいというわけではない。",
      translation: "The company president collects wine, but that does not mean just any wine is fine.",
      highlight: "わけではない"
    }
  ],
  vocab: [
    {
      kanji: "我が家",
      hira: "わがや",
      eng: "my home",
      accepted: ["my home", "our home"],
      sentence: "{blank}の定番料理には思い出がたくさんある。"
    },
    {
      kanji: "思い出深い",
      hira: "おもいでぶかい",
      eng: "memorable",
      accepted: ["memorable"],
      sentence: "この味は子どものころを思い出す{blank}料理だ。"
    },
    {
      kanji: "煮物",
      hira: "にもの",
      eng: "simmered dish",
      accepted: ["simmered dish", "stewed dish"],
      sentence: "母の作る{blank}は今でも大好物だ。"
    },
    {
      kanji: "おふくろの味",
      hira: "おふくろのあじ",
      eng: "mom's cooking",
      accepted: ["mom's cooking", "taste of mom's cooking", "home cooking from one's mother"],
      sentence: "{blank}という言葉には懐かしい響きがある。"
    },
    {
      kanji: "家事",
      hira: "かじ",
      eng: "housework",
      accepted: ["housework"],
      sentence: "料理は大切な{blank}の一つである。"
    },
    {
      kanji: "魅力",
      hira: "みりょく",
      eng: "charm",
      accepted: ["charm", "appeal"],
      sentence: "家庭料理の{blank}は素朴さにある。"
    },
    {
      kanji: "様々な",
      hira: "さまざまな",
      eng: "various",
      accepted: ["various", "varied"],
      sentence: "{blank}家庭の味があるのがおもしろい。"
    },
    {
      kanji: "素朴な",
      hira: "そぼくな",
      eng: "simple",
      accepted: ["simple", "plain"],
      sentence: "{blank}料理でも心に残ることがある。"
    },
    {
      kanji: "出身",
      hira: "しゅっしん",
      eng: "one's hometown",
      accepted: ["one's hometown", "where one is from"],
      sentence: "出身地によって味付けが少しずつ違う。"
    }
  ]
},

"chapter6-section2": {
  title: "Chapter 6 Section 2 - 『男飯』と『おふくろの味』",
  grammar: [
    {
      pattern: "いつの間にか",
      meaning: "before one knows it",
      accepted: ["before one knows it", "before you realize it"],
      example: "便利な料理が増えて、いつの間にか食生活も変わっていた。",
      translation: "Convenient foods increased, and before we knew it, eating habits had also changed.",
      highlight: "いつの間にか"
    },
    {
      pattern: "〜からといって",
      meaning: "just because ~",
      accepted: ["just because"],
      example: "男だからといって、料理が苦手とは限らない。",
      translation: "Just because someone is a man does not mean they are bad at cooking.",
      highlight: "だからといって"
    },
    {
      pattern: "わけではない",
      meaning: "it does not mean that ~",
      accepted: ["it does not mean that", "does not necessarily mean"],
      example: "家庭料理が素朴だからといって、魅力がないわけではない。",
      translation: "Just because home cooking is simple does not mean it lacks charm.",
      highlight: "わけではない"
    }
  ],
  vocab: [
    {
      kanji: "表現",
      hira: "ひょうげん",
      eng: "expression",
      accepted: ["expression"],
      sentence: "『男飯』という{blank}には特別な印象がある。"
    },
    {
      kanji: "懐かしい",
      hira: "なつかしい",
      eng: "nostalgic",
      accepted: ["nostalgic", "long for", "miss"],
      sentence: "『おふくろの味』という言葉には{blank}気持ちがある。"
    },
    {
      kanji: "愛情",
      hira: "あいじょう",
      eng: "love",
      accepted: ["love", "affection"],
      sentence: "家庭料理には{blank}がこもっていると考えられがちだ。"
    },
    {
      kanji: "ボリューム",
      hira: "ボリューム",
      eng: "portion size",
      accepted: ["portion size", "volume", "size of meal"],
      sentence: "男飯は{blank}がある料理として紹介されることが多い。"
    },
    {
      kanji: "豪快",
      hira: "ごうかい",
      eng: "hearty",
      accepted: ["hearty", "bold", "dynamic"],
      sentence: "男飯には{blank}な印象がつきまとっている。"
    },
    {
      kanji: "共働き",
      hira: "ともばたらき",
      eng: "dual income",
      accepted: ["dual income"],
      sentence: "{blank}家庭では家事や育児の分担が重要になる。"
    },
    {
      kanji: "分担",
      hira: "ぶんたん",
      eng: "division",
      accepted: ["division", "sharing"],
      sentence: "家事の{blank}について考え直す必要がある。"
    },
    {
      kanji: "価値観",
      hira: "かちかん",
      eng: "values",
      accepted: ["values", "sense of values"],
      sentence: "料理に対する{blank}は時代とともに変わる。"
    },
    {
      kanji: "区別する",
      hira: "くべつする",
      eng: "distinguish",
      accepted: ["distinguish", "differentiate"],
      sentence: "男らしさと女らしさで料理を{blank}べきではない。"
    }
  ]
},

"chapter7-section2": {
  title: "Chapter 7 Section 2 - こども食堂と地域のつながり",
  grammar: [
    {
      pattern: "〜を通じて",
      meaning: "through; via",
      accepted: ["through", "via"],
      example: "食事を通じて、地域の人とつながることができる。",
      translation: "Through meals, people can connect with others in the community.",
      highlight: "を通じて"
    },
    {
      pattern: "ただ / ただし",
      meaning: "however; provided that",
      accepted: ["however", "but", "provided that"],
      example: "支援は大切だ。ただ、長く続ける工夫も必要だ。",
      translation: "Support is important. However, ways to continue it long-term are also necessary.",
      highlight: "ただ"
    },
    {
      pattern: "〜において",
      meaning: "in; at; regarding",
      accepted: ["in", "at", "regarding", "in relation to"],
      example: "地域社会において、こども食堂は大切な役割を持つ。",
      translation: "In local communities, children's cafeterias play an important role.",
      highlight: "において"
    }
  ],
  vocab: [
    { kanji: "提供", hira: "ていきょう", eng: "provide", accepted: ["provide"], sentence: "こども食堂では温かい食事を{blank}している。" },
    { kanji: "地域", hira: "ちいき", eng: "community", accepted: ["community", "area", "region"], sentence: "{blank}の人々が協力して運営している。" },
    { kanji: "栄養", hira: "えいよう", eng: "nutrition", accepted: ["nutrition"], sentence: "子どもたちに{blank}のある食事を出している。" },
    { kanji: "困窮", hira: "こんきゅう", eng: "hardship", accepted: ["hardship", "distress"], sentence: "経済的に{blank}している家庭への支援にもなっている。" },
    { kanji: "不安定", hira: "ふあんてい", eng: "unstable", accepted: ["unstable"], sentence: "収入が{blank}な家庭も少なくない。" },
    { kanji: "無料", hira: "むりょう", eng: "free of charge", accepted: ["free", "free of charge"], sentence: "子どもは{blank}で食べられる場合もある。" },
    { kanji: "支援", hira: "しえん", eng: "support", accepted: ["support"], sentence: "地域のボランティアが活動を{blank}している。" },
    { kanji: "団らん", hira: "だんらん", eng: "social gathering", accepted: ["social gathering", "family gathering"], sentence: "みんなで食卓を囲む{blank}の時間が大切だ。" },
    { kanji: "立ち寄る", hira: "たちよる", eng: "stop by", accepted: ["stop by"], sentence: "学校の帰りにこども食堂へ{blank}子どももいる。" }
  ]
},
};