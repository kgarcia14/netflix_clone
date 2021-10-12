import "../styles.css";

const Navbar = () => {
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".nav-container");

    navbar.classList.toggle("dark-nav", window.scrollY > 0);
  });

  return (
    <div className="nav-container">
      <div className="logo-list">
        <div className="logo-wrapper">
          <img
            className="logo"
            src="../../../images/chill_logo.png"
            alt="chill logo"
          ></img>
        </div>
        <ul className="list-wrapper">
          <li className="list-item">Home</li>
          <li className="list-item">TV Shows</li>
          <li className="list-item">Movies</li>
          <li className="list-item">New & Popular</li>
          <li className="list-item"></li>
        </ul>
      </div>
      <div className="profile">
        <i className="fas fa-search"></i>
        <i className="fas fa-bell"></i>
        <img
          className="profile-avatar"
          src="../../../images/profile_avatar.png"
          alt="profile avatar"
        ></img>
      </div>
    </div>
  );
};

export default Navbar;
