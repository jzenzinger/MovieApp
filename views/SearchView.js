import {useState} from 'react';
import axios from 'axios';
import { Button, NativeBaseProvider, ScrollView, Text, Stack, Input } from 'native-base';
// Components imports
import MovieList from "./components/MovieList";

const SearchView = () => {
    const [isLoading, setLoading] = useState(true);
    const [movieTitle, setMovieTitle] = useState("");
    const [data, setData] = useState([]);

    const getMoviesFromAPI = async (title) => {
        try {
            const response = await axios.get(`https://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${title}`);
            setData(response.data.Search);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <NativeBaseProvider borderRadius="md" width="100%">
            <Text marginTop="5" marginLeft="5" fontSize="xl" _light={{
                color: "indigo.600"
            }} _dark={{
                color: "indigo.400"
            }} fontWeight="700">
                Search Movies/Series
            </Text>
            <Input alignSelf="center" marginTop="5" height="10" type="text" w="90%" py="0"
                   onChangeText={v => setMovieTitle(v)} value={movieTitle}
                   InputRightElement={
                       <Button size="s" rounded="none" w="1/5" h="full" bg="indigo.600"
                               _text={{ fontWeight: 600, letterSpacing: 0.5 }}
                               onPress={() => getMoviesFromAPI(movieTitle)}>
                           Search
                       </Button>} placeholder="Movie/Series name"
            />
            <ScrollView margin="2%">
                {isLoading
                    ? <Text marginTop="50%" alignSelf="center">No movies searched yet.</Text>
                    : <Stack alignSelf="center" maxWidth="95%">
                        <MovieList data={data}/>
                    </Stack>
                }
            </ScrollView>
        </NativeBaseProvider>
    );
}

export default SearchView;
