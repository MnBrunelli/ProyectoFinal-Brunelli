import { Link } from "react-router-dom";
import CartWindget from "./CartWidget";

const ListadoNavBar = () => {
  return (
    <ul className="nav">
      <li className="nav-item fs-4 m-2">
        <Link to="/categoria/argentina"> Argentina </Link>
      </li>
      <li className="nav-item fs-4 m-2">
        <Link to="/categoria/brasil"> Brasil </Link>
      </li>
      <li className="nav-item fs-4 m-2">
        <Link to="/categoria/uruguay"> Uruguay </Link>
      </li>
      <CartWindget />
    </ul>
  );
};

export const NavBar = () => {
  return (
    <header>
      <nav className=" navbar navbar-light bg-danger p-1">
        <Link to="/">
          <img src="/assets/img/logo.jpg" height="50" width="50" alt=""></img>
        </Link>

        <ListadoNavBar />
      </nav>
    </header>
  );
};

export default NavBar;
