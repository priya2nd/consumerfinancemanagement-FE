import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/login' activeStyle>
			Login
		</NavLink>
		
		<NavLink to='/sign-up' activeStyle>
			Register
		</NavLink>
		<NavLink to='/users' activeStyle>
			Users
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		{/* <NavBtn>
		<NavBtnLink to='/signin'>Log In</NavBtnLink>
		</NavBtn> */}
	</Nav>
	</>
);
};

export default Navbar;
