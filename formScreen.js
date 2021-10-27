import React, {Component, useState} from "react";
import { StyleSheet, View, Text, TextInput, ScrollView, SafeAreaView, Button, Image,  } from "react-native";
import *as ImagePicker from 'expo-image-picker';
import { launchCameraAsync, launchImageLibraryAsync } from "expo-image-picker";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import './formScreen.css';
import globaluserModel from "./userModel";


const Stack = createNativeStackNavigator();

  

const formScreen = ({navigation}) =>{


    
const pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  console.log(result);

  if (!result.cancelled) {
    globaluserModel.setImage(result.uri);
  }
};

  
         return(
            <View style ={styles.container}>
              <h1>React User Form</h1>
              <div>
                 <form className='userForm'>
                   <Text style = {styles.inputText}>Name</Text><br/><br/>
                   <TextInput style ={styles.inputField} onChangeText={(val) => globaluserModel.setName(val)} placeholder='Enter Your Name' /><br/><br/>
                   <Text style = {styles.inputText} >Surname</Text><br/><br/>
                   <TextInput style ={styles.inputField} onChangeText={(val) => globaluserModel.setSurname(val)} placeholder='Enter Your Surname'/><br/><br/>
                   <Text style = {styles.inputText}>Phone Number</Text><br/><br/>
                   <TextInput style ={styles.inputField} onChangeText={(val) => globaluserModel.setPhone(val)} placeholder='#Phone-number' keyboardType='numeric' /><br/><br/>
                   <Text style = {styles.inputText}>Email</Text><br/><br/>
                   <TextInput style ={styles.inputField} onChangeText={(val) => globaluserModel.setEmail(val)} placeholder='eg. example.com'/><br/><br/>
                   <Text style = {styles.inputText}>Residential Address</Text><br/><br/>
                   <TextInput  style ={styles.inputField} onChangeText={(val) => globaluserModel.setAddress(val)} placeholder='Enter your Address'/><br/><br/>
                   <View style ={styles.imageSelector}>
                   <Button title='Choose Image' onPress={pickImage}/>
                   </View><br/><br/><br/>
                   <View style = {styles.btnContainer}>
                   <Button title='Submit' onPress={async () =>{navigation.navigate('userDetailScreen',{
                    name: globaluserModel.name,
                    surname: globaluserModel.surname,
                    phone:globaluserModel.phone,
                    email:globaluserModel.email,
                    address:globaluserModel.address,
                    image:globaluserModel.image
                   })
                  }
                   }/>
        
                   </View>
        
                 </form>
              </div>
              
            </View>
         );
        }
        
        const styles = StyleSheet.create({
         container:{
           
           alignContent:'center',
           justifyContent:'center',
           backgroundColor:'#00ced1'
         },
    
  inputField:{
    borderColor: '#00ffff',
    borderBottomWidth: 3,
    marginLeft: 25,
    paddingRight: 95
  },
  
 
  inputText:{
    marginLeft: 25,
    marginTop: 10,
    color: '#6495ed',
    fontWeight:'bold',
  },
 
 btnContainer:{
   width: 125,
   marginLeft: 155,
  
 
 },
 
 imageSelector:{
   width: 95,
   marginLeft: 30
   
 }
 
 
 })
        

export default formScreen;