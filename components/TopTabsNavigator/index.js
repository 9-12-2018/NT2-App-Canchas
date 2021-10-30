import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import Home from '../../screens/Home';
import Maps from '../../screens/Maps';
import Califications from '../../screens/Califications';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"


export default function MaterialTopTabNavigator() {


    const TopTabs = createMaterialTopTabNavigator()
  
    return (
        <TopTabs.Navigator>
            <TopTabs.Screen name={'Inicio'} component={Home}/>
            <TopTabs.Screen name={'Califications'} component={Califications} options={{ title: 'Calificaciones', headerShown: false }}/>
            <TopTabs.Screen name={'Maps'} component={Maps}/>
        </TopTabs.Navigator>
    );
  }