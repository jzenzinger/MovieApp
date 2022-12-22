import React from 'react';
import {Text} from 'react-native';
import {
    NativeBaseProvider,
    Box,
    VStack
} from "native-base";

// Components imports
import Footer from "./views/Footer";

const App = () => {
    return (
        <NativeBaseProvider width="100%">
            <VStack height="90%">
                <Text>
                    Content
                </Text>
            </VStack>
            <Box safeAreaTop width="95%" alignSelf="center">
                <Footer/>
            </Box>
        </NativeBaseProvider>
    );
}

export default App;
