import {HStack, VStack} from "native-base";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
    return (
        <VStack>
            {
                props.data.map((movie, index) => {
                    if(index % 2 === 0) {
                        return (
                            <HStack key={index}>
                                <MovieCard key={index} data={movie}></MovieCard>
                                <MovieCard key={index + 1} data={props.data[index + 1]}></MovieCard>
                            </HStack>
                        );
                    }
                })
            }
        </VStack>
    );
}

export default MovieList;