import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './Components/Header';
import TodoItem from './Components/TodoItem';
import AddTodo from './Components/AddTodo';
import SandBox from './Components/SandBox';



export default function App() {

  const [todos, setTodos] = useState([
    { text: 'buy coffee' , key: '1'},
    { text: 'create an app' , key: '2'},
    { text: 'play on the switch' , key: '3'}
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    });
  }

  const submitHandler = (text) => {
    if(text.length > 3){
        setTodos((prevTodos)=>{
          return [
            {text: text, key: Math.random().toString() },
            ...prevTodos
          ];
        });
      }else{
        Alert.alert('OOPS!', 'TODOs must be over 3 chars long', [
          {text: 'understood', onPress: () => console.log('alert Closed')}
        ])
    }
  }
   

  return (
    //<SandBox />
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
      console.log('dismissed keyboard')
    }}>
      <View style={styles.container}>
      <Header />
        <View style={styles.content}>
            <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList 
              data={ todos }
              renderItem={( { item } )=>(
                  <TodoItem item={item} pressHandler = {pressHandler}/>
              )}
            />
         </View>
      </View> 
    </View>
    </TouchableWithoutFeedback>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  }
});
