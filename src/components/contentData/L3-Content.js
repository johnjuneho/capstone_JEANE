/**
 * Data structure for Lesson 1.
 * Includes lecture images and text, quiz options, and end slide content.
 */

const image1 = require('../images/text-content-placeholder.png');

export const L3Content = {
  content: [
    {
      type: 'lecture',
      title: 'Objective 1: Asking Clearly',
      image: image1,
      alt: 'A cartoon person training a dragon.',
      text: "It's important to learn how to ask ChatGPT in a way that gets us the answers we need without any mix-ups or wrong information. It's like playing a word game with a computer—we need to pick our words really carefully! As we have learned, large language models predict the next words. We need to think like AI and choose our words carefully!",
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
      message: 'Congrats! Move on to the next lesson',
    },
  ],
};
