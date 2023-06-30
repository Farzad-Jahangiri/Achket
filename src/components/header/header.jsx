import "./header.css";
import Left from "./left/left";
import Right from "./right/right";
function Header() {
  return (
    <div className="containerheader">
      <Left></Left>
      <Right></Right>
    </div>
  );
}

export default Header;
