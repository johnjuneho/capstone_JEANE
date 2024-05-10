/**
 * Data structure for Lesson 1.
 * Includes lecture images and text, quiz options, and end slide content.
 */

const image1 = require('../images/img46.jpg');
const image2 = require('../images/img24.jpg');
const image3 = require('../images/img37.jpg');
const image4 = require('../images/img27.jpg');
const image5 = require('../images/img30.jpg');
const image6 = require('../images/img25.jpg');
const image7 = require('../images/img49.jpg');

export const L2Content = {
  content: [
    {
      type: 'lecture',
      title: 'Lesson 2: Introduction',
      image: image1,
      alt: 'A cartoon dragon.',
      text: "Imagine you're making your favorite kind of pasta. You have a general idea of what it should taste like. You have your ingredients, and you put them together in the pot. But wait! Before you serve your pasta, taste it to check if it's right! This is similar to what we do after receiving a response from AI like ChatGPT. We need to double check that it's what we want.",
    },
    {
      type: 'lecture',
      title: 'Lesson 2: Introduction',
      image: image2,
      alt: 'A cartoon dragon.',
      text: "Evaluating AI's responses is much like tasting a dish in progress. Does it need more clarity? A pinch of specificity? If the first taste doesn't hit the mark, we refine our request, adding more detail or shifting our approach, guiding the AI towards the flavor of answer we seek.",
    },
    {
      type: 'lecture',
      title: 'Lesson 2: Introduction',
      image: image3,
      alt: 'A cartoon dragon.',
      text: "But here's the key ingredient: originality. Directly using AI's responses is like serving a dish straight from a cookbook without making it your own. It lacks your personal touch. Instead, use the AI's response as a base, then add your own insights, style, and talent. That way, you're not just repeating what's been said; you're creating something uniquely yours and actively learning.",
    },
    {
      type: 'lecture',
      title: 'Objective 1: Proper Utilization of ChatGPT Responses Overview',
      image: image4,
      alt: 'A cartoon dragon.',
      text: "So what do we do with a response? Remember, AI doesn't think like you, but instead predicts what words go together. It's your job to fact-check ChatGPT. Fact-checking is making sure something is true with a trustworthy website, teacher, or book. And remember: copy and pasting a ChatGPT response is plagiarism! Let's explore how to use ChatGPT to learn without cheating.",
    },
    {
      type: 'quiz',
      questionNumber: 1,
      question: 'When using ChatGPT, what is the most responsible action?',
      choices: [
        {
          name: 'Copying ChatGPT’s words and pretending they are your own',
          explanation:
            "Incorrect: This is like taking credit for someone else's work. It's not honest or fair.",
        },
        {
          name: 'Using ChatGPT to generate ideas and develop your own understanding',
          explanation:
            "Correct: Just like brainstorming with a friend, using ChatGPT to spark ideas is great! You're learning and creating something new.",
        },
        {
          name: 'Telling friends facts you got from ChatGPT without fact-checking ',
          explanation:
            "Incorrect: Sharing information without verifying its accuracy can lead to spreading misinformation. It's important to fact-check before sharing.",
        },
      ],
      answerIndex: 1,
    },
    {
      type: 'quiz',
      questionNumber: 2,
      question: 'After receiving a response on ChatGPT, what should you do?',
      choices: [
        {
          name: 'Ask a friend if it is correct',
          explanation:
            "Incorrect: While getting a second opinion can be helpful, it's crucial to fact-check with reliable sources",
        },
        {
          name: ' Nothing! ChatGpt is always right',
          explanation:
            "Incorrect: ChatGPT is a powerful tool, but it's not infallible. It's important to verify its responses.",
        },
        {
          name: 'Ensure the answer is correct by fact-checking it online with multiple sources',
          explanation:
            'Correct: Fact-checking helps ensure that the information you received is accurate and reliable.',
        },
      ],
      answerIndex: 2,
    },
    {
      type: 'quiz',
      questionNumber: 3,
      question: 'What is fact-checking?',
      choices: [
        {
          name: 'Verifying that information is correct',
          explanation:
            'Correct: Fact-checking involves confirming the accuracy of information by comparing it with reliable sources.',
        },
        {
          name: 'Making up information ',
          explanation:
            "Incorrect: Fact-checking is the opposite of making up information. It's about ensuring the truthfulness of the information.",
        },
        {
          name: 'Trusting information blindly ',
          explanation:
            'Incorrect: Fact-checking encourages skepticism and critical thinking, rather than blind trust.',
        },
      ],
      answerIndex: 0,
    },
    {
      type: 'lecture',
      title: 'Objective 2: Importance of Fact-checking ChatGPT’s Responses',
      image: image5,
      alt: 'A cartoon dragon.',
      text: "Checking ChatGPT's answers is really important. It helps us avoid spreading wrong information (misinformation), and make sure we only share things we know are right. Let's learn more about why it's important to check ChatGPT's answers and why misinformation is harmful.",
    },
    {
      type: 'quiz',
      questionNumber: 5,
      question:
        'Which of the following is the best way to fact-check responses from ChatGPT?',
      choices: [
        {
          name: "Trust ChatGPT's responses",
          explanation:
            "Incorrect: Relying solely on ChatGPT's responses without verification can lead to inaccuracies and misinformation.",
        },
        {
          name: ' Check one source from Google',
          explanation:
            'Incorrect: Depending on a single source for fact-checking may not provide a comprehensive understanding of the accuracy of the information.',
        },
        {
          name: 'Double check the information with multiple reliable sources',
          explanation:
            'Correct! Fact-checking involves verifying information from multiple reliable sources to ensure its accuracy and reliability.',
        },
      ],
      answerIndex: 2,
    },
    {
      type: 'quiz',
      questionNumber: 6,
      question: 'What does fact-checking help you avoid? ',
      choices: [
        {
          name: 'Spreading rumors or false information',
          explanation:
            'Correct! Fact-checking helps prevent the dissemination of rumors or false information by ensuring the accuracy and reliability of the information being shared.',
        },
        {
          name: 'Making friends',
          explanation:
            'Incorrect: Fact-checking is unrelated to making friends. It is focused on verifying the accuracy of information.',
        },
        {
          name: 'Eating snacks',
          explanation:
            'Incorrect: Fact-checking is unrelated to eating snacks. It is focused on verifying the accuracy and reliability of information.',
        },
      ],
      answerIndex: 0,
    },
    {
      type: 'lecture',
      title: 'Objective 3: Using ChatGPT Responsibly',
      image: image6,
      alt: 'A cartoon dragon.',
      text: "Using ChatGPT responsibly is super important! It's requires double-checking your work. By comparing ChatGPT's answers with information from other trustworthy sources, we can be sure we're getting the right info. This way, we don't spread any wrong facts or rumors. Checking ChatGPT's answers helps us keep our info honest and reliable. Let's dive into why it's crucial to use ChatGPT responsibly, so we can make smart choices!",
    },
    {
      type: 'quiz',
      questionNumber: 7,
      question: 'How can fact-checking help you make better decisions?',
      choices: [
        {
          name: 'By ensuring you have the correct information',
          explanation:
            'Correct! Fact-checking ensures that the information you rely on for decision-making is accurate and reliable.',
        },
        {
          name: 'By making decisions randomly',
          explanation:
            'Incorrect: Making decisions randomly is not a responsible approach. Fact-checking helps ensure informed decision-making based on accurate information.',
        },
        {
          name: ' By avoiding information altogether',
          explanation:
            'Incorrect: Avoiding information altogether hinders informed decision-making. Fact-checking allows you to access reliable information for better decision-making.',
        },
      ],
      answerIndex: 0,
    },
    {
      type: 'lecture',
      title: 'Objective 4: Plagiarism',
      image: image7,
      alt: 'A cartoon dragon.',
      text: "Plagiarism using ChatGPT is when someone copies and pastes the response they get from ChatGPT without giving credit to where the information came from. It's like taking someone else's work and pretending it's your own. This is not okay, because it's not honest or fair to the original creators of the information. ChatGPT's responses should be used as a inspiration for your own words. This way, you're being honest while using ChatGPT to help you learn.",
    },
    {
      type: 'quiz',
      questionNumber: 8,
      question:
        "You're writing an essay and ask ChatGPT for ideas. It provides a detailed outline. What should you do with the response?",
      choices: [
        {
          name: 'Use the outline as a reference to guide your own writing process.',
          explanation:
            "Correct: Using the outline as a reference allows you to incorporate ChatGPT's ideas into your own writing process while maintaining originality.",
        },
        {
          name: ' Use the outline as-is for your essay.',
          explanation:
            'Incorrect: Using the outline as-is may not align with your own ideas or the requirements of your essay.',
        },
        {
          name: 'Disregard the outline and ask ChatGPT for more ideas for the essay.',
          explanation:
            'Incorrect: Disregarding the outline without considering its value may overlook useful insights provided by ChatGPT.',
        },
      ],
      answerIndex: 0,
    },
    {
      type: 'quiz',
      questionNumber: 9,
      question:
        ' You ask ChatGPT for information about a historical event, and it provides a response. What should you do next?',
      choices: [
        {
          name: 'Use the response without verifying the information with other sources.',
          explanation:
            "Incorrect: You should never use Chat GPT’s response without verifying the information with other credible sources. It's like trusting someone without making sure they're telling the truth",
        },
        {
          name: "Assume ChatGPT's response is correct and move on to the next question and repeat.",
          explanation:
            'Incorrect: Assuming something is true without verifying it can lead to misinformation being spread. Always double-check the information provided by ChatGPT.',
        },
        {
          name: 'Cross-reference the information with reliable sources.',
          explanation:
            "Correct! Just as you would fact-check information from any source, it's important to confirm the information provided by ChatGPT with other reliable sources. This helps ensure accuracy and gives you a more complete understanding of the topic",
        },
      ],
      answerIndex: 2,
    },
    {
      type: 'quiz',
      questionNumber: 10,
      question:
        "You're studying for an exam and decide to use ChatGPT to test your knowledge. What should you be cautious about?",
      choices: [
        {
          name: "Over-reliance on ChatGPT's answers without verifying your understanding through practice.",
          explanation:
            "Incorrect: Almost there! It's crucial to be cautious about relying too much on ChatGPT's answers without practicing and understanding the material yourself. However, there's more to consider.",
        },
        {
          name: "Trusting ChatGPT's responses blindly, assuming they are always correct.",
          explanation:
            "Incorrect: Not quite! It's definitely risky to trust ChatGPT's responses blindly, assuming they're always right. But there's other important cautions to keep in mind.",
        },
        {
          name: 'All of the above',
          explanation:
            "Correct: You got it! When using ChatGPT for exam prep, it's crucial to avoid over-reliance, blind trust, and relying solely on ChatGPT without consulting other study materials. Great job!",
        },
      ],
      answerIndex: 2,
    },
    {
      type: 'end',
      lessonTitle:
        "Lesson 2:  What Do We Do With AI's Response Closing Thoughts",
      message:
        "Using ChatGPT can be a valuable tool for learning new ideas. However, it's important to use it responsibly and ethically. Remember to fact-check information from reliable sources and avoid plagiarism by putting responses into your own words. By doing so, you'll increase your understanding and critical thinking skills.",
    },
  ],
};
