import "./App.css";
import {
  ArrowIcon,
  BellIcon,
  BoltIcon,
  CaretIcon,
  CogIcon,
  ChevronIcon,
  MessengerIcon,
  PlusIcon,
} from "./icons/imports";
import { useEffect, useState } from "react";
function App() {
  return (
    <Navbar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />
      <NavItem icon={<CaretIcon />}>
        <p>Home text</p>
      </NavItem>
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item" onClick={() => setOpen(!open)}>
      <a href="#" className="icon-button">
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
}

export default App;
