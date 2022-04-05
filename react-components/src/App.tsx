import { Route, Routes } from 'react-router-dom';

import Layout from 'components/Layout/Layout';
import { AboutUs, BookTour, Home, NotFoundPage } from 'pages';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="book-tour" element={<BookTour />} />
        <Route path="404" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
