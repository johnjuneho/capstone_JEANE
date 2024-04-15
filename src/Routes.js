import { Route } from 'react-router-dom';
import Home from './components/pages/home/Home';
import Lesson1 from './components/pages/lesson-1/Lesson1';
import Lesson2 from './components/pages/lesson-2/Lesson2';
import Lesson3 from './components/pages/lesson-3/Lesson3';
import Settings from './components/pages/settings/Settings';

export const Routes = () => {
  return (
    <>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/lesson1">
        <Lesson1 />
      </Route>
      <Route path="/lesson2">
        <Lesson2 />
      </Route>
      <Route path="/lesson3">
        <Lesson3 />
      </Route>
      <Route path="/settings">
        <Settings />
      </Route>
    </>
  );
};
