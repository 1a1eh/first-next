import Header from './Header';

const layoutStyle = {
  margin: '80px auto',
  width: 1000,
  padding: 20,
  border: '1px black solid'
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);

export default Layout;