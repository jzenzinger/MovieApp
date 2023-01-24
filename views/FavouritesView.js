import {Alert, Stack, Text} from "native-base";
import {useState, useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage/";
import FavouriteList from "./components/FavouriteList";
import MovieModal from "./components/MovieModal";

const FavouritesView = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [movieModal, setMovieModal] = useState({});

    useEffect ( () => {
        async function fetchData() {
            const prevData = await AsyncStorage.getItem(`${process.env.STORAGE_KEY}`);
            if (prevData !== null ) {
                const json = JSON.parse(prevData);
                setMovies(json);
                if(json.length !== 0) {
                    setLoading(!isLoading);
                }
            }
        }
        fetchData();
    }, []);

    const handleModal = (item) => {
        if(item.length !== 0 || true)  {
            setMovieModal(item);
        }
    }

    const deleteMovie = async (movie) => {
        try {
            const prevData = await AsyncStorage.getItem(`${process.env.STORAGE_KEY}`);
            const json = JSON.parse(prevData);
            const movieDeleted = json.filter((e) => {
                return e.imdbID !== movie.imdbID;

            })
            await AsyncStorage.setItem(`${process.env.STORAGE_KEY}`, JSON.stringify(movieDeleted));
            setMovies(movieDeleted);
        }
        catch(e) {
            console.error(e);
        }
    }

    return (
        <Stack>
            <Text marginTop="5" marginLeft="5" fontSize="xl" _light={{
                color: "indigo.600"
            }} _dark={{
                color: "indigo.400"
            }} fontWeight="700">
                Favourite Movies/Series
            </Text>
            {isLoading
                ? <Text marginTop="50%" textAlign="center">No movies added to favourite list yet.</Text>
                : <Stack marginTop="5%" alignSelf="center" height="89%" width="90%" paddingBottom="17%">
                    <FavouriteList data={movies}
                                   showModal={(show) => setShowModal(show)}
                                   handleMovieModal={(item) => handleModal(item)}
                                   handleDelete={(m) => deleteMovie(m)}
                    />
                    {
                        handleModal ?
                            <MovieModal movie={movieModal} handleShowModal={() => setShowModal(!showModal)} showModal={showModal}/>
                            :
                            <Alert>Cant open Modal</Alert>
                    }
                </Stack>
            }
        </Stack>
    );
}

export default FavouritesView;