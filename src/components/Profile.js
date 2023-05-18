import demonSlayer from '../assets/images/covers/demonslayer.webp';
import dragonBall from '../assets/images/covers/dragonballbroly.jpg';
import naruto from '../assets/images/covers/naruto.webp';
import onePiece from '../assets/images/covers/onepiecefilmred.webp';
import silentVoice from '../assets/images/covers/silentvoice.jpg';
import spiritedAway from '../assets/images/covers/spiritedaway.jpg';
import totoro from '../assets/images/covers/totoro.jpg';
import weatheringWithYou from '../assets/images/covers/weatheringwithyou.jpg';
import yourName from '../assets/images/covers/yourname.jpg';

const Profile = () =>{
    return(
        <div className="profile container ">
            <div className="profileContainer row">
                <div className="profilePersonalInfo col-lg-4">
                    <div className="profilePersonalInfoImg">
                        <span className="material-symbols-outlined">account_circle</span>
                    </div>
                    <div className="profilePersonalInfoName">
                        <h2>Tanjiro Kamado</h2>
                        <h3>@tanjirokamado</h3>
                        <a href="#">Edit</a>
                    </div>
                </div>
                <div className="profileWatched col-lg-8">
                    <h1>Watched</h1>
                    <div className="profileWatchedMovies">
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

export default Profile;