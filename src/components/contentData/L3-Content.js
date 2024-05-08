/**
 * Data structure for Lesson 1.
 * Includes lecture images and text, quiz options, and end slide content.
 */

const image1 = require('../images/img43.jpg');
const image2 = require('../images/img13.jpg');
const image3 = require('../images/img16.jpg');
const image4 = require('../images/img15.jpg');
const image5 = require('../images/img19.jpg');
const image6 = require('../images/img21.jpg');

export const L3Content = {
  content: [
    {
      type: 'lecture',
      title: 'Mastering the Basics of Your Dragon',
      image: image1,
      alt: 'A cartoon person training a dragon.',
      text: "Imagine you have a smart robot. You can ask it anything, and it tries its best to give you the right answer. But how does it know what to say? AI, like our robot, learns from reading lots and lots of books, articles, and websites. The more it reads, the smarter it gets. However, it doesn't understand things like a human does—it remembers patterns in the words it has seen and uses those patterns to guess the best answer to your questions.",
    },
    {
      type: 'quiz',
      questionNumber: 1,
      question:
        'What’s the most important reason for people to understand how ChatGPT works?',
      choices: [
        {
          name: 'So they can easily find information without having to do research',
          explanation:
            'Incorrect: While ChatGPT can help find information, understanding how it works is more about using it wisely, not skipping the learning process.',
        },
        {
          name: 'To avoid misinformation and manipulation',
          explanation:
            'Correct: Learning how ChatGPT and AI works is like understanding the rules of a board game; knowing them helps us play the game correctly and recognize when something is off or wrong.',
        },
        {
          name: 'Because it is required to use ChatGPT',
          explanation:
            "Incorrect: There's no rule saying you must understand its workings to use it, but knowing helps you use it more effectively.",
        },
      ],
      answerIndex: 1,
    },
    {
      type: 'lecture',
      title: 'Recognizing the Sky Limits',
      image: image2,
      alt: 'A cartoon person training a dragon.',
      text: "Even though AI can be super helpful, it has its limits. Imagine you're playing a video game, but sometimes the game glitches. AI can glitch in a way, too. For example, it might give you wrong information if it has learned from incorrect data. Just like you can't fly a dragon into a storm, you shouldn't rely on AI for everything without double-checking its answers.",
    },
    {
      type: 'quiz',
      questionNumber: 2,
      question:
        'What is the result of ONLY relying on AI systems like ChatGPT for information?',
      choices: [
        {
          name: 'Reduced critical thinking skills and potential for misinformation',
          explanation:
            'Correct: If you rely on ChatGPT without taking the time to learn the steps on how you got that answer, you may not know how to do it yourself and fully understand on how to solve the problem.',
        },
        {
          name: 'More accurate information',
          explanation:
            'Incorrect: AI can be a helpful tool, but overreliance might lead us to accept information without questioning its accuracy.',
        },
        {
          name: 'Enhanced creativity and problem-solving skills',
          explanation:
            'Incorrect: While AI can inspire new ideas, overusing it may dampen our own creativity and problem-solving abilities.',
        },
      ],
      answerIndex: 0,
    },
    {
      type: 'lecture',
      title: 'Navigating Through the Clouds',
      image: image3,
      alt: 'A cartoon person training a dragon.',
      text: 'Bias means being unfairly in favor of or against something or someone. Sometimes, without meaning to, people teach AI their own biases. For example, if most stories an AI reads say dragons are scary, it might wrongly believe all dragons are scary. However, Dragons can be sweet and nice too! We need to teach AI about the good dragons as well!',
    },
    {
      type: 'quiz',
      questionNumber: 3,
      question: 'Are ChatGPT’s responses biased?',
      choices: [
        {
          name: 'Yes, always',
          explanation:
            "Incorrect: While it's natural to wonder about bias, saying ChatGPT is always biased isn't accurate.",
        },
        {
          name: 'No, never– ChatGPT is always reliable as it is constantly evolving and improving',
          explanation:
            "Incorrect: While ChatGPT is indeed constantly evolving and improving, it's not always completely unbiased.",
        },
        {
          name: 'It depends on various factors so it is good to always fact-check',
          explanation:
            "Correct: ChatGPT might give biased answers depending on what it learned from. It's like a parrot repeating words without knowing what they mean. We should always double-check the information.",
        },
      ],
      answerIndex: 2,
    },
    {
      type: 'lecture',
      title: 'Beyond the Clouds',
      image: image4,
      alt: 'A cartoon person training a dragon.',
      text: "Once we identify biases in AI responses, it's crucial to recognize how these biases can affect the information we receive. Here’s how biased responses from AI like ChatGPT can shape our understanding and decision-making.",
    },
    {
      type: 'quiz',
      questionNumber: 4,
      question:
        'How can biased answers affect the information you receive from ChatGPT?',
      questionNumber: 1, // Added question number
      question: 'What’s the most important reason for people to understand how ChatGPT works?',
      choices: [
        {
          name: 'So they can easily find information without having to do research',
          explanation: "Not quite... While ChatGPT can help find information, understanding how it works is more about using it wisely, not skipping the learning process. It’s like fishing, to catch as many fish you want, you need to learn how to fish and get the correct fishing materials to fish as much as you want!"
        },
        {
          name: 'To avoid misinformation and manipulation',
          explanation: "Correct! Learning how ChatGPT and AI works is like understanding the rules of a board game; knowing them helps us play the game correctly and recognize when something is off or wrong."
        },
        {
          name: 'Because it is required to use ChatGPT.',
          explanation: "Not quite... There's no rule saying you must understand its workings to use it, but knowing helps you use it more effectively. For example, to cook an egg, understanding how long you need to cook it for and what temperature to cook it at will help you not eat it raw and get sick. If you cook an egg without understanding when it is cooked or raw can lead to an upset stomach!"
        },
      ],
      answerIndex: 1 //whichever is correct answer so if specificity is correct, it is 0, if politness, it is 1
    },
    {
      type: 'lecture',
      title: 'Objective 2: Recognizing AI Limitations and Risks',
      image: image1,
      alt: '',
      text: "Even though AI can be super helpful, it has its limits. Imagine you're playing a video game, but sometimes the game glitches. AI can glitch in a way, too. For example, it might give you wrong information if it has learned from incorrect data. Just like you can't fly a dragon into a storm, you shouldn't rely on AI for everything without double-checking its answers.",
    },
    {
      type: 'lecture',
      title: 'Objective 2: Recognizing AI Limitations and Risks',
      image: image1,
      alt: '',
      text: "It's important to remember that AI is just one tool in our toolkit. We need to use other tools as well, like books, asking teachers, or talking to friends, to make sure we understand the full picture. When there comes a time where you need to showcase your skills without the support of AI, you may not know how to solve the problem if you don’t try to learn each step.This helps us avoid mistakes and learn better.",
    },
    {
      type: 'quiz',
      questionNumber: 2, // Added question number
      question: 'What is the result of ONLY relying on AI systems like ChatGPT for information?',
      choices: [
        {
          name: 'By presenting skewed or inaccurate perspectives',
          explanation:
            'Correct: Biased responses can give us a wonky view of the world, like looking through a bent mirror.',
        },
        {
          name: 'By reinforcing stereotypes or misconceptions',
          explanation:
            'Close, but not quite! Stereotypes and misconceptions can also be formed from having biased perspectives!',
        },
        {
          name: 'By limiting the diverse of viewpoints presented',
          explanation:
            'Close but not quite! When you have limited viewpoints, it may cause you to become biased and affect your perception.',
        },
        {
          name: 'All of the above',
          explanation:
            'Incorrect: While all options mention potential impacts, only one directly addresses the effect of biased answers on the information received from ChatGPT.',
        },
      ],
      answerIndex: 0,
    },
    {
      type: 'lecture',
      title: 'Understanding Plagiarism',
      image: image5,
      alt: 'A cartoon person training a dragon.',
      text: "Plagiarism is when someone copies someone else's work and says it's their own. It's like if you found a treasure on a dragon ride and told everyone you made the treasure yourself. Always tell where you got your information from, especially when you're using AI to help with school projects.",
    },
    {
      type: 'quiz',
      questionNumber: 5,
      question: 'What is Plagiarism?',
      choices: [
        {
          name: 'Citing any sources used in your work',
          explanation:
            "Incorrect: While citing sources is important to avoid plagiarism, it's not the definition of plagiarism itself.",
        },
        {
          name: 'Copying work that isn’t your own without giving credit',
          explanation:
            "Correct: Copying someone else's work without saying it's theirs is plagiarism.",
        },
        {
          name: 'Paraphrasing your own ideas',
          explanation:
            'Incorrect: Paraphrasing is fine as long as you correctly attribute the original ideas to their source.',
        },
      ],
      answerIndex: 1,
    },
    {
      type: 'lecture',
      title: 'Learning to Fly on Your Own',
      image: image6,
      alt: 'A cartoon person training a dragon.',
      text: "While AI like ChatGPT is a helpful tool, it's not a replacement for learning on your own. Just like how riding a dragon takes practice, critical thinking and learning from different sources are essential skills. Use AI to help guide you, but don't forget to spread your wings and fly on your own too!",
    },
  ],
};

export default L3Content;