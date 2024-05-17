import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import TodoApp from './components/TodoApp';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#333" barStyle="light-content" />
      <View style={styles.innerContainer}>
        <TodoApp />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333', // Dark background color
  },
  innerContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },
});

export default App;
