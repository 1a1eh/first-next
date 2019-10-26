import Layout from '../../components/MyLayout';
// import fetch from 'isomorphic-unfetch';
import axios from 'axios';

const Todos = props => (
  <Layout>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
    <img src={props.show.image.medium} />
  </Layout>
);

Todos.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await axios.post(`https://jsonplaceholder.typicode.com/todos/${id}`);
  // const show = await res.json();

  console.log(res);

  // return { show };
};

export default Todos;