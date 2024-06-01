import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';


  export default function App() {
  const tasks = [
    { id: '1', title: 'Mobile App Development' },
    { id: '2', title: 'Web development' },
    { id: '3', title: 'Cooking' },
    { id: '4', title: 'Code' },
    { id: '5', title: 'Studying' },
    { id: '6', title: 'Work out' },
    { id: '7', title: 'Partying' },
    { id: '8', title: 'Jogging' },
    { id: '9', title: 'Laundary' },
    { id: '10', title: 'Grocery shopping' },
    { id: '11', title: 'Music rehearsals' },
    { id: '12', title: 'Piano lessons' },
    { id: '13', title: 'Salon time' },
    { id: '14', title: 'Group studies' },
    { id: '15', title: 'Mid-week service' },
  ];
    
  return (
<ScrollView contentContainerStyle={styles.scrollViewContainer}>
    <View style={styles.container}>
       <Text style={styles.text}>Hello , Devs!</Text>
      <Text style={styles.smalltext}>14 tasks today</Text>
      <TextInput 
        style={styles.textInput}
        placeholder='Search'
      />
      <Text style={styles.categories}>Categories</Text>
          
  <ScrollView horizontal style={ styles.scrollview}>
      <View style={styles.slide}>
          <Text style={styles.activities}>Exercise</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.activities}>Study</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.activities}>Code</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.activities}>Cook</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.activities}>Self-care</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.activities}>Travel</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.activities}>Relaxation & Leisure</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.activities}>Socialize</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.activities}>Research</Text>
        </View>        
</ScrollView>
<Text style={styles.ongoingtask}>Ongoing Task</Text>
 <FlatList
      data={tasks}
      renderItem={({ item }) => (
            <View style={styles.taskBox}>
            <Text style={styles.task}>{item.title}</Text>
       </View>
      )}
  keyExtractor={item => item.id}
 />
      
      <StatusBar style="auto" />
    </View>
 </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start', 
    alignItems: 'flex-start', 
    paddingTop: 52,
    paddingLeft: 20, 
  },
 text: {
    fontSize: 30,
  },
  textInput:{
    width:246,
    height:50,
    marginTop:38,
    backgroundColor:'#FBF9F7',
    borderRadius:10,
  },
    categories:{
    fontSize: 22,
    marginTop:25,
  },
   activities:{
    width:150,
    marginRight:15,
    width:150,
    height:150,
    borderRadius:15,
    width:150,
    marginRight:15,
    width:150,
    height:150,
    borderRadius:15,
    padding: 15,
    paddingTop:18,
    marginTop:10,
    backgroundColor: '#FBF9F7',
    fontSize:18,
    fontWeight:'bold',
  },
  ongoingtask:{
    fontSize:22,
    marginTop:20,
    fontWeight:'bold',
  },
   taskBox: {
    backgroundColor: '#FBF9F7',
    borderRadius: 15,
    marginBottom: 10,
    marginTop: 12,
  },
  task: {
    fontSize: 16,
    padding: 26,
    width:348,
    height:125,
    fontWeight:'bold',
  },
  
  

});