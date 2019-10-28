import Layout from '../../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

const Post = (props) => (
	<Layout>
		<h1>{props.show.title}</h1>
	</Layout>
);

Post.getInitialProps = async function(context) {
	const { id } = context.query;
	const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
	const show = await res.json();

	return { show };
};

export default Post;
