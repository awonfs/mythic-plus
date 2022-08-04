import { useState } from "react";
import "./Affix.css";

const Affix = () => {
  const [affix, setAffix] = useState([{}]);
  const [showButton, setShowButton] = useState(true);

  const getAffix = () => {
    fetch(`https://raider.io/api/v1/mythic-plus/affixes?region=eu&locale=en`)
      .then((response) => response.json())
      .then((data) => {
        setAffix(data);
        setShowButton(false);
      });
  };

  return (
    <div className="affix-container">
      {showButton === true ? (
        <button className="affix-btn" onClick={getAffix}>
          Find out
        </button>
      ) : (
        <></>
      )}

      <div className="affix-name">
        <p>{affix.title}</p>
      </div>
    </div>
  );
};

export default Affix;
