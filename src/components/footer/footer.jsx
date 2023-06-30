import React from "react";
import "./footer.css";
import Footerright from "./right/footerright";
import Footerleft from "./left/footerleft";
function footer() {
  return (
    <div className="confooter">
      <Footerleft></Footerleft>
      <Footerright></Footerright>
    </div>
  );
}

export default footer;
