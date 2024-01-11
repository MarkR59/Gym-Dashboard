const Header = ({ name }) => {
  return (
    <div>
      <header className="header">
        <h1>Welcome back{ name ? `, ${name}` : '' }!</h1>
      </header>
    </div>
  );
};

export default Header;