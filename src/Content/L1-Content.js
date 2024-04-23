export const L1Content = {
  content: [
    {
      type: 'lecture',
      image: '',
      text: '',
    },
    {
      type: 'quiz',
      question: 'What is the most important feature of a good prompt?',
      choices: [
        {
          name: 'Specificity',
          explanation:
            "Correct:  Think of asking ChatGPT a question like searching for a hidden treasure. If your map (the question) is super detailed, you're way more likely to find the gold (the answer you need). Specific questions lead you straight to the treasure!",
        },
        {
          name: 'Politeness',
          explanation:
            "Incorrect: Not quite... While being polite is nice, it doesn't help ChatGPT understand your question better. It's like saying please to a vending machine; nice but not necessary for getting what you want.",
        },
        {
          name: 'Length',
          explanation:
            "Incorrect: Not quite... A long question isn't always a clear one. It's like when someone tells a story that goes on and on but never gets to the point. Specificity beats length every time.",
        },
      ],
      answerIndex: 0,
    },
    {
      type: 'end',
      lessonTitle: 'Lesson1',
      message: 'this is the end',
    },
  ],
};
