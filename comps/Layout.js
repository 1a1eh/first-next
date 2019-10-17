import React from 'react';
import Nav from '../comps/nav';

const Layout = (props) => {
	return (
		<div>
			<Nav />
			{props.children}
		</div>
	);
};

export default Layout;
