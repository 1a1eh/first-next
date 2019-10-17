import React from 'react';
import Link from 'next/link';

const links = [
	{ href: 'https://localhost:3000', label: 'ZEIT' },
	{ href: 'https://github.com/zeit/next.js', label: 'GitHub' }
].map((link) => {
	link.key = `nav-link-${link.href}-${link.label}`;
	return link;
});

const Nav = () => (
	<nav>
		<ul>
			<li>
				<Link href="/">
					<a>Home</a>
				</Link>
			</li>
			<li>
				<Link href="/about">
					<a>About</a>
				</Link>
			</li>
      <li>
				<Link href="/contact">
					<a>Contact</a>
				</Link>
			</li>
      <li>
				<Link href="/support">
					<a>Support</a>
				</Link>
			</li>
			{/* {links.map(({ key, href, label }) => (
				<li key={key}>
					<a href={href}>{label}</a>
				</li>
			))} */}
		</ul>

		<style jsx>{`
			:global(body) {
				margin: 0;
				font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
			}
			nav {
        text-align: center;
        background-color: black;
			}
			ul {
				display: flex;
				justify-content: flex-start;
			}
			nav > ul {
				padding: 4px 16px;
			}
			li {
				display: flex;
				padding: 6px 30px;
			}
			a {
				color: #fff;
				text-decoration: none;
				font-size: 18px;
			}
		`}</style>
	</nav>
);

export default Nav;
