import Popup from 'reactjs-popup';
import demonSlayer from "../assets/images/covers/demonslayer.webp";
import dragonBall from "../assets/images/covers/dragonballbroly.jpg";
import naruto from "../assets/images/covers/naruto.webp";
import onePiece from "../assets/images/covers/onepiecefilmred.webp";
import silentVoice from "../assets/images/covers/silentvoice.jpg";
import spiritedAway from "../assets/images/covers/spiritedaway.jpg";
import totoro from "../assets/images/covers/totoro.jpg";
import weatheringWithYou from "../assets/images/covers/weatheringwithyou.jpg";
import yourName from "../assets/images/covers/yourname.jpg";
// import {useState} from "@types/react";
import { useState } from "react";
import {ReactComponent as BookmarkIcon} from "../assets/icons/bookmark.svg";

const Profile = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="profile container ">
      <div className="profileContainer row">
        <div className="profilePersonalInfo col-lg-4">
          <div className="profilePersonalInfoImg">
            <span className="material-symbols-outlined">account_circle</span>
          </div>
          <div className="profilePersonalInfoName">
            <h2>Tanjiro Kamado</h2>
            <h3>@tanjirokamado</h3>
            <Popup trigger={<button> Edit</button>} position="right center">
                <div className="profileEditPopup">
                    <div className="profileEditPopupContainer">
                        <div className="prilfeEditPopupTitle">
                            <h2>Edit personal info</h2>
                        </div>
                        <form action="">
                            <div className="profileEditForm row">
                                <div className="profileEditPrsInfo col-lg-6">
                                    <div className="d-flex">
                                        <div>
                                            <label htmlFor="first_name">Your first name:</label>
                                            <input type="text" id="first_name" placeholder="Tanjiro"/>
                                        </div>
                                        <div>
                                            <label htmlFor="last_name">Your last name:</label>
                                            <input type="text" id="last_name" placeholder="Kamado"/>
                                        </div>
                                    </div>
                                    <label htmlFor="username">Your username:</label>
                                    <input type="text" id="username" placeholder="tanjirokamado_"/>
                                    <label htmlFor="email">Your email:</label>
                                    <input type="text" id="email" placeholder="tanjiro@gmail.com"/>
                                </div>
                                <div className="profileEditPwd col-lg-6">
                                    <label htmlFor="old_pwd">Your old password:</label>
                                    <input type="text" id="old_pwd" placeholder="Old password"/>
                                    <label htmlFor="new_pwd">Your new password:</label>
                                    <input type="text" id="new_pwd" placeholder="New password"/>
                                    <label htmlFor="confirm_new_pwd">Confirm your new password:</label>
                                    <input type="text" id="confirm_new_pwd" placeholder="Confirm new password"/>
                                </div>
                            </div>
                        </form>
                        <button>Edit</button>

                    </div>
                </div>
            </Popup>
          </div>
        </div>
        <div className="profileActivities col-lg-8">
          <div className="bloc-tabs">
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              Watched
            </button>
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              Continue Watching
            </button>
          </div>
          <div className="content-tabs">
            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }
            >
              <div className="profileWatchedMovies">
                <img src={dragonBall} alt="" />
                <img src={naruto} alt="" />
                <img src={onePiece} alt="" />
                <img src={silentVoice} alt="" />
                <img src={totoro} alt="" />
                <img src={weatheringWithYou} alt="" />
                <img src={yourName} alt="" />
              </div>
            </div>
            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }
            >
              <div className="profileWatchedContinue">
                <img src={demonSlayer} alt="" />
                <img src={spiritedAway} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
