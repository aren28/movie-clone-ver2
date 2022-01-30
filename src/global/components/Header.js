import react from "react";

function Header() {
  return (
    <header className="banner">
      <div className="banner__contents">
        <h1 className="banner__title">Money Heist</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          To carry out the biggest heist in history, a mysterious man called The Professor recruits
          a band of eight robbers who have a single characteristic: n...
        </h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Header;
