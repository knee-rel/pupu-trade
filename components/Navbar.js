import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const isActive = (r) => {
    if (r === router.pathname) {
      return "active";
    } else {
      return "";
    }
  };

  const category = [
    { link: "food", menuName: "Food" },
    { link: "fashion", menuName: "Fashion" },
    { link: "toys", menuName: "Toys" },
    { link: "home-decor", menuName: "Home Decoration" },
  ];
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <Link href="/">
        <a className="navbar-brand">PUPU Trade</a>
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link href="/">
              <a className={"nav-link" + isActive("/")}>
                Home <span className="sr-only">(current)</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/feed">
              <a className={"nav-link" + isActive("/feed")}>Feed</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/groups">
              <a className={"nav-link" + isActive("/groups")}>Groups</a>
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link href="/">
              <a
                className={"nav-link dropdown-toggle" + isActive("/categories")}
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Categories
              </a>
            </Link>

            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              {category.map((value, key) => {
                return (
                  <div key={key}>
                    <Link
                      href={{
                        pathname: `/categories/${value.link}`,
                        query: { cat: value.menuName },
                      }}
                    >
                      <a className="dropdown-item">{value.menuName}</a>
                    </Link>
                  </div>
                );
              })}
            </div>
          </li>
        </ul>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/cart">
                <a className={"nav-link" + isActive("/cart")}>
                  <i className="fas fa-shopping-cart"></i>Cart
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/login">
                <a className={"nav-link" + isActive("/login")}>Login</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/signup">
                <a className={"nav-link" + isActive("/signup")}>Sign Up</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

{
  /* <div>
        <li className="nav-item">
          <Link href="/login">
            <a className={"nav-link" + isActive("/login")}>Login</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/signup">
            <a className={"nav-link" + isActive("/signup")}>Sign Up</a>
          </Link>
        </li>
      </div> */
}
