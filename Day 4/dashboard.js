import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from "../app/actions";
import '../assets/css/dashboard.css';

const Dashboard = () => {
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <ul className="sidebar-nav">
          <li>
            <button onClick={() => navigate('/Homepage')}>Home</button>
          </li>
          <li>
            <button onClick={() => navigate('/votehere')}>Vote Here</button>
          </li>
          <li>
            <button onClick={() => navigate('/aboutus')}>About Us</button>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className='title'>
        <h1>Hello There ! <span className="user_name">{username}</span></h1>
        
        </div>
        
        
        {/* You can display other user-related information here */}
      </main>
    </div>
  );
}

export default Dashboard;
