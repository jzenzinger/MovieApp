import {useState} from 'react';
import axios from 'axios';
import {Box, Container, List, Text, Button} from 'native-base';

// Components imports
import Footer from "./views/Footer";
import {NativeBaseProvider} from "native-base/src/core/NativeBaseProvider";

const App = () => {
    // const [isLoading, setLoading] = useState(true);

    const [data, setData] = useState([]);

    const getMoviesFromAPI = async () => {
        try {
            const response = await axios.get(`https://www.omdbapi.com/?apikey=${process.env.API_KEY}&t=mission`);
            setData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (<NativeBaseProvider width="100%">
            <Button margin={'2%'} onPress={getMoviesFromAPI}>
                <Text>Fetch Data</Text>
            </Button>
            <Container height="80%">
                <List>
                    <Text>{JSON.stringify(data)}</Text>
                </List>
            </Container>
            <Box safeAreaTop width="95%" alignSelf="center">
                <Footer/>
            </Box>
        </NativeBaseProvider>);
}

export default App;
