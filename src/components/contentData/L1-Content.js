const image1 = require('../images/img9.jpg');
const image2 = require('../images/img42.jpg');
const image3 = require('../images/img31.jpg');
const image4 = require('../images/img41.jpg');
const image5 = require('../images/img36.jpg');
const image6 = require('../images/img34.jpg');
const image7 = require('../images/img40.jpg');
const image8 = require('../images/img29.jpg');
const image9 = require('../images/img39.jpg');
const image10 = require('../images/img28.jpg');

export const L1Content = {
  content: [
    {
      type: 'lecture',
      title: 'Objective 1: Asking Clearly',
      image: image1,
      alt: 'A cartoon dragon.',
      text: "Interacting with ChatGPT is a bit like giving directions to a robot. We have to be really clear and specific about where we want it to go and what we want it to do. Just like we wouldn't say 'go that way' to a robot without pointing, we can't just ask ChatGPT questions vaguely—we need to give specific instructions by choosing our words carefully!",
    },
    {
      type: 'quiz',
      questionNumber: 1,
      question: 'What is the most important feature of a good prompt?',
      choices: [
        {
          name: 'Specificity - how specific the prompt is',
          explanation:
            "Correct! Think of asking ChatGPT a question like searching for a hidden treasure. If your map (the question) is super detailed, you're way more likely to find the gold (the answer you need). Specific questions lead you straight to the treasure!",
        },
        {
          name: 'Politeness - how polite the prompt is',
          explanation:
            "Incorrect: Not quite... While being polite is nice, it doesn't help ChatGPT understand your question better. It's like saying please to a vending machine; nice but not necessary for getting what you want.",
        },
        {
          name: 'Length - how long the prompt is',
          explanation:
            "Incorrect: Not quite... A long question isn't always a clear one. It's like when someone tells a story that goes on and on but never gets to the point. Specificity beats length every time.",
        },
      ],
      answerIndex: 0,
    },
    {
      type: 'lecture',
      title: 'Objective 2: Giving Good Details',
      image: image2,
      alt: 'A cartoon dragon.',
      text: "We need to be like detectives, providing all the clues so ChatGPT knows exactly what we're talking about. Some of the most important factors to remember when creating your prompt are to provide proper context and to be very specific. Just like with the robot, providing clear context and specific instructions ensures that Chat GPT generates relevant and useful responses tailored to your needs.",
    },
    {
      type: 'quiz',
      questionNumber: 2,
      question: 'Choose the most effective prompt.',
      choices: [
        {
          name: 'How can I be healthier?',
          explanation:
            "Incorrect: Not quite... the answer is too vague, like asking 'how do I be good at sports?' without mentioning which sport you're interested in.",
        },
        {
          name: 'What are some food and exercise practices for teens that help them live longer and healthier lives?',
          explanation:
            'Correct! Detailed questions like this are gold when looking for specific answers.',
        },
        {
          name: 'What is the healthiest way to live?',
          explanation:
            "Incorrect: Not quite... the answer is too broad and doesn't provide enough information for ChatGPT to generate a useful response.",
        },
      ],
      answerIndex: 1,
    },
    {
      type: 'lecture',
      title: 'Objective 3: How Should We Talk to ChatGPT?',
      image: image3,
      alt: 'A cartoon dragon.',
      text: "Using positive language helps focus the conversation and leads to better interactions with ChatGPT. It's like helping someone learn to skate by telling them to 'keep your balance' instead of not to fall.",
    },
    {
      type: 'quiz',
      questionNumber: 3,
      question:
        'When asking ChatGPT questions, should you use a positive or negative tone for describing what you want??',
      choices: [
        {
          name: 'Use a positive tone',
          explanation:
            "Correct! Like telling someone to 'keep your balance' while skating, a conversational tone is more effective.",
        },
        {
          name: 'Use a negative tone',
          explanation:
            "Incorrect: This tells ChatGPT what not to do, but it's more helpful to focus on what to do.",
        },
      ],
      answerIndex: 0,
    },
    {
      type: 'lecture',
      title: 'Objective 4: Understanding The Potential of AI',
      image: image4,
      alt: 'A cartoon dragon..',
      text: "Imagine a super-cool robot friend who can draw amazing pictures, compose music like a rock star, write awesome stories, and even play games with you! Artificial Intelligence is like having a genie who’s great at everything from choreographing dances to solving math problems. Whether you want a picture of a skateboarding dinosaur, a song to match your mood, or a little help with science, AI is your go-to for creating, learning, and having fun!",
    },
    {
      type: 'quiz',
      questionNumber: 4,
      question:
        'What is something that AI can NOT do?',
      choices: [
        {
          name: 'Compose Music',
          explanation:
            "Not quite... ChatGPT and other AI systems can help you write lyrics and compose your own song!",
        },
        {
          name: 'Choreograph a dance routine',
          explanation:
            "Not quite... With the proper wording, ChatGPT and other AI systems can help you choreograph an amazing dance routine!",
        },
        {
          name: "Turn you into a dragon",
          explanation:
            "Correct! Artificial Intelligence has many capabilities and is often extremely smart, but it cannot turn you into a dragon.",
        },
      ],
      answerIndex: 2,
    },
    {
      type: 'lecture',
      title: 'Objective 5: Math Problem Prompts',
      image: image5,
      alt: 'A cartoon dragon..',
      text: 'Let’s discover how to ask ChatGPT for help with math in a way that boosts your learning. Instead of simply asking for the answer to math problems, we should be asking for explanations or step-by-step guides that help you understand the process. This will make sure that you get the help you need, while still learning!',
    },
    {
      type: 'quiz',
      questionNumber: 5,
      question:
        'What prompt will be the most useful when using ChatGPT to help you solve a math problem?',
      choices: [
        {
          name: '"What is 11/5?"',
          explanation:
            "Not quite... This just asks for an answer, not understanding. It's like wanting to win a game without knowing the rules.",
        },
        {
          name: '"What is the best approach to calculating 11/5 by hand?"',
          explanation:
            'Not quite... This is closer but still focuses on the end result rather than learning the process.',
        },
        {
          name: '"Tell me how to solve 11/5 step by step without giving me the answer."',
          explanation:
            'Correct! Asking ChatGPT to guide you through a math problem step by step is like learning every move of the trick, so you can do it on your own next time.',
        },
      ],
      answerIndex: 2,
    },
    {
      type: 'lecture',
      title: "Objective 6: Recognizing AI's Math Abilities",
      image: image6,
      alt: 'A cartoon dragon.',
      text: "We need to understand that while ChatGPT can handle basic math, it's not always correct, especially with complex problems. You should always be asking for explanations rather than just answers. This will enhance your learning and avoid relying on potentially incorrect solutions.",
    },
    {
      type: 'quiz',
      questionNumber: 6,
      question: 'Can ChatGPT do math?',
      choices: [
        {
          name: 'Yes',
          explanation:
            'While AI, including ChatGPT, is capable of performing math, stating simply "yes" ignores the reality that AI can sometimes make errors, especially with complex problems, and that relying on AI for answers can impact learning.',
        },
        {
          name: 'Sometimes',
          explanation:
            "Correct! Imagine using a super smart calculator that can sometimes mess up tricky problems. It's great for quick checks but not perfect. Learning to solve problems yourself, with ChatGPT explaining the steps, is like building your own math muscles.",
        },
        {
          name: 'No',
          explanation:
            'This answer is incorrect because AI, including ChatGPT, can indeed perform math operations. Stating a flat "no" disregards the capabilities of AI in solving mathematical problems.',
        },
      ],
      answerIndex: 1,
    },
    {
      type: 'lecture',
      title: 'Objective 7: Using ChatGPT Wisely for English Assistance',
      image: image7,
      alt: 'A cartoon dragon.',
      text: 'Let’s talk about how to use ChatGPT effectively for English assignments without crossing ethical boundaries. There is a large difference between seeking constructive feedback and using AI to write for you. Not only can this be detected by software, but it is considered plagiarism.',
    },
    {
      type: 'quiz',
      questionNumber: 7,
      question:
        'Select the prompt that would not be beneficial when using ChatGPT to help with English:',
      choices: [
        {
          name: 'Help me format this outline for my essay about whales.',
          explanation:
            "Incorrect: This is actually helpful because it's asking for guidance on structure, not for ChatGPT to do all the work.",
        },
        {
          name: 'Read my essay about whales and tell me 3 ways I can improve my writing.',
          explanation:
            'Not quite... This is a good use of AI, asking for feedback to improve your skills, not to cheat.',
        },
        {
          name: 'Give me a 300-word essay on whales.',
          explanation:
            "Correct! Asking ChatGPT to write your essay is like getting a robot to do your homework. Sure, it can do it, but you won't learn anything. It's better to use ChatGPT as a coach for advice on improving your skills, not doing the work for you.",
        },
      ],
      answerIndex: 2,
    },
    {
      type: 'lecture',
      title: 'Objective 8: Respecting Privacy with ChatGPT',
      image: image8,
      alt: 'A cartoon dragon.',
      text: 'Acknowledge the importance of respecting privacy when interacting with ChatGPT. Understand that asking for personal information about others is not only inappropriate but also breaches privacy laws and ethical standards.',
    },
    {
      type: 'quiz',
      questionNumber: 8,
      question: 'What is inappropriate to ask in ChatGPT?',
      choices: [
        {
          name: 'Asking how to improve mathematics skills in a class',
          explanation:
            "Incorrect: This is appropriate because you are asking how to work on improving your math skills, not trying to get the answer to a problem. It's like asking a math-savvy friend for tips on getting stronger at solving puzzles and problems. ChatGPT is here to help you train your brain, kind of like a workout buddy for your homework.",
        },
        {
          name: 'Asking for help with a homework question',
          explanation:
            "Incorrect: This is an appropriate use of ChatGPT. Imagine you're working on a tough puzzle, and you ask for a hint, not the answer. That's what ChatGPT can do—give you hints to solve the puzzle yourself. It's all about learning to solve the problem to do it the next time, not just getting the answer.",
        },
        {
          name: 'Asking AI to create images or videos of other people without their consent',
          explanation:
            "Correct! This is inappropriate because generating images or videos about individuals without their consent is illegal and not a right thing to do. Always respect people's privacy, just like you'd want yours respected.",
        },
      ],
      answerIndex: 2,
    },
    {
      type: 'lecture',
      title: 'Objective 9: Asking for Specific Advice',
      image: image9,
      alt: 'A cartoon dragon.',
      text: 'So how should you be asking your questions to get the best advice from ChatGPT? As we have learned, being specific, like asking for further explanation on a specific step, results in better, more actionable results. Remember, clarity is king!',
    },
    {
      type: 'quiz',
      questionNumber: 9,
      question:
        "You're seeking help from ChatGPT for cooking tips. Which prompt is most likely to provide the best result?",
      choices: [
        {
          name: '"How do I cook?"',
          explanation:
            "Not quite… This question is super broad, like asking, 'How do I play games?' It's hard for ChatGPT to know where to start. It's better to zoom in on exactly what you want to learn, like a specific game or recipe.",
        },
        {
          name: '"Can you provide a recipe for spaghetti carbonara?"',
          explanation:
            "Correct! You are providing ChatGPT with specific details on how they can help you with a specific recipe you want to learn. This is like asking for the rules to a specific game. ChatGPT can dive right into the details, giving you step-by-step instructions to whip up something delicious. It's a recipe for success!",
        },
        {
          name: '"Why is cooking so hard?"',
          explanation:
            "Not quite… This is not the best question to ask because ChatGPT doesn’t know what specific part of cooking you need help with. This sounds like you're feeling a bit frustrated, which is okay. This question opens the door to chatting about how to make cooking easier and more fun, sort of like finding cheat codes for a game. But remember, asking for a specific recipe or tip can get you cooking faster!",
        },
      ],
      answerIndex: 1,
    },
    {
      type: 'lecture',
      title: "Objective 10: Understanding ChatGPT's Limitations",
      image: image10,
      alt: 'A cartoon dragon.',
      text: 'Lastly, we must understand that there are certain questions ChatGPT might not be able to answer, either due to their complexity or because they fall outside of its “knowledge.” We need to be able to recognize these limitations and adjust your expectations accordingly.',
    },
    {
      type: 'quiz',
      questionNumber: 10,
      question: 'Does ChatGPT always answer questions correctly?',
      choices: [
        {
          name: 'No, ChatGPT is always wrong',
          explanation:
            "Not quite… Think of ChatGPT as a super smart calculator that's great at solving lots of problems accurately but can sometimes get stumped, especially with really tricky questions. It's amazing but not magical.",
        },
        {
          name: 'Yes, ChatGPT is always right',
          explanation:
            'Not quite… While these Ai systems are often correct, there are some questions that are too complicated for ChatGPT. We must understand what ChatGPT is capable of to ensure that the responses we receive are accurate.',
        },
        {
          name: 'Maybe, it depends on the topic and complexity of the question.',
          explanation:
            "Correct! Sometimes a question is like a super hard level in a game that even ChatGPT can't beat. It has rules about what it can talk about, and some puzzles are just too complex or outside its guidelines.",
        },
      ],
      answerIndex: 2,
    },
    {
      type: 'end',
      lessonTitle: 'Lesson 1: Mastering Prompt Engineering Closing Thoughts',
      message:
        'Prompt engineering helps you harness the power of AI language models like ChatGPT. By mastering the art of crafting prompts, you can unlock the full potential of these tools for whatever you need. Remember, clarity and specificity are key to getting the results you need. Happy prompting!',
    },
  ],
};
