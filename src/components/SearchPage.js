import demonSlayer from "../assets/images/covers/demonslayer.webp";
import dragonBall from "../assets/images/covers/dragonballbroly.jpg";
import naruto from "../assets/images/covers/naruto.webp";
import onePiece from "../assets/images/covers/onepiecefilmred.webp";
import silentVoice from "../assets/images/covers/silentvoice.jpg";
import spiritedAway from "../assets/images/covers/spiritedaway.jpg";
import totoro from "../assets/images/covers/totoro.jpg";
import weatheringWithYou from "../assets/images/covers/weatheringwithyou.jpg";
import yourName from "../assets/images/covers/yourname.jpg";

function SearchPage() {
  return (
      <div className="searchPage">
        <div className="searchPageContainer">
          <div className="searchPageTitle">
            <h2>Results for:</h2>
          </div>
          <div className="searchPageResults">
            <img src={demonSlayer} alt=""/>
            <img src={dragonBall} alt=""/>
            <img src={naruto} alt=""/>
            <img src={onePiece} alt=""/>
            <img src={silentVoice} alt=""/>
            <img src={spiritedAway} alt=""/>
            <img src={totoro} alt=""/>
            <img src={weatheringWithYou} alt=""/>
            <img src={yourName} alt=""/>
          </div>
        </div>
      </div>
  );
}
export default SearchPage;
