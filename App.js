import {useState} from 'react';
import { Box, NativeBaseProvider} from 'native-base';
// Components imports
import Footer from "./views/components/Footer";
import SearchView from "./views/SearchView";
import FavouritesView from "./views/FavouritesView";
import HomeView from "./views/HomeView";

const App = () => {
    const [selected, setSelected] = useState(0);

    const handleViewChange = (value) => {
        setSelected(value);
    }

    return (
        <NativeBaseProvider borderRadius="md" width="100%">
            {selected === 0 && <HomeView />}
            {selected === 1 && <SearchView/>}
            {selected === 2 && <FavouritesView />}
            <Box safeAreaTop width="95%" alignSelf="center" marginBottom="2%" position="absolute" bottom="0">
                <Footer selected={selected} onSelection={handleViewChange}/>
            </Box>
        </NativeBaseProvider>
    );
}

export default App;
