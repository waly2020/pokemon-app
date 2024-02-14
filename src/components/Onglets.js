import React, { useState } from "react";
import "../sass/components/onglets.scss";
import Container from "./Container";
/**
 *
 * @param {{onglets : [{title : string,content : React.JSX.Element}]}} param0
 * @returns
 */
const Onglets = ({ onglets }) => {
    const [currentOnglet,setCureentOnglet] = useState(0);
    const displayOnglet = (index) =>{
        setCureentOnglet(index);
    }
  return (
    <div className="onglets">
      <Container className="onglet-titles">
        {onglets.map((onglet, key, _) => (
          <button key={key} className={`${currentOnglet === key ? 'active' : ''}`} onClick={() =>{displayOnglet(key)}}>{onglet.title}</button>
        ))}
      </Container>
      {onglets.map((onglet, key, _) => (
        <div key={key} className={`onglet-content ${currentOnglet === key ? 'active' : ''}`}>
          {onglet.content}
        </div>
      ))}
    </div>
  );
};

export default Onglets;
