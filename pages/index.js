import { useRouter } from 'next/router';
import Layout from '../components/Layout.js';
import './style.css';

const Content = () => {
  const router = useRouter();
  return (
    <>
      <h1>{router.query.title}</h1>
      <p>This is the blog post contensdasdawsdet.</p>
    </>
  );
};

const Page = () => (
  <Layout>
    <Content />
  </Layout>
);

export default Page;