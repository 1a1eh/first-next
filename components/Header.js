import Link from 'next/link';

const linkStyle = {
  marginRight: 30,
  textDecoration: "none",
  color: "black"
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
);

export default Header;