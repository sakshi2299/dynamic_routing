import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserDetails from './User';
import './App.css';
import NextPage from './nextPage';

function App() {
  const users = [1, 2, 3];

  return (
    <Router>
      <div className="">
        <div className="mx-20 flex gap-5 my-24">
          {users.map((user) => (
            <Link to={`/users/${user}`} key={user}>
              user{user}
            </Link>
          ))}
        </div>
        <Routes>
          <Route path="/users/:userId" element={<UserDetails />} />
          <Route path="/nextPage" element={<NextPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
