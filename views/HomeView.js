import {Center, Text, Box} from "native-base";
import {StyleSheet} from "react-native";


const HomeView = () => {
    return (
        <Box height="100%" width="100%">
            <Center w="100%" h="40%" bg="indigo.700" elevation={20}>
                <Text fontSize="5xl" style={styles.heading}>Welcome back!</Text>
                <Text fontSize="xl" marginTop="5" style={styles.heading}>Ready to search favourites {"\n"}movies/series again?</Text>
            </Center>
            <Box marginLeft="10" marginRight="10">
                <Text fontSize="md" marginTop="15%" style={styles.text}>This application was created with React-Native
                    and UI library called Native-Base.</Text>
                <Text fontSize="md" marginTop="2" style={styles.text}>Application is supposed to be for passing school
                    project, exam called Mobile Technology for Android.</Text>
                <Text fontSize="md" marginTop="2" style={styles.text}>Tech Stack:</Text>
                <Text fontSize="md" marginLeft="10" style={styles.text}>- React-Native</Text>
                <Text fontSize="md" marginLeft="10" style={styles.text}>- Native-Base</Text>
                <Text fontSize="md" marginLeft="10" style={styles.text}>- OMDB API</Text>
            </Box>
        </Box>
    );
}

const styles = StyleSheet.create({
    heading: {
        textAlign: "center",
        alignItems: "center",
        fontWeight: "800",
        color: "white"
    },
    text: {
        textAlign: "left",
        alignItems: "center",
        fontWeight: "400",
        color: "black"
    }
});

export default HomeView;