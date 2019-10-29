import Header from './Header';

const layoutStyle = {
  margin: '80px auto',
  width: 1000,
  padding: 60,
  border: '4px #742090 dotted'
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);

export default Layout;