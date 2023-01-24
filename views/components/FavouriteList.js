import {Avatar, Box, Button, HStack, Text, VStack, FlatList, Icon, InfoIcon} from "native-base";

const FavouriteList = (props) => {

    const capitalizeFirst = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <FlatList data={props.data} renderItem={({item}) => <Box borderBottomWidth="1" _dark={{
            borderColor: "muted.50"
        }} borderColor="muted.200" pl={["2", "2"]} pr={["2", "0"]} py="2">
            <HStack>
                <Avatar size="20" source={{
                    uri: item.Poster
                }} />
                <VStack marginLeft="5" justifyContent="space-between" width="70%">
                    <Text _dark={{
                        color: "warmGray.50"
                    }} color="coolGray.800" bold>
                        {item.Title}
                    </Text>
                    <HStack>
                        <Text color="coolGray.600" _dark={{
                            color: "warmGray.200"
                        }}>
                            {capitalizeFirst(item.Type)} -
                        </Text>
                        <Text color="coolGray.600" _dark={{
                            color: "warmGray.200"
                        }}>
                            {item.Genre}
                        </Text>
                    </HStack>
                    <HStack marginTop="1" alignItems="center" justifyContent="space-between">
                        <Button size="xs" fontWeight="800" variant="outline" _text={{color: "indigo.600"}}
                                onPress={() => {
                                    props.handleMovieModal(item);
                                    props.showModal(true);
                                }}>
                            <HStack>
                                <Icon fontSize="xs"  marginTop="0.5" marginRight="1">
                                    <InfoIcon style={{color: "rgb(94,0,255)"}}></InfoIcon>
                                </Icon>
                                <Text fontSize="xs" color="indigo.600">Details</Text>
                            </HStack>
                        </Button>
                        <Button fontSize="xs" variant="link" _text={{color: "danger.600"}} onPress={() => props.handleDelete(item)}>
                            Delete
                        </Button>
                    </HStack>
                </VStack>
            </HStack>
        </Box>} keyExtractor={item => item.imdbID}/>
    );
}

export default FavouriteList;