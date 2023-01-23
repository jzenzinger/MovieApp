import {Container, ScrollView, Stack, Text} from "native-base";
import MovieList from "./components/MovieList";
import {useState, useEffect} from "react";
import {AsyncStorage} from "react-native";

const FavouritesView = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const prevData =  AsyncStorage.getItem(`${process.env.STORAGE_KEY}`);
        const jsonData = JSON.parse(prevData);
        if (jsonData.length !== 0) {
            setMovies(jsonData);
            setLoading(false);
        } else {
            setLoading(true);
        }
    });

    return (
        <Container>
            <Text marginTop="5" marginLeft="5" fontSize="xl" _light={{
                color: "indigo.600"
            }} _dark={{
                color: "indigo.400"
            }} fontWeight="700">
                Favourites Movies/Series
            </Text>
            <ScrollView margin="2%">
                {isLoading
                    ? <Text marginTop="50%" alignSelf="center">No movies added to favourite list yet.</Text>
                    : <Stack alignSelf="center" maxWidth="95%" paddingBottom="17%">
                        <MovieList data={movies}/>
                    </Stack>
                }
            </ScrollView>
        </Container>
    );
}

export default FavouritesView;