import React from 'react';
import {Text} from 'react-native';
import {
    Box,
    HStack,
    Pressable,
    Center,
    Icon,
    HamburgerIcon,
    SearchIcon,
    FavouriteIcon
} from "native-base";

const Footer = () => {
    const [selected, setSelected] = React.useState(1);

    return (
        // TODO: Create router with React-Navigation library to navigate between views
        <Box safeAreaTop width="95%" alignSelf="center">
            <HStack bg="indigo.700" alignItems="center" safeAreaBottom style={{borderRadius: 20 }}>
                <Pressable cursor="pointer" opacity={selected === 0 ? 1 : 0.5} py="3" flex={1}
                           onPress={() => setSelected(0)}>
                    <Center>
                        <Icon style={{color: "white", fontSize: 14, marginBottom: 2}}>
                            <HamburgerIcon name="menu" style={{color: "white"}}/>
                        </Icon>
                        <Text style={{color: "white", fontSize: 12}}>
                            Home
                        </Text>
                    </Center>
                </Pressable>
                <Pressable cursor="pointer" opacity={selected === 1 ? 1 : 0.5} py="2" flex={1}
                           onPress={() => setSelected(1)}>
                    <Center>
                        <Icon style={{color: "white", fontSize: 14, marginBottom: 2}}>
                            <SearchIcon name="search" style={{color: "white"}}/>
                        </Icon>
                        <Text style={{color: "white", fontSize: 12}}>
                            Search
                        </Text>
                    </Center>
                </Pressable>
                <Pressable cursor="pointer" opacity={selected === 2 ? 1 : 0.5} py="2" flex={1}
                           onPress={() => setSelected(2)}>
                    <Center>
                        <Icon style={{color: "white", fontSize: 14, marginBottom: 2}}>
                            <FavouriteIcon name="favourite" style={{color: "white"}}/>
                        </Icon>
                        <Text style={{color: "white", fontSize: 12}}>
                            Favourites
                        </Text>
                    </Center>
                </Pressable>
            </HStack>
        </Box>
    );
}

export default Footer;