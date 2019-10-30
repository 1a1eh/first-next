import Layout from '../../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import '../style.css';

class Post extends React.Component {
	
	static async getInitialProps(context) {
		const { id } = context.query;
		const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
		const show = await res.json();

		return { show };
	};

	render() {
		const { show } = this.props;
		return (
			<Layout>
				<i className="green">ID: (( {show.id} ))</i>
				<p>{show.title}</p>
			</Layout>
		);
	};
};

export default Post;
