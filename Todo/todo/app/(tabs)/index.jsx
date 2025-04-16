import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';


export default function App() {

    function handle(params) {
        
    }
  const [TodoList, SetTodoList] = useState([
    { id: '1', text: 'Buy groceries' },
    { id: '2', text: 'Finish project' },
    { id: '3', text: 'Call John' },
  ]);

  const[Todo, SetTodo]= useState(TodoList);
  const handleSubmit=()=>{

    const newTodo = {
        id: TodoList.length +1,
        heading: "heading"+ (TodoList.length +1),
        text: Todo
    }
    if(Todo==''){return;}

    axios.post('http://192.168.29.196:5001/enterdata', newTodo).then(res=>{console.log(res.data)}).catch(e=>{console.log(e);});
    
    
    SetTodoList([...TodoList, newTodo]);
    SetTodo('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>To-Do List</Text>

      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        placeholderTextColor="#999"
        value={Todo}
        onChangeText={SetTodo}
      />

      <Pressable style={styles.addButton} onPress={handleSubmit}>
        <Text style={styles.addButtonText}>Add</Text>
      </Pressable>

      <FlatList
        data={TodoList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={styles.todoText}>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFECDB',
    padding: 20,
    paddingTop: 60,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  addButton: {
    backgroundColor: '#000',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  todoItem: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 8,
    marginBottom: 10,
  },
  todoText: {
    fontSize: 16,
    color: '#333',
  },
});
