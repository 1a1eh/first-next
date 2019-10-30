import Layout from '../../components/MyLayout';
import fetch from 'isomorphic-unfetch';
class Todos extends React.Component {
  
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
				<h1>{show.name}</h1>
				<p>{show.summary.replace(/<[/]?[pb]>/g, '')}</p>
				<img src={show.image.medium} />
			</Layout>
		);
	}
};

export default Todos;
