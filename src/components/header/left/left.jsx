import "./left.css";
import instagram from "./../../../img/logo02.png";
function Left() {
  return (
    <div className="containerleft">
      <nav className="navleft">
        <img src={instagram} alt="" />
        <p className="para">AchKet</p>
      </nav>
    </div>
  );
}
export default Left;
