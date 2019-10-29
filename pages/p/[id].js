import Layout from '../../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import '../style.css';

class Post extends React.Component {
	render() {
		return (
			<Layout>
				<i className="green">ID: (( {this.props.show.id} ))</i>
				<p>{this.props.show.title}</p>
			</Layout>
		);
	}
}

Post.getInitialProps = async function(context) {
	const { id } = context.query;
	const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
	const show = await res.json();

	return { show };
};

export default Post;
