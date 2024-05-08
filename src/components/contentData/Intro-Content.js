/**
 * Data structure for Lesson 1.
 * Includes lecture images and text, quiz options, and end slide content.
 */

const image1 = require('../images/img44.jpg');
const image2 = require('../images/img45.jpg');
const image3 = require('../images/img33.jpg');
const image4 = require('../images/img35.jpg');

export const IntroContent = {
  content: [
    {
      type: 'lecture',
      title: 'Introduction to AI',
      image: image1,
      alt: 'A dragon image.',
      text: "You might not realize it, but AI is already part of your daily life! Have you ever used Alexa or Siri? That's AI! How about getting recommendations on Netflix? Yep, AI again! It's also helping doctors diagnose illnesses and powering self-driving cars!",
    },
    {
      type: 'lecture',
      title: 'So what is AI?',
      image: image1,
      alt: 'A dragon image.',
      text: 'Ai is like giving your computer a brain! Artificial Intelligence, aka “AI,” is all about programming computers to think, learn, and solve problems, kind of like how our brains work.',
    },
    {
      type: 'lecture',
      title: 'So How Does it Learn?',
      image: image2,
      alt: 'A dragon image.',
      text: "Just like we learn from our experiences, AI learns from the information it's given. The more data it has, the smarter it becomes! So, the next time you use voice commands to control your smart home devices or chat with a virtual assistant, remember – it's all thanks to the power of AI!",
    },
    {
      type: 'lecture',
      title: 'History of Ai',
      image: image3,
      alt: 'A dragon image.',
      text: "The story of AI began in the 1950s when scientists first started exploring the idea of creating machines that could think like humans. Over the years, researchers made incredible strides in developing AI technologies, from early programs that could play chess to today's virtual assistants like Siri and Google Assistant. Along the way, there have been ups and downs, breakthroughs and setbacks, but the quest to create truly intelligent machines continues.",
    },
    {
      type: 'lecture',
      title: 'How AI Makes ChatGPT Work',
      image: image4,
      alt: 'A dragon image.',
      text: "Now, let's take a peek behind the scenes and see how AI powers ChatGPT! ChatGPT is a type of AI called a large language model, which means it learns from a lot of text data. The important thing to know is that ChatGPT doesn't \"think.\" Instead, it predicts what word should come next. This is why it can sometime be wrong. It's like having a virtual conversation partner who's always ready to chat about anything you want!",
    },
    {
      type: 'end',
      lessonTitle: 'Introduction: Closing Thoughts',
      message:
        "You now have the knowledge to embark on your AI journey! We have learned about the history of artificial intelligence. We have also learned that ChatGPT creates responses by predicting what words should go together. Next, we will gather tools and tricks to improve our AI skills. How should we talk to AI? What should we do with it's responses? Can we trust ChatGPT? Let's find out!",
    },
  ],
};
