import React from 'react';
import Home from './components/Home';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});

export default App;
