import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const TodoItem = ({ id, text, handleRemove, handleEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);

  const handleSave = () => {
    if (newText.trim() !== '') {
      handleEdit(id, newText);
      setIsEditing(false);
    }
  };

  return (
    <View style={styles.todoItem}>
      {isEditing ? (
        <TextInput
          style={styles.editInput}
          value={newText}
          onChangeText={setNewText}
          autoFocus
        />
      ) : (
        <Text style={styles.todoText}>{text}</Text>
      )}
      <View style={styles.actions}>
        {!isEditing ? (
          <TouchableOpacity onPress={() => setIsEditing(true)}>
            <Icon name="edit" size={20} color="#3b3bff" style={styles.icon} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleSave}>
            <Icon name="check" size={20} color="#00ff00" style={styles.icon} />
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={() => handleRemove(id)}>
          <Icon name="trash-o" size={20} color="#ff3b3b" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#444', // Dark item background color
  },
  todoText: {
    color: '#fff', // Light text color
    flex: 1,
  },
  editInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
    color: '#fff',
    backgroundColor: '#555', // Dark input background color
  },
  actions: {
    flexDirection: 'row',
    marginLeft: 'auto',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 10,
  },
});

export default TodoItem;
