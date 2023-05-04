import demonSlayer from "../assets/images/covers/demonslayer.webp";
import dragonBall from "../assets/images/covers/dragonballbroly.jpg";
import naruto from "../assets/images/covers/naruto.webp";
import onePiece from "../assets/images/covers/onepiecefilmred.webp";
import silentVoice from "../assets/images/covers/silentvoice.jpg";
import spiritedAway from "../assets/images/covers/spiritedaway.jpg";
import totoro from "../assets/images/covers/totoro.jpg";
import weatheringWithYou from "../assets/images/covers/weatheringwithyou.jpg";
import yourName from "../assets/images/covers/yourname.jpg";

const Categories = () => {
    return(
        <div className="Categories container">
            <div className="CategoriesContainer row">
                <div className="categoriesList col-md-2">
                    <ul>
                        <li>Action</li>
                        <li>Adventure</li>
                        <li>Animated</li>
                        <li>Anime</li>
                        <li>Comedy</li>
                        <li>Documentary</li>
                        <li>Drama</li>
                        <li>Horror</li>
                        <li>Mystery</li>
                        <li>Romance</li>
                        <li>Thriller</li>
                        <li>Other</li>
                        <li>other</li>
                    </ul>
                </div>
                <div className="categoriesResults col-md-10">
                    <div className="categoriesResultsContainer">
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
        </div>
    );
}

export default Categories;