import React from "react";
import "./footerright.css";
import instagram from "./../../../img/instagram.png";
import Twitter from "./../../../img/twitter.png";
import Telegram from "./../../../img/telegram.png";
import Discord from "./../../../img/discord.png";
function footerright() {
  return (
    <div className="confootright">
      <a href="">
        <img src={instagram} alt="" />
      </a>
      <a href="">
        <img src={Twitter} alt="" />
      </a>
      <a href="">
        <img src={Telegram} alt="" />
      </a>
      <a href="">
        <img src={Discord} alt="" />
      </a>
    </div>
  );
}
export default footerright;
