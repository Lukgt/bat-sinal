import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, Text,TouchableOpacity } from 'react-native';
import { Home } from './components/Home';
import { Form } from './components/Form';



export default function App() {
  const [isSignalActive, setIsSignalActive] = useState(true);

  return (
    <View style={styles.container}>
      {isSignalActive ? (
        <Home changeState={(state) => setIsSignalActive(state)} />
      ) : (
        <Form />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4D4D4D', 
  },  
 
});