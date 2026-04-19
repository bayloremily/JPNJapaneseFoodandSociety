import OpenAI from "openai";
import { NextResponse } from "next/server";
import { lessons } from "../../data/lessons";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { lessonKey } = await req.json();

    const lesson = lessons[lessonKey];

    if (!lesson) {
      return NextResponse.json({ error: "Lesson not found." }, { status: 400 });
    }

    const vocabList = lesson.vocab
      .map(
        (item) =>
          `${item.kanji} (${item.hira}) = ${item.eng}`
      )
      .join("\n");

    const grammarList = lesson.grammar
      .map((item) => `${item.pattern}: ${item.meaning}`)
      .join("\n");

    const prompt = `
You are generating a Japanese textbook quiz.

Return ONLY valid JSON.
Do not include markdown.
Do not include explanations.

Lesson title:
${lesson.title}

Grammar points:
${grammarList}

Vocabulary:
${vocabList}

Task:
Create a new practice version of the lesson.

Rules:
- Use only vocabulary from the provided lesson list.
- Keep the Japanese natural and intermediate-level.
- Keep the topic and meaning aligned with the lesson.
- Create exactly 8 sentence items.
- Each item must contain exactly one {blank}.
- Each item must correspond to one answer from the vocab list.
- Also include 1 distractor word from the vocab list that is NOT used in the 8 answers.

Return JSON in exactly this shape:
{
  "quizItems": [
    {
      "kanji": "和食",
      "sentence": "日本では、{blank}の基本として『一汁三菜』が知られています。"
    }
  ],
  "wordBank": ["和食", "一汁三菜", "おかず", "焼き魚", "煮物", "並ぶ", "栄養", "健康", "世代"]
}
`;

    const response = await client.responses.create({
      model: "gpt-5.2",
      input: prompt,
    });

    const text = response.output_text;
    const parsed = JSON.parse(text);

    return NextResponse.json(parsed);
  } catch (error) {
    console.error("AI quiz generation failed:", error);
    return NextResponse.json(
      { error: "Failed to generate AI quiz." },
      { status: 500 }
    );
  }
}