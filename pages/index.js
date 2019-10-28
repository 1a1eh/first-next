import React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/MyLayout';
import './style.css';

function Index(props) {
	return (
		<Layout>
			<div>
        <h2>List</h2>
				<ul>
					{props.items.map((item) => (
						<li key={item.id}>
							<Link href="/p/[id]" as={`/p/${item.id}`}>
								<a>{item.title}</a>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</Layout>
	);
}

Index.getInitialProps = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/todos');
	const json = await res.json(); // better use it inside try .. catch
	return { items: json };
};

export default Index;
