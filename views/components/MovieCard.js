import {
    HStack,
    Box,
    Heading,
    Stack,
    Center,
    Image,
    AspectRatio,
    Text
} from "native-base";


const MovieCard = (props) => {
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
                    <Center bg="violet.600" _dark={{
                        bg: "violet.400"
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
                            color: "violet.600"
                        }} _dark={{
                            color: "violet.400"
                        }} fontWeight="500" ml="-0.5" mt="-1">
                            {props.data.Genre}
                        </Text>
                    </Stack>
                </Stack>
                <HStack space="3" px="4" pb="4">
                    <Text fontSize="xs" _light={{color: "violet.600"}} _dark={{color: "violet.400"}}>
                        Find out more
                    </Text>
                </HStack>
            </Box>
        </Box>
    );
}

export default MovieCard;