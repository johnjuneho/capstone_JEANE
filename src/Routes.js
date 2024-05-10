import Home from './components/pages/home/Home';
import Intro from './components/pages/intro/Intro';
import Lesson1 from './components/pages/lesson-1/Lesson1';
import Lesson2 from './components/pages/lesson-2/Lesson2';
import Lesson3 from './components/pages/lesson-3/Lesson3';


const routes = [
  { path: '/', element: <Home />, className: 'Overview' },
  { path: '/intro', element: <Intro />, className: 'Introduction' },
  { path: '/lesson1', element: <Lesson1 />, className: 'Lesson-1' },
  { path: '/lesson2', element: <Lesson2 />, className: 'Lesson-2' },
  { path: '/lesson3', element: <Lesson3 />, className: 'Lesson-3' },
];

export default routes;
