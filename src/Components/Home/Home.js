import Header from "../Header/Header.js"
import StandardCard from "../Card/Card.js";
import "./Home.scss";

const Home = () => {
    const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
    
    return (
        <>
            {isMobile && <h1 className="err">Please view the site on a desktop device. Mobile version hasn't been implemented yet.</h1>}
            {!isMobile && 
            <>
            <Header />
            <div className="cardList">
                <StandardCard imageLink="/assets/images/LawDepot/LawDepot-Homepage.jpg" title="LawDepot" description="Online legal document service provider; Provide mechanism for user to create legal documents" isLink="false" goTo="/lawdepot" />
                <StandardCard imageLink="/assets/images/Cycle.jpg" title="Cyclic Sequences" description="Paper exploring properties of cyclic sequences including Distances, Occurances and Prediction" isLink="true" goTo="/assets/papers/Cyclic-Sequences.pdf" />
            </div>
            </>
            }

        </>
    )
}

export default Home;