import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';

import { Global } from './styles/global';
import App from './App';
import { Home } from './pages/Home/Home';
import { AboutUs } from './pages/AboutUs/AboutUs';
import { NoMatch } from './pages/NoMatch';

ReactDOM.render(
  <>
    <Global />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="404" element={<NoMatch />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>,
  document.getElementById('root')
);
