import React from "react";
import '../css/section.css';
import Profile from '../img/profile.jpg';

export default function Section({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        {
          title != "Sobre mi"?
            null
          : (<img className="profile" src={Profile}/>)
        }
        <h1>{title}</h1>
        <div>{subtitle}</div>
      </div>
    </div>
  );
}