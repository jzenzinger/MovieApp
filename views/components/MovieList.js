import { Box } from "native-base";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
    return (
        <Box>
            {
                props.data.length === 0 ?
                    console.error("Props.data is empty or not array")
                    : props.data.map((movie, index) => {
                        return <MovieCard key={index} data={movie}></MovieCard>
                    })
            }
        </Box>
    );
}

export default MovieList;