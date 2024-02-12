import "./Navbar.css";

const Navbar = () => {

  return (
    <header className="navbar">
      <div className="navbar-rectangle" />
      <button className="autiembrace4">AutiEmbrace</button>
      <div className="frames">
        <div className="connect-frame">
          <div className="learn-rectangle" />
          <button className="learn">Learn</button>
        </div>
        <div className="connect-frame1">
          <div className="connect-rectangle" />
          <button className="learn">Connect</button>
        </div>
        <div className="connect-frame2">
          <div className="play-rectangle" />
          <button className="learn">Play</button>
        </div>
        <div className="connect-frame">
          <div className="relax-rectangle" />
          <button className="relax">Relax</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
