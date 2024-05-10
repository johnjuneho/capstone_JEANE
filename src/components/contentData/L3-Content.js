/**
 * Data structure for Lesson 1.
 * Includes lecture images and text, quiz options, and end slide content.
 */

const image1 = require('../images/img43.jpg');
const image2 = require('../images/img13.jpg');
const image3 = require('../images/img48.jpg');
const image4 = require('../images/img15.jpg');
const image5 = require('../images/img19.jpg');
const image6 = require('../images/img21.jpg');
const image7 = require('../images/img55.jpg');
const image8 = require('../images/img53.jpg');
const image9 = require('../images/img16.jpg');
const image10 = require('../images/img51.jpg');

export const L3Content = {
  content: [
    {
      type: 'lecture',
      title: 'Lesson 3: Introduction',
      image: image1,
      alt: 'A cartoon person training a dragon.',
      text: 'Imagine embarking on a thrilling journey not with dragons, but with something equally powerful and mysterious—artificial intelligence (AI). Just as the young Viking, Hiccup, discovered the world of dragons and learned to interact with them, you too will explore the capabilities of AI technologies like ChatGPT. In this journey, the dragons represent the powerful AI systems that, when understood and used correctly, can become valuable allies.',
    },
    {
      type: 'lecture',
      title: 'Lesson 3: Introduction',
      image: image2,
      alt: 'A cartoon person training a dragon.',
      text: 'But beware, just as dragons can be unpredictable and require careful handling, AI also comes with its own set of challenges and ethical considerations like risks of misinformation, bias, and ethical dilemmas that come with it. To safely navigate this jungle and unearth its treasures, you need more than just a map; you need to understand the terrain, the climate, and the rules of the jungle.',
    },
    {
      type: 'lecture',
      title: 'Lesson 3: Introduction',
      image: image10,
      alt: 'A cartoon person training a dragon.',
      text: "Understanding AI ethics is like having that essential guidebook to understand all of the different types of dragons. It equips you with the knowledge to distinguish between the valuable and accurate information and the dangerous pitfalls of misleading data. It teaches you to tread carefully, question your path, and use the tools at your disposal responsibly. With this guidebook in hand, you're set for an adventure in the jungle of AI and dragons, ready to explore its wonders while avoiding its traps.",
    },
    {
      type: 'lecture',
      title: 'Objective 1: Understanding How ChatGPT Works',
      image: image4,
      alt: 'A cartoon person training a dragon.',
      text: "Imagine you have a smart robot. You can ask it anything, and it tries its best to give you the right answer. But how does it know what to say? AI, like our robot, learns from reading lots and lots of books, articles, and websites. The more it reads, the smarter it gets. However, it doesn't understand things like a human does—it remembers patterns in the words it has seen and uses those patterns to guess the best answer to your questions. AI is not good at understanding feelings or making moral decisions like humans can. Knowing this helps us decide when to use AI (like for homework help) and when to rely on human judgment (like asking for advice on a personal problem) to avoid misinformation.",
    },
    {
      type: 'lecture',
      title: 'Objective 1: Understanding How ChatGPT Works',
      image: image5,
      alt: 'A cartoon person training a dragon.',
      text: "Think of AI as having a super-fast brain for certain tasks like solving math problems or remembering facts but it's not good at understanding feelings or making moral decisions like humans can. Knowing this helps us decide when to use AI (like for homework help) and when to rely on human judgment (like asking for advice on a personal problem) to avoid misinformation.",
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
            'Not quite... While ChatGPT can help find information, understanding how it works is more about using it wisely, not skipping the learning process. It’s like fishing, to catch as many fish you want, you need to learn how to fish and get the correct fishing materials to fish as much as you want!',
        },
        {
          name: 'To avoid misinformation and manipulation',
          explanation:
            'Correct! Learning how ChatGPT and AI works is like understanding the rules of a board game; knowing them helps us play the game correctly and recognize when something is off or wrong.',
        },
        {
          name: 'Because it is required to use ChatGPT.',
          explanation:
            "Not quite... There's no rule saying you must understand its workings to use it, but knowing helps you use it more effectively. For example, to cook an egg, understanding how long you need to cook it for and what temperature to cook it at will help you not eat it raw and get sick. If you cook an egg without understanding when it is cooked or raw can lead to an upset stomach!",
        },
      ],
      answerIndex: 1,
    },
    {
      type: 'lecture',
      title: 'Objective 2: Recognizing AI Limitations and Risks',
      image: image9,
      alt: '',
      text: "Even though AI can be super helpful, it has its limits. Imagine you're playing a video game, but sometimes the game glitches. AI can glitch in a way, too. For example, it might give you wrong information if it has learned from incorrect data. Just like you can't fly a dragon into a storm, you shouldn't rely on AI for everything without double-checking its answers.",
    },
    {
      type: 'lecture',
      title: 'Objective 2: Recognizing AI Limitations and Risks',
      image: image6,
      alt: '',
      text: "It's important to remember that AI is just one tool in our toolkit. We need to use other tools as well, like books, asking teachers, or talking to friends, to make sure we understand the full picture. When there comes a time where you need to showcase your skills without the support of AI, you may not know how to solve the problem if you don’t try to learn each step.This helps us avoid mistakes and learn better.",
    },
    {
      type: 'quiz',
      questionNumber: 2,
      question:
        'What is the result of ONLY relying on AI systems like ChatGPT for information?',
      choices: [
        {
          name: 'Reduced critical thinking skills and potential for misinformation.',
          explanation:
            "That’s correct:  If you rely on ChatGPT without taking the time to learn the steps on how you got that answer, you may not know how to do it yourself and fully understand on how to solve the problem. This reduces your critical thinking skills and increases the potential for misinformation. It's like always taking the elevator and forgetting how to climb stairs.",
        },
        {
          name: 'More accurate information.',
          explanation:
            'Not quite... AI can be a helpful tool, but overreliance might lead us to accept information without questioning its accuracy.',
        },
        {
          name: 'Enhanced creativity and problem-solving skills.',
          explanation:
            'Not quite... While AI can inspire new ideas, overusing it may dampen our own creativity and problem-solving abilities.',
        },
      ],
      answerIndex: 0,
    },
    {
      type: 'quiz',
      questionNumber: 3,
      question:
        'Why is it important to understand the limitations of ChatGPT and other AI systems?',
      choices: [
        {
          name: 'To avoid relying too much on ChatGPT and encourage critical problem-solving skills beyond what AI systems can offer.',
          explanation:
            'Although this is important in understanding the limitations of AI, you should look at the other response options to see if they are also accurate as well!',
        },
        {
          name: 'To foster a realistic understanding of AI capabilities and limitations, promoting informed decision-making.',
          explanation:
            'Although this is important in understanding the limitations of AI, you should look at the other response options to see if they are also accurate as well!',
        },
        {
          name: 'All of the above.',
          explanation:
            "Correct! Knowing AI's limits helps us not to lean too much on it and keeps us learning and growing. It's like knowing when to ask a friend for help instead of always relying on a computer.",
        },
      ],
      answerIndex: 2,
    },
    {
      type: 'lecture',
      title: 'Objective 3: Identifying Biases in AI Responses',
      image: image7,
      alt: '',
      text: 'Bias means being unfairly in favor of or against something or someone. Sometimes, without meaning to, people teach AI their own biases. For example, if most stories an AI reads say dragons are scary, it might wrongly believe all dragons are scary. However, Dragons can be sweet and nice too! We need to teach AI about the good dragons as well!',
    },
    {
      type: 'quiz',
      questionNumber: 4,
      question: 'What are biases?',
      choices: [
        {
          name: 'Ways that people and groups harm others through subconscious belief',
          explanation:
            'Biases are like invisible traps that can lead to unfairness, often without us knowing. They can sneak into AI like ChatGPT, affecting the fairness of the information we get.',
        },
        {
          name: 'Objective and scientific viewpoints',
          explanation:
            'Not quite… being objective and having scientific viewpoints means that you have evidence to help support your claim and make a fair judgment.',
        },
        {
          name: 'Flaws in AI systems',
          explanation:
            'Not quite… having flaws in AI systems are a result of having biases because it leads to unfairness and unsupported claims that can be harmful.',
        },
      ],
      answerIndex: 0,
    },
    {
      type: 'quiz',
      questionNumber: 5,
      question: 'Are ChatGPT’s responses are biased?',
      choices: [
        {
          name: 'Yes, always.',
          explanation:
            "Not quite... While it's natural to wonder about bias, saying ChatGPT is always biased isn't accurate. Just like people, ChatGPT can sometimes be influenced by the information it's learned from. It's important to consider various factors and fact-check the information.",
        },
        {
          name: 'No, never– ChatGPT is always reliable as it is constantly evolving and improving.',
          explanation:
            "Not quite... While ChatGPT is indeed constantly evolving and improving, it's not always completely unbiased. Just like us, it can sometimes be influenced by what it's learned. So, it's a good idea to double-check the information it provides.",
        },
        {
          name: 'It depends on var ious factors so it is good to always fact-check.',
          explanation:
            "ChatGPT might give biased answers depending on what it learned from. It's like a parrot repeating words without knowing what they mean. We should always double-check the information.",
        },
      ],
      answerIndex: 2,
    },
    {
      type: 'lecture',
      title: 'Objective 4: Impact of Biased Responses',
      image: image3,
      alt: '',
      text: "When AI becomes biased, it will have stereotypes and misconceptions which can lead to a narrow view of topics, limiting exposure to a different ideas and opinions. It's like hearing the same mistaken story over and over—eventually, you might start believing it's true, even if it's not. Understanding these impacts helps us remain critical of the information provided by AI, ensuring we seek out diverse sources and viewpoints to get a more complete and accurate picture.",
    },
    {
      type: 'quiz',
      questionNumber: 6,
      question:
        'How can biased answers affect the information you receive from ChatGPT?',
      choices: [
        {
          name: 'By presenting skewed or inaccurate perspectives',
          explanation:
            'Close, but not quite! Skewed and inaccurate perspectives can also lead to other harmful perceptions you may have on certain topics! What other ways can biases harm your perspectives on the information received from ChatGPT?',
        },
        {
          name: 'By limiting the diverse of viewpoints presented',
          explanation:
            'Close but not quite! When you have limited viewpoints, it may cause you to become biased and affect your perception. What other ways can biases harm your perspectives on the information received from ChatGPT?',
        },
        {
          name: 'All of the above',
          explanation:
            'Correct! Biased responses can give us a wonky view of the world, like looking through a bent mirror. They can reinforce unfair stereotypes or leave out important voices, making the information incomplete.',
        },
      ],
      answerIndex: 2,
    },
    {
      type: 'lecture',
      title: 'Objective 5: Understanding Plagiarism',
      image: image8,
      alt: '',
      text: "Plagiarism is when someone copies someone else's work and says it's their own. It's like if you found a treasure on a dragon ride and told everyone you made the treasure yourself. Always tell where you got your information from, especially when you're using AI to help with school projects. It's important to double-check the facts and think critically about the answers we get.",
    },
    {
      type: 'quiz',
      questionNumber: 7,
      question: 'What is Plagiarism?',
      choices: [
        {
          name: 'Citing any sources used in your work',
          explanation:
            "That's not quite right. While citing sources is important to avoid plagiarism, it's not the definition of plagiarism itself. Plagiarism is actually when you copy someone else's work without giving them credit, like claiming you scored a goal when you didn't.",
        },
        {
          name: 'Copying work that isn’t your own without giving credit',
          explanation:
            "Correct! Copying someone else's work without saying it's theirs is plagiarism. It's like taking credit for a goal you didn't score.",
        },
        {
          name: 'Paraphrasing your own ideas.',
          explanation:
            "Close, but not quite! Paraphrasing your own ideas isn't plagiarism because you're not claiming someone else's work as your own.",
        },
      ],
      answerIndex: 1,
    },
    {
      type: 'quiz',
      questionNumber: 8,
      question: 'Why is it important to be honest in using ChatGPT?',
      choices: [
        {
          name: 'Because it will sell and track your data, so you should manage what you say.',
          explanation:
            "While being mindful of your data privacy is important, honesty in using ChatGPT goes beyond just data management. It's more about maintaining integrity in the information you share.",
        },
        {
          name: 'To maintain academic integrity and trustworthiness in the information shared.',
          explanation:
            "Honesty in using ChatGPT helps maintain the trust in our work and ensures we truly learn from our tasks. It's like building a tower with strong bricks instead of shaky ones; it stands tall and proud because it's built the right way.",
        },
        {
          name: 'Because ChatGPT requires honesty in the user agreement.',
          explanation:
            "While honesty is typically outlined in user agreements, the importance of honesty extends beyond just following rules. It's about upholding integrity and trustworthiness in the information we create and share.",
        },
      ],
      answerIndex: 1,
    },
    {
      type: 'lecture',
      title: 'Objective 6: Practical Tips for Ethical and Effective AI Use',
      image: image1,
      alt: '',
      text: "Think of AI like a partner in a school project. It can give you ideas and help you understand things better, but it's up to you to put the pieces together and create your own work. This means taking the ideas AI gives you, adding your own thoughts, and making something new. It's important to look at different sides of a story to get the full pictur and learn on your own. This helps you become a better thinker and keeps your mind sharp for solving all kinds of puzzles.",
    },
    {
      type: 'quiz',
      questionNumber: 9,
      question:
        'How can you use ChatGPT to help you learn without copying your answers?',
      choices: [
        {
          name: 'Utilize it as a tool for generating ideas and understanding concepts',
          explanation:
            "Close, but not quite! While using ChatGPT as a tool for generating ideas and understanding concepts is important, it's only part of the answer.",
        },
        {
          name: 'Verify its responses with other sources and integrate them into your own words',
          explanation:
            "Almost there! Verifying ChatGPT's responses with other sources and integrating them into your own words is definitely a good idea, but what else could be important?",
        },
        {
          name: 'Correct: All of the above',
          explanation:
            'ChatGPT is a tool to spark ideas and help understand things better. But like using any tool, from pencils to computers, the real learning happens when we make the ideas our own.',
        },
      ],
      answerIndex: 2,
    },
    {
      type: 'quiz',
      questionNumber: 10,
      question: 'How can ChatGPT affect your learning?',
      choices: [
        {
          name: 'Reducing your critical thinking and understanding when overused',
          explanation:
            'Close, but not quite! While relying on only ChatGPT without fact checking may harm your problem solving skills, it can also benefit you when used responsibly!.',
        },
        {
          name: 'By fostering curiosity and exploration of new topics',
          explanation:
            'Almost there! While using ChatGPT responsibly can help generate new topics and be great inspirtation to start off with, it can also negativly impact you when used wrong!',
        },
        {
          name: 'All of the above',
          explanation:
            'Correct! ChatGPT when used resposibly can be one of your greatest resource if you do not rely on it and fact-check the information. However, if used wrong, it can harm how you think and problem-solve!',
        },
      ],
      answerIndex: 2,
    },
    {
      type: 'end',
      lessonTitle: 'Lesson3: Ethics of AI Closing Thoughts',
      message:
        "Congratulations on completing the curriculum! Throughout this journey, you've flown through the depths of artificial intelligence, mastered the art of engaging with it, and explored the ethics of ChatGPT. With a wealth of knowledge under your belt, you're now equipped to embark on your own academic adventures, ready to conquer new challenges that lie ahead. Wishing you the best of luck in your future journey!",
    },
  ],
};
