import React from 'react';
import { FlatList } from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({ todos, setTodos }) => {
  const handleRemove = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEdit = (id, newText) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      }
      return todo;
    }));
  };

  return (
    <FlatList
      data={todos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TodoItem
          id={item.id}
          text={item.text}
          handleRemove={handleRemove}
          handleEdit={handleEdit}
        />
      )}
    />
  );
};

export default TodoList;
