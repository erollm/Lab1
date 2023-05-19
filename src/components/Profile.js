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
                        <h2></h2>
                        <div className="profileEditForm">
                            <form action="">
                                <div className="profileEditPrsInfo">
                                    <div>
                                        <label htmlFor="first_name">Your First Name:</label>
                                        <input type="text" id="first_name"/>
                                        <label htmlFor="last_name">Your Last Name:</label>
                                        <input type="text" id="last_name"/>
                                    </div>
                                    <label htmlFor="username"></label>
                                    <input type="text" id="username"/>
                                    <label htmlFor="email"></label>
                                    <input type="text" id="email"/>
                                </div>
                                <div className="profileEditPwd">
                                    <label htmlFor="old_pwd"></label>
                                    <input type="text" id="old_pwd"/>
                                    <label htmlFor="new_pwd"></label>
                                    <input type="text" id="new_pwd"/>
                                    <label htmlFor="confirm_new_pwd"></label>
                                    <input type="text" id="confirm_new_pwd"/>
                                </div>
                            </form>
                        </div>
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
