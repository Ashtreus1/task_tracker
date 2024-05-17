import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TodoList from './TodoList';

const TodoApp = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (text.trim() !== '') {
      setTodos([...todos, { id: todos.length, text }]);
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Task Tracker</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a todo..."
          placeholderTextColor="#aaa"
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTodo}>
          <MaterialCommunityIcons name="plus" size={24} color="#6abf69" />
        </TouchableOpacity>
      </View>
      <View style={styles.separator} />
      <TodoList todos={todos} setTodos={setTodos} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#333', 
    color: '#fff', 
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff', 
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    color: '#fff',
    backgroundColor: '#555',
  },
  addButton: {
    padding: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginBottom: 10,
  },
});

export default TodoApp;
