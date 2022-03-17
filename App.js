import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';


export default function App() {
  const [people, setPeople] = useState([
    {name: 'Nani' , id: '1'},
    {name: 'Kal' , id: '2'},
    {name: 'Seni' , id: '3'},
    {name: 'Amen' , id: '4'},
    {name: 'Kiru' , id: '5'},
    {name: 'Almi' , id: '6'},
    {name: 'Hope' , id: '7'},
  ]);

  const pressHandler = (id) =>{
    console.log(id);
    setPeople((prevPeople)=>{
      return prevPeople.filter(person => person.id != id)
    });
  } 

  return (
    <View style={styles.container}>

    <FlatList 
        numColumns={2}
        keyExtractor={(item)=>item.id}
        data={people}
        renderItem={( {item} )=> (
          <>
            <TouchableOpacity onPress={() => pressHandler(item.id)}>
              <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
          </>
        )}
    />
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24,
  }
  
});
