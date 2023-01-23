import {
    AspectRatio,
    Box,
    Button,
    Center,
    FavouriteIcon,
    Heading,
    HStack,
    Icon,
    Image,
    InfoIcon,
    Stack,
    Text
} from "native-base";
import React, {useState} from "react";
import axios from "axios";
import MovieModal from "./MovieModal";


const MovieCard = (props) => {
    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const capitalizeFirst = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const getMovieInfo = async (movieID) => {
        try {
            const response = await axios.get(`https://www.omdbapi.com/?apikey=${process.env.API_KEY}&i=${movieID}`);
            setData(response.data);
        } catch (error) {
            console.error(error);
        }
        setShowModal(true);
    }

    return (
        <Box width="50%" alignItems="center" padding="1">
            <Box rounded="lg" overflow="hidden" borderColor="coolGray.300" borderWidth="1" _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700"
            }} _web={{
                shadow: 2,
                borderWidth: 0
            }} _light={{
                backgroundColor: "gray.50"
            }}>
                <Box>
                    <AspectRatio w="100%" ratio={16 / 9}>
                        <Image source={{
                            uri: props.data.Poster
                        }} alt="image"/>
                    </AspectRatio>
                    <Center bg="indigo.600" _dark={{
                        bg: "indigo.400"
                    }} _text={{
                        color: "warmGray.50",
                        fontWeight: "700",
                        fontSize: "xs"
                    }} position="absolute" bottom="0" px="3" py="1.5">
                        {props.data.Year}
                    </Center>
                </Box>
                <Stack p="4" space={3}>
                    <Stack space={2}>
                        <Heading size="md" ml="-1">
                            {props.data.Title}
                        </Heading>
                        <Text fontSize="xs" _light={{
                            color: "indigo.600"
                        }} _dark={{
                            color: "indigo.400"
                        }} fontWeight="500" ml="-0.5" mt="-1">
                            {capitalizeFirst(props.data.Type)}
                        </Text>
                    </Stack>
                </Stack>
                <HStack space="3" px="3" pb="4" alignItems="center" justifyContent="space-between">
                    <Button size="xs" fontWeight="800" variant="outline" _text={{color: "indigo.600"}}
                            onPress={() => getMovieInfo(props.data.imdbID)}
                    >
                        <HStack>
                            <Icon fontSize="xs"  marginTop="0.5" marginRight="1">
                                <InfoIcon style={{color: "rgb(94,0,255)"}}></InfoIcon>
                            </Icon>
                            <Text fontSize="xs" color="indigo.600">Find out more</Text>
                        </HStack>
                    </Button>
                    <Icon>
                        <FavouriteIcon olor="indigo.600"></FavouriteIcon>
                    </Icon>
                </HStack>
            </Box>
            <MovieModal movie={data} handleShowModal={() => setShowModal(!showModal)} showModal={showModal}/>
        </Box>
    );
}

export default MovieCard;