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
    title: "Chapter 1 Section 1 - 和食",
    grammar: [
      {
        pattern: "〜につれて",
        meaning: "as; with; as something changes",
        accepted: ["as", "with", "as something changes"],
        example: "日本に住むにつれて、和食がもっと好きになりました。",
        translation: "As I lived in Japan, I came to like Japanese food more.",
        highlight: "につれて",
      },
      {
        pattern: "Nによると",
        meaning: "according to",
        accepted: ["according to"],
        example: "母によると、一汁三菜は健康にいいそうです。",
        translation: "According to my mother, one soup and three side dishes are good for your health.",
        highlight: "によると",
      },
      {
        pattern: "〜のおかげで",
        meaning: "thanks to; because of",
        accepted: ["thanks to", "because of"],
        example: "和食のおかげで、前より元気になりました。",
        translation: "Thanks to Japanese food, I became healthier than before.",
        highlight: "のおかげで",
      },
    ],
    vocab: [
      {
        kanji: "和食",
        hira: "わしょく",
        eng: "Japanese food",
        accepted: ["japanese food"],
        sentence: "日本では、{blank}の基本として『一汁三菜』が知られています。",
      },
      {
        kanji: "一汁三菜",
        hira: "いちじゅうさんさい",
        eng: "one soup and three side dishes",
        accepted: ["one soup and three side dishes", "one soup & three side dishes"],
        sentence: "{blank}は、汁物と三つのおかずを組み合わせた食事の形です。",
      },
      {
        kanji: "おかず",
        hira: "おかず",
        eng: "side dish",
        accepted: ["side dish", "side dishes"],
        sentence: "主食や汁物、そして三つの{blank}をそろえる形が基本です。",
      },
      {
        kanji: "焼き魚",
        hira: "やきざかな",
        eng: "grilled fish",
        accepted: ["grilled fish"],
        sentence: "食卓には、ご飯、味噌汁、{blank}などが並ぶことがあります。",
      },
      {
        kanji: "煮物",
        hira: "にもの",
        eng: "simmered dish",
        accepted: ["simmered dish", "stewed dish", "simmered/stewed dish"],
        sentence: "野菜の{blank}は、家庭的な和食の一つです。",
      },
      {
        kanji: "並ぶ",
        hira: "ならぶ",
        eng: "to be lined up",
        accepted: ["to be lined up", "be lined up", "to be arrayed"],
        sentence: "食卓にいろいろな料理が{blank}と、見た目もきれいです。",
      },
      {
        kanji: "栄養",
        hira: "えいよう",
        eng: "nutrition",
        accepted: ["nutrition"],
        sentence: "和食は{blank}のバランスがいいと言われています。",
      },
      {
        kanji: "健康",
        hira: "けんこう",
        eng: "health",
        accepted: ["health"],
        sentence: "毎日の食事は、{blank}にも大きく関係しています。",
      },
      {
        kanji: "献立",
        hira: "こんだて",
        eng: "menu",
        accepted: ["menu"],
        sentence: "毎日の{blank}を考えるのは、意外と大変です。",
      },
      {
        kanji: "主食",
        hira: "しゅしょく",
        eng: "staple food",
        accepted: ["staple food"],
        sentence: "ご飯は和食の{blank}として大切です。",
      },
    ],
  },

  "chapter2-section1": {
    title: "Chapter 2 Section 1 - 郷土料理",
    grammar: [
      {
        pattern: "〜きれない",
        meaning: "unable to finish; too much to complete",
        accepted: ["unable to finish", "cannot finish", "too much to complete", "too much to finish"],
        example: "大阪では、おいしいものが多すぎて、一日では食べきれませんでした。",
        translation: "In Osaka, there was too much delicious food, so I couldn’t finish eating it all in one day.",
        highlight: "食べきれませんでした",
      },
      {
        pattern: "まるで〜ようだ",
        meaning: "as if; just like",
        accepted: ["as if", "just like", "as though"],
        example: "その景色は、まるで絵のように美しかったです。",
        translation: "That scenery was beautiful as if it were a painting.",
        highlight: "まるで絵のように",
      },
      {
        pattern: "〜だけあって",
        meaning: "as expected of; because",
        accepted: ["as expected", "as expected of", "because", "no wonder"],
        example: "有名な観光地だけあって、地元の料理もとてもおいしかったです。",
        translation: "As expected of a famous tourist destination, the local food was also very delicious.",
        highlight: "だけあって",
      },
    ],
    vocab: [
      {
        kanji: "地域",
        hira: "ちいき",
        eng: "region",
        accepted: ["region", "area", "place"],
        sentence: "日本は北から南まで細長く、海に囲まれていて、{blank}によって食文化も違います。",
      },
      {
        kanji: "様々",
        hira: "さまざま",
        eng: "various",
        accepted: ["various", "a variety of"],
        sentence: "そのため、{blank}な郷土料理を食べることができます。",
      },
      {
        kanji: "気候",
        hira: "きこう",
        eng: "climate",
        accepted: ["climate"],
        sentence: "地方ごとの地形や{blank}で育まれたおいしい料理がたくさんあります。",
      },
      {
        kanji: "郷土料理",
        hira: "きょうどりょうり",
        eng: "local cuisine",
        accepted: ["local cuisine", "regional cuisine"],
        sentence: "わたしは旅行のたびに、その土地の{blank}を食べるのを楽しみにしています。",
      },
      {
        kanji: "印象",
        hira: "いんしょう",
        eng: "impression",
        accepted: ["impression"],
        sentence: "特に{blank}に残っている料理をいくつか紹介します。",
      },
      {
        kanji: "海鮮",
        hira: "かいせん",
        eng: "seafood",
        accepted: ["seafood"],
        sentence: "北海道では{blank}料理を思う存分楽しみました。",
      },
      {
        kanji: "思う存分",
        hira: "おもうぞんぶん",
        eng: "as much as one wants",
        accepted: ["as much as one wants", "to one's heart's content"],
        sentence: "旅行先では、その土地のおいしいものを{blank}味わいたいです。",
      },
      {
        kanji: "感動",
        hira: "かんどう",
        eng: "to be moved emotionally",
        accepted: ["to be moved emotionally", "moved", "deeply moved"],
        sentence: "食べきれないほどのイクラやウニが出てきて、とても{blank}しました。",
      },
      {
        kanji: "名産品",
        hira: "めいさんひん",
        eng: "local specialty",
        accepted: ["local specialty", "local specialties", "specialty"],
        sentence: "石狩鍋は北海道の{blank}の鮭を使って作られます。",
      },
      {
        kanji: "全国",
        hira: "ぜんこく",
        eng: "the whole country",
        accepted: ["the whole country", "nationwide", "the entire country"],
        sentence: "大阪には{blank}から食材が集まるそうです。",
      },
    ],
  },

  // Add the rest of your chapters here the same way.
};