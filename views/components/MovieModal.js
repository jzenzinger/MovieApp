import {Modal, Center, Image, Box, Text, Divider} from "native-base";
import {StyleSheet} from "react-native";


const MovieModal = (props) => {
    return (
        <Center>
            <Modal isOpen={props.showModal} onClose={() => props.handleShowModal(false)} _backdrop={{
                _dark: {
                    bg: "coolGray.800"
                },
                bg: "warmGray.800"
            }}>
                <Modal.Content maxH="95%" width="85%">
                    <Modal.CloseButton onPress={() => props.handleShowModal(false)} />
                    <Modal.Header>{props.movie.Title}</Modal.Header>
                    <Modal.Body>
                        <Center>
                            <Image source={{uri: props.movie.Poster}} alt="Movie Poster" size="2xl" />
                            <Center bg="indigo.600" _dark={{
                                bg: "indigo.400"
                            }} _text={{
                                color: "warmGray.50",
                                fontWeight: "700",
                                fontSize: "xs"
                            }} position="absolute" bottom="0" left="10%" px="3" py="1.5">
                                {props.movie.Type}
                            </Center>
                        </Center>
                        <Box margin="4">
                            <Text style={styles.text}><Text marginRi bold>Genre:</Text> {props.movie.Genre}</Text>
                            <Text style={styles.text}><Text marginRi bold>Director:</Text> {props.movie.Director}</Text>
                            <Text style={styles.text}><Text marginRi bold>Actors:</Text> {props.movie.Actors}</Text>
                            <Text style={styles.text}><Text marginRi bold>Released:</Text> {props.movie.Released}</Text>
                            <Divider my="2" _light={{
                                bg: "muted.500"
                            }} _dark={{
                                bg: "muted.50"
                            }} />
                            <Text style={styles.text}><Text marginRi bold></Text> {props.movie.Plot}</Text>
                        </Box>
                    </Modal.Body>
                </Modal.Content>
            </Modal>
        </Center>
    );
}

const styles = StyleSheet.create({
   text: {
       marginTop: 2,
   }
});

export default MovieModal;