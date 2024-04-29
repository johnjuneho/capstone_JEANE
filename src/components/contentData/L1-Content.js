const image1 = require('../images/text-content-placeholder.png');

export const L1Content = {
  content: [
    {
      type: 'lecture',
      title: 'Objective 1: Asking Clearly',
      image: image1,
      alt: 'A cartoon person training a dragon.',
      text: "It's important to learn how to ask ChatGPT in a way that gets us the answers we need without any mix-ups or wrong information. It's like playing a word game with a computer—we need to pick our words really carefully! As we have learned, large language models predict the next words. We need to think like AI and choose our words carefully!"
    },
    {
      type: 'quiz',
      questionNumber: 1, // Added question number
      question: 'What is the most important feature of a good prompt?',
      choices: [
        {
          name: 'Specificity',
          explanation: "Correct:  Think of asking ChatGPT a question like searching for a hidden treasure. If your map (the question) is super detailed, you're way more likely to find the gold (the answer you need). Specific questions lead you straight to the treasure!"
        },
        {
          name: 'Politeness',
          explanation: "Incorrect: Not quite... While being polite is nice, it doesn't help ChatGPT understand your question better. It's like saying please to a vending machine; nice but not necessary for getting what you want."
        },
        {
          name: 'Length',
          explanation: "Incorrect: Not quite... A long question isn't always a clear one. It's like when someone tells a story that goes on and on but never gets to the point. Specificity beats length every time."
        }
      ],
      answerIndex: 0
    },
    {
      type: 'lecture',
      title: 'Objective 2: Giving Good Details',
      image: image1, //placeholder
      alt: 'A detective looking at clues.',
      text: "Providing clear context and specific instructions ensures that responses are relevant and useful. Just like a detective, we must give ChatGPT all the clues it needs to provide the correct answers."
    },
    {
      type: 'quiz',
      questionNumber: 2, // Added question number
      question: 'Choose the most effective prompt.',
      choices: [
        {
          name: 'How can I be healthier?',
          explanation: "Incorrect: Not quite... the answer is too vague, like asking 'how do I be good at sports?' without mentioning which sport you're interested in."
        },
        {
          name: 'What are some food and exercise practices for teens that help them live longer and healthier lives?',
          explanation: "Correct! Detailed questions like this are gold when looking for specific answers."
        },
        {
          name: 'What is the healthiest way to live?',
          explanation: "Incorrect: Not quite... the answer is too broad and doesn't provide enough information for ChatGPT to generate a useful response."
        }
      ],
      answerIndex: 1
    },
    {
      type: 'lecture',
      title: 'Objective 3: How Should We Talk to ChatGPT?',
      image: image1, //placeholder
      alt: 'Two people having a conversation.',
      text: "Using positive language helps focus the conversation and leads to better interactions with ChatGPT. It's like helping someone learn to skate by telling them to 'keep your balance' instead of not to fall."
    },
    {
      type: 'quiz',
      questionNumber: 3, // Added question number
      question: 'Which is the better prompt?',
      choices: [
        {
          name: 'Use a conversational tone',
          explanation: "Correct! Like telling someone to 'keep your balance' while skating, a conversational tone is more effective."
        },
        {
          name: "Don't use a formal tone",
          explanation: "Incorrect: This tells ChatGPT what not to do, but it's more helpful to focus on what to do."
        }
      ],
      answerIndex: 0
    },
    {
      type: 'lecture',
      titel: 'Objective 4: Understanding Politeness in Prompts',
      image: image1, //placeholder
      alt: "Two people having a conversation.",
      text: "While being polite (like using 'please' and 'thank you') is a good habit, our key focus should be on making your prompts to ChatGPT clear and to the point. Manners are great but not necessarily important in this setting, clarity is king!"
    },
    {
      type: 'quiz',
      questionNumber: 4,
      question: 'Should I be polite and use please/thank you when talking to ChatGPT?',
      choices: [
        {
          name: 'Yes',
          explanation: "Not quite... While being polite is great in social situations, ChatGPT doesn't need politeness to understand or respond to your requests. It's like programming a computer; the code doesn't need 'please' to run."
        },
        {
          name: 'No',
          explanation: "Not quite... This isn't exactly wrong. Politeness is a good habit, but clarity is what really helps ChatGPT help you."
        },
        {
          name: "It doesn't matter",
          explanation: " Correct! Imagine texting a friend. You don't need to say 'please' or 'thank you' for them to understand, but it's nice, right? Same with ChatGPT. Manners are cool, but clarity is key. Just like in texts, getting straight to the point often works best."
        },
      ],
      answerIndex: 2
    },
    {
      "type": "lecture",
      "title": "Objective 5: Crafting Effective Math Problem Prompts",
      "image": image1,
      "alt": "A person teaching another person math.",
      "text": "Let’s discover how to ask ChatGPT for help with math in a way that boosts your learning. Instead of simply asking for the answer to math problems, we should be asking for explanations or step-by-step guides that help you understand the process. This will make sure that you get the help you need, while still learning!"
    },
    {
      "type": "quiz",
      "questionNumber": 5,
      "question": "What prompt will be the most useful when using ChatGPT to help you solve a math problem?",
      "choices": [
        {
          "name": "\"What is 11/5?\"",
          "explanation": "Not quite... This just asks for an answer, not understanding. It's like wanting to win a game without knowing the rules."
        },
        {
          "name": "\"What is the best approach to calculating 11/5 by hand?\"",
          "explanation": "Not quite... This is closer but still focuses on the end result rather than learning the process."
        },
        {
          "name": "\"Tell me how to solve 11/5 step by step without giving me the answer.\"",
          "explanation": "Correct! Asking ChatGPT to guide you through a math problem step by step is like learning every move of the trick, so you can do it on your own next time."
        }
      ],
      "answerIndex": 2
    },
    {
      "type": "lecture",
      "title": "Objective 6: Recognizing AI's Math Abilities",
      "image": image1,
      "alt": "A person and a robot solving a math problem together.",
      "text": "We need to understand that while ChatGPT can handle basic math, it's not always correct, especially with complex problems. You should always be asking for explanations rather than just answers. This will enhance your learning and avoid relying on potentially incorrect solutions."
    },
    {
      "type": "quiz",
      "questionNumber": 6,
      "question": "Can ChatGPT do math?",
      "choices": [
        {
          "name": "Yes",
          "explanation": "While AI, including ChatGPT, is capable of performing math, stating simply \"yes\" ignores the reality that AI can sometimes make errors, especially with complex problems, and that relying on AI for answers can impact learning."
        },
        {
          "name": "Sometimes",
          "explanation": "Correct! Imagine using a super smart calculator that can sometimes mess up tricky problems. It's great for quick checks but not perfect. Learning to solve problems yourself, with ChatGPT explaining the steps, is like building your own math muscles."
        },
        {
          "name": "No",
          "explanation": "This answer is incorrect because AI, including ChatGPT, can indeed perform math operations. Stating a flat \"no\" disregards the capabilities of AI in solving mathematical problems."
        }
      ],
      "answerIndex": 1
    },
    {
      "type": "lecture",
      "title": "Objective 7: Using ChatGPT Wisely for English Assistance",
      "image": image1,
      "alt": "A person receiving feedback on their writing from a robot.",
      "text": "Let’s talk about how to use ChatGPT effectively for English assignments without crossing ethical boundaries. There is a large difference between seeking constructive feedback and using AI to write for you. Not only can this be detected by software, but it is considered plagiarism."
    },
    {
      "type": "quiz",
      "questionNumber": 7,
      "question": "Select the prompt that would not be beneficial when using ChatGPT to help with English:",
      "choices": [
        {
          "name": "Help me format this outline for my essay about whales.",
          "explanation": "Incorrect: This is actually helpful because it's asking for guidance on structure, not for ChatGPT to do all the work."
        },
        {
          "name": "Read my essay about whales and tell me 3 ways I can improve my writing.",
          "explanation": "Not quite... This is a good use of AI, asking for feedback to improve your skills, not to cheat."
        },
        {
          "name": "Give me a 300-word essay on whales.",
          "explanation": "Correct! Asking ChatGPT to write your essay is like getting a robot to do your homework. Sure, it can do it, but you won't learn anything. It's better to use ChatGPT as a coach for advice on improving your skills, not doing the work for you."
        }
      ],
      "answerIndex": 2
    },
    {
      "type": "lecture",
      "title": "Objective 8: Respecting Privacy with ChatGPT",
      "image": image1,
      "alt": "A person asking a robot for advice.",
      "text": "Acknowledge the importance of respecting privacy when interacting with ChatGPT. Understand that asking for personal information about others is not only inappropriate but also breaches privacy laws and ethical standards."
    },
    {
      "type": "quiz",
      "questionNumber": 8,
      "question": "What is inappropriate to ask in ChatGPT?",
      "choices": [
        {
          "name": "Asking how to improve mathematics skills in a class",
          "explanation": "Incorrect: This is appropriate because you are asking how to work on improving your math skills, not trying to get the answer to a problem. It's like asking a math-savvy friend for tips on getting stronger at solving puzzles and problems. ChatGPT is here to help you train your brain, kind of like a workout buddy for your homework."
        },
        {
          "name": "Asking for help with a homework question",
          "explanation": "Incorrect: This is an appropriate use of ChatGPT. Imagine you're working on a tough puzzle, and you ask for a hint, not the answer. That's what ChatGPT can do—give you hints to solve the puzzle yourself. It's all about learning to solve the problem to do it the next time, not just getting the answer."
        },
        {
          "name": "Asking AI to create images or videos of other people without their consent",
          "explanation": "Correct! This is inappropriate because generating images or videos about individuals without their consent is illegal and not a right thing to do. Always respect people's privacy, just like you'd want yours respected."
        }
      ],
      "answerIndex": 2
    },
    {
      "type": "lecture",
      "title": "Objective 9: Asking for Specific Advice",
      "image": image1,
      "alt": "A person cooking a meal with a robot's help.",
      "text": "So how should you be asking your questions to get the best advice from ChatGPT? As we have learned, being specific, like asking for further explanation on a specific step, results in better, more actionable results. Remember, clarity is king!"
    },
    {
      "type": "quiz",
      "questionNumber": 9,
      "question": "You're seeking help from ChatGPT for cooking tips. Which prompt is most likely to provide the best result?",
      "choices": [
        {
          "name": "\"How do I cook?\"",
          "explanation": "Not quite… This question is super broad, like asking, 'How do I play games?' It's hard for ChatGPT to know where to start. It's better to zoom in on exactly what you want to learn, like a specific game or recipe."
        },
        {
          "name": "\"Can you provide a recipe for spaghetti carbonara?\"",
          "explanation": "Correct! You are providing ChatGPT with specific details on how they can help you with a specific recipe you want to learn. This is like asking for the rules to a specific game. ChatGPT can dive right into the details, giving you step-by-step instructions to whip up something delicious. It's a recipe for success!"
        },
        {
          "name": "\"Why is cooking so hard?\"",
          "explanation": "Not quite… This is not the best question to ask because ChatGPT doesn’t know what specific part of cooking you need help with. This sounds like you're feeling a bit frustrated, which is okay. This question opens the door to chatting about how to make cooking easier and more fun, sort of like finding cheat codes for a game. But remember, asking for a specific recipe or tip can get you cooking faster!"
        }
      ],
      "answerIndex": 1
    },
    {
      "type": "lecture",
      "title": "Objective 10: Understanding ChatGPT's Limitations",
      "image": image1,
      "alt": "A person contemplating a complex puzzle.",
      "text": "Lastly, we must understand that there are certain questions ChatGPT might not be able to answer, either due to their complexity or because they fall outside of its “knowledge.” We need to be able to recognize these limitations and adjust your expectations accordingly."
    },
    {
      "type": "quiz",
      "questionNumber": 10,
      "question": "Does ChatGPT always answer questions correctly?",
      "choices": [
        {
          "name": "No, ChatGPT is always wrong",
          "explanation": "Not quite… Think of ChatGPT as a super smart calculator that's great at solving lots of problems accurately but can sometimes get stumped, especially with really tricky questions. It's amazing but not magical."
        },
        {
          "name": "Yes, ChatGPT is always right",
          "explanation": "Not quite… While these Ai systems are often correct, there are some questions that are too complicated for ChatGPT. We must understand what ChatGPT is capable of to ensure that the responses we receive are accurate."
        },
        {
          "name": "Maybe, it depends on the topic and complexity of the question.",
          "explanation": "Correct! Sometimes a question is like a super hard level in a game that even ChatGPT can't beat. It has rules about what it can talk about, and some puzzles are just too complex or outside its guidelines."
        }
      ],
      "answerIndex": 2
    },
    {
      "type": "end",
      "lessonTitle": "Lesson 1: Mastering Prompt Engineering",
      "message": "Congratulations! You have completed the first lesson. Move on to the next lesson to continue enhancing your skills."
    }
    
  ],
};
