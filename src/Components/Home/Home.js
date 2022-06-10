import Header from "../Header/Header.js"
import StandardCard from "../Card/Card.js";
import "./Home.scss";

const Home = () => {
    return (
        <>
            <Header />
            <div className="cardList">
                <StandardCard imageLink="/assets/images/LawDepot/LawDepot-Homepage.jpg" title="LawDepot" description="Online legal document service provider; Provide mechanism for user to create legal documents" isLink="false" goTo="/lawdepot" />
                <StandardCard imageLink="/assets/images/Cycle.jpg" title="Cyclic Sequences" description="Paper exploring properties of cyclic sequences including Distances, Occurances and Prediction" isLink="true" goTo="/assets/papers/Cyclic-Sequences.pdf" />
                <StandardCard imageLink="/assets/images/Algorithms.jpg" title="Algorithms" description="Select Algorithms, Data-Structures and Problems from the book Introduction to Algorithms" isLink="false" goTo="/" />
            </div>

        </>
    )
}

export default Home;