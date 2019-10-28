import Layout from '../../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import '../style.css';

const Post = ({show}) => (
	<Layout>
    <h4 className="green">ID: (( {show.id} ))</h4>
		<p>{show.title}</p>
	</Layout>
);

Post.getInitialProps = async function(context) {
	const { id } = context.query;
	const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
	const show = await res.json();

	return { show };
};

export default Post;
