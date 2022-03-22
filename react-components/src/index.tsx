import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';

import { Global } from './styles/global';
import App from './App';
import { Home } from './pages/Home/Home';
import { AboutUs } from './pages/AboutUs/AboutUs';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

ReactDOM.render(
  <>
    <Global />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="404" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>,
  document.getElementById('root')
);
