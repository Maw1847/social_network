import React from "react";
import "./initial.css";
import init from '../../img/init.jpg'

const Initial = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Bienvenue sur Caminuevas</h3>
          <br />
          <img src={init} alt="" height={500} width={500}  />
          <br />
          <span className="loginDesc">
            Le réseau social qui vous ouvre les portes d'un nouveau monde
          </span>
         
        </div>
        <div className="loginRight">
            <button className="loginButton" type="submit">
                <a href="/register">S'inscrire</a>
            </button>
            <br /><br />
            <button className="loginRegisterButton">
                <a href="/login">Se connecter</a>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Initial;
