import React, {Component} from "react";
import { StyleSheet, SafeAreaView, View, ScrollView, Text, Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import './userDetailScreen.css'




export default function userDetailScreen ({route, navigation}){
    //const {name, surname, phone, email, address, image} = route.params;
    
    return(
        <ScrollView>
            <View style={style.viewContainer}>
                <h2>Welcome {route.params.name} Here are your user details <br/> brought to you by CodeTribe!!!</h2><br/><br/>
                <Image style={style.userImage} source={{uri:route.params.image}} /><br/><br/>
                <Text style={style.infoText}>Name: {route.params.name}</Text>
                <Text style={style.infoText}>Surname: {route.params.surname}</Text>
                <Text style={style.infoText} style={style.infoText}>Phone-number: {route.params.phone}</Text>
                <Text style={style.infoText}>Email: {route.params.email}</Text>
                <Text style={style.infoText}>Residential Address: {route.params.address}</Text>

            </View>
        </ScrollView>

    );
}
const style = StyleSheet.create({
viewContainer:{
backgroundColor:'#ffd700', 
paddingBottom: 100
},

userImage:{
    flex: 1,
    alignSelf: 'center',
    width: 225,
    height: 225,
    borderRadius: 113,
    border: 6,
    borderColor: '#adff2f'
},

infoText:{
    textAlign: 'center',
    color: '#1e90ff',
    fontSize: 27,
    fontFamily: 'Brush Script MT',
    fontStyle: 'italic',
    fontWeight: 'bold'
}
})


