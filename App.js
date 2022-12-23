import {useEffect, useState} from 'react';
import {Text, FlatList, ActivityIndicator} from 'react-native';
import axios from "axios";
import { NativeBaseProvider, Box, VStack } from "native-base";
// Components imports
import Footer from "./views/Footer";

const API = process.env.API_URL;

const App = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getMoviesFromAPI = async () => {
        try {
            const url = `${API}&t=mission`;
            const response = await axios.get(url);
            setData(response);
        } catch (error) {
            console.error(error);
            console.log(API);
        // }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getMoviesFromAPI();
    }, []);

    return (
        <NativeBaseProvider width="100%">
            <VStack height="90%">
                {isLoading ? <ActivityIndicator/> : (
                    <FlatList
                        data={data}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <Text>{item.title}, {item.year}, {item.genre}</Text>
                        )}
                    />
                )}
            </VStack>
            <Box safeAreaTop width="95%" alignSelf="center">
                <Footer/>
            </Box>
        </NativeBaseProvider>
    );
}

export default App;
