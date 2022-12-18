import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';
import { NativeBaseProvider, Box } from "native-base";

const App = () => {
  return (
      <ScrollView>
          <NativeBaseProvider>
              <Box>Hello world native provider</Box>
          </NativeBaseProvider>
      </ScrollView>
  );
}

export default App;
