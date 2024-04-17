import Home from './components/pages/home/Home';
import Intro from './components/pages/intro/Intro';
import Lesson1 from './components/pages/lesson-1/Lesson1';
import Lesson2 from './components/pages/lesson-2/Lesson2';
import Lesson3 from './components/pages/lesson-3/Lesson3';
import Settings from './components/pages/settings/Settings';

const routes = [
  { path: '/', element: <Home />, className: 'Overview' },
  { path: '/intro/:id', element: <Intro />, className: 'Introduction' },
  { path: '/lesson1/:id', element: <Lesson1 />, className: 'Lesson-1' },
  { path: '/lesson2/:id', element: <Lesson2 />, className: 'Lesson-2' },
  { path: '/lesson3/:id', element: <Lesson3 />, className: 'Lesson-3' },
  {
    path: '/settings/:id',
    element: <Settings />,
    className: 'Settings',
  },
];

export default routes;
