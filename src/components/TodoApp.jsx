import { Routes, Route } from 'react-router-dom';


import About from '@/routes/About';
import Login from '@/routes/Login';
import Profile from '@/routes/Profile';
import NotMatch from '@/routes/NotMatch';
import Layout from '@/components/Layout';
import SinglePage from '@/routes/SinglePage';

const TodoApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="about" element={<About />}>
      <Route path=":slug" element={<SinglePage />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="profile" element={<Profile />} />
      <Route path="*" element={<NotMatch />} />
    </Routes>
  );
};
export default TodoApp;
