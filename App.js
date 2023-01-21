import {useState} from 'react';
import axios from 'axios';
import {Box, Button, NativeBaseProvider, ScrollView, HStack, Stack, Input} from 'native-base';
// Components imports
import Footer from "./views/components/Footer";
import MovieCard from "./views/components/MovieCard";
import {ActivityIndicator} from "react-native";

const App = () => {
    const [isLoading, setLoading] = useState(true);
    const [movieTitle, setMovieTitle] = useState("");
    const [data, setData] = useState([]);

    const getMoviesFromAPI = async (title) => {
        try {
            const response = await axios.get(`https://www.omdbapi.com/?apikey=${process.env.API_KEY}&t=${title}`);
            setData(response.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <NativeBaseProvider borderRadius="md" width="100%">
            <Input alignSelf="center" marginTop="5" height="10" type="text" w="90%" py="0"
                   onChangeText={v => setMovieTitle(v)} value={movieTitle}
                   InputRightElement={
                <Button size="s" rounded="none" w="1/5" h="full" onPress={getMoviesFromAPI(movieTitle)} >
                    Search
                </Button>} placeholder="Movie name"
            />
            <ScrollView margin="2%">
                {isLoading ? <ActivityIndicator/> : (
                    <Stack>
                        <HStack justifyContent="space-between">
                            <MovieCard data={data}/>
                            <MovieCard data={data}/>
                        </HStack>
                    </Stack>
                )}
            </ScrollView>
            <Box safeAreaTop width="95%" alignSelf="center" marginBottom="2%">
                <Footer/>
            </Box>
        </NativeBaseProvider>);
}

export default App;
