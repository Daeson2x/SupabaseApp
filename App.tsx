/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Login from './Login';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Login/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;