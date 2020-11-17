import React, { Component } from 'react';
import Menu from './MenuComponent';
import Dishdetail from './DishDetailsComponent';
import Home from './HomeComponent';
import About from './About.js';
import Contact from './Contact';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import {createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import {Icon } from 'react-native-elements'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "black",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};
const drawerStyle = {
  
    backgroundColor: "black",
};

const HomeNavigator = ({navigation,props,route}) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle} >
      <Stack.Screen name="Home" component={Home} options={{
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          margin:0
        },
          title: 'Home Screen',
          headerLeft: () => (
            <Icon
            name='list'
            type='font-awesome'
            size={30}
            color='white'
            onPress={() => navigation.openDrawer()} />
          ),

       }} />
    
    </Stack.Navigator>
  );
}

const MenuNavigator = ({navigation,props,route}) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Dishdetail" component={Dishdetail}/>
    </Stack.Navigator>
  );
}

const MainNavigator = ({navigation,props,route}) => {
  return (
    <Drawer.Navigator screenOptions={drawerStyle}>
      <Drawer.Screen name="Home" component={HomeNavigator}  options={{
          title: 'Home',
          drawerIcon: ({focused, size}) => (
            <Icon
            raised
            name='home'
            type='font-awesome'
            color='black'
            onPress={() => console.log('hello')} />
          ),
        }} />
      <Drawer.Screen name="Menu" component={MenuNavigator}  options={{
          title: 'Menu',
          drawerIcon: ({focused, size}) => (
            <Icon
            raised
            name='list'
            type='font-awesome'
            color='black'
            onPress={() => console.log('hello')} />
          ),
        }}  />
      <Drawer.Screen name="About Us" component={About}  options={{
          title: 'About Us',
          drawerIcon: ({focused, size}) => (
            <Icon
            raised
            name='info-circle'
            type='font-awesome'
            color='black'
            onPress={() => console.log('hello')} />
          ),
        }} />
      <Drawer.Screen name="Contact Us" component={Contact}  options={{
          title: 'Contact Us',
          drawerIcon: ({focused, size}) => (
            <Icon
            raised
            name='phone'
            type='font-awesome'
            color='black'
            onPress={() => console.log('hello')} />
          ),
        }} />
    </Drawer.Navigator>
  );
}



const Main =()=>{  
    return (
        <View style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight}}>
        <NavigationContainer>
        <MainNavigator  />
        </NavigationContainer>
        </View>
    );
}


const styles = StyleSheet.create({
  iconStyle: {
    margin: 14,
    alignContent: 'flex-end',
  },
});
  

export default Main;