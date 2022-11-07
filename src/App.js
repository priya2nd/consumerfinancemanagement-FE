import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Login from './pages/login';
import Form from './pages/sign-up';
import UserList from './components/Navbar/UserList';

function App() {
return (
  
	<Router>
	<Navbar />
  	{/* <UserList /> */}
	<Routes>
		<Route path='/' exact element={<Home />} />
		<Route path='/login' element={<Login />} />
		<Route path='/sign-up' element={<Form />} />
		<Route path='/users' element={<UserList />} />
	</Routes>
	</Router>
);
}

export default App;
