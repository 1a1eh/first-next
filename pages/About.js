import Layout from '../components/Layout';
import Link from 'next/link';
// import fetch from 'isomorphic-unfetch';
import axios from 'axios';

class About extends React.Component {
	state = {
		todos: []
	};
	componentDidMount() {
		this.laleh();
	}
	laleh = async () => {
		const res = await axios('https://jsonplaceholder.typicode.com/todos');
		// const data = await res.json();

		// console.log(`Show data fetched. Count: ${data.length}`);
		this.setState({ todos: res.data });
		console.log(this.state);

		// return {
		//   shows: data.map(entry => entry.show)
		// };
	};
	render() {
		return (
			<Layout>
				<h1>Batman TV Shows</h1>
				<ul>
					{this.state.todos.map((item) => (
						<li key={item.id}>
							<Link href="/todos/[id]" as={`/todos/${item.id}`}>
								<a>{item.title}</a>
							</Link>
						</li>
					))}
				</ul>
			</Layout>
		);
	}
}

export default About;
