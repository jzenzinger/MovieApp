import { Center } from "native-base";


const HomeView = () => {
    return (
        <Center w="100%" h="30%" bg="indigo.600" elevation={10} _text={{
            textAlign: 'center',
            alignItems: 'center',
            fontWeight: '800',
            fontSize: '4xl',
            color: 'white'
        }}>
            Welcome back!
        </Center>
    );
}

export default HomeView;