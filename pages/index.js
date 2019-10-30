import React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/MyLayout';
import './style.css';

class Index extends React.Component {

	static async getInitialProps() {
		const res = await fetch('https://jsonplaceholder.typicode.com/todos');
		const json = await res.json(); // better use it inside try .. catch
		return { items: json };
	};

	render() {
		const { items } = this.props;
		return (
			<Layout>
				<div>
					<h2>List</h2>
					<ul>
						{items.map((item) => (
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
	};
};

export default Index;
