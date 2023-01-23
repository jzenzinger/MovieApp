import {Text} from "native-base";


const FavouritesView = () => {
    return (
        <Text marginTop="5" marginLeft="5" fontSize="xl" _light={{
            color: "indigo.600"
        }} _dark={{
            color: "indigo.400"
        }} fontWeight="700">
            Favourites Movies/Series
        </Text>
    );
}

export default FavouritesView;