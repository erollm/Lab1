import onepeiecename from '../assets/images/covers/onepiecefilmredname.png';
import {ReactComponent as PlayButton} from '../assets/icons/play_button.svg';
import {ReactComponent as AddLibrary} from '../assets/icons/add_to_library.svg';
import {ReactComponent as Add} from '../assets/icons/add.svg';
import {ReactComponent as Imdb} from '../assets/icons/imdb_logo.svg';

const MoviePage = () =>{
    const styles = {
        body: {
            backgroundColor: "red",
        },
    };
    return(
        <div className="MoviePageBg">
            <div className="MoviePageBgShadow">
                <div className="MoviePage">
                    <div className="MoviePageContainer">
                        <img src={onepeiecename} alt=""/>
                        <ul className="MoviePageContainerInfo">
                            <li>120 min</li>
                            <li>2022</li>
                            <li><Imdb className="MoviePageImdbSvg"/> 9.9</li>
                        </ul>
                        <ul className="MoviePageContainerCategories">
                            <li>Anime</li>
                            <li className="MoviePageContainerCategoriesDivider">|</li>
                            <li>Adventure</li>
                            <li className="MoviePageContainerCategoriesDivider">|</li>
                            <li>Action</li>
                        </ul>
                        <p className="MoviePageDescription">For the first time ever, Uta - the most beloved singer in the world - will reveal herself to the world at a live concert.
                            The voice that the whole world has been waiting for is about to resound.</p>
                        <div className="MoviePageButtons">
                            <button><PlayButton className="MoviePagePlayButton"/>Play</button>
                            <button><PlayButton className="MoviePagePlayButton"/>Watch Trailer</button>
                            <button><Add className="MoviePagePlayButton"/>Add to Library</button>
                            <button><AddLibrary className="MoviePagePlayButton"/>Add to Watch Later</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MoviePage;