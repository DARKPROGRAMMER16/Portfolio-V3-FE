import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import BaseLayout from '../components/layout/BaseLayout';

// Lazy load the pages
const Home = React.lazy(() => import('../pages/Home'));
const About = React.lazy(() => import('../pages/About'));
const Projects = React.lazy(() => import('../pages/Projects'));
const ContactMe = React.lazy(() => import('../pages/ContactMe'));

const Router = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<ContactMe />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Router;
