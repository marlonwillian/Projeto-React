import styles from "./SearchGames.module.css";
import Container from "../Container";
import GameList from "../GameList/index.jsx";

function SearchGames() {
    return (
        <Container>
            <GameList/>
        </Container>
    );
}

export default SearchGames;