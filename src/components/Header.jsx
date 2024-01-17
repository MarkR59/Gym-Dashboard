const Header = ({ name }) => {
  return (
    <div>
      <header className="header">
        <h1>Fitness Dashboard</h1>
        <h4>Welcome back{ name ? `, ${name}` : '' }!</h4>
      </header>
    </div>
  );
};

export default Header;