/*
 import Ionicons from 'react-native-vector-icons/Ionicons';
 import PageA from './view/PageA';
 import PageB from './view/PageB';
 import PageC from './view/PageC';
 */

import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, StyleSheet, Text, Image, StatusBar } from 'react-native';
import {createStackNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation';
import PageA from "./screen/PageA";
import PageB from "./screen/PageB";
import PageC from "./screen/PageC";
import PageD from "./screen/PageD";
import PageE from "./screen/PageE";


const PageAStack = createStackNavigator({
    PageA: PageA,
    PageC: PageC,
    PageD: PageD,
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#ff0000',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    },
});


const BottomTabNavigator = createBottomTabNavigator({
    PageA: {
        screen: PageAStack,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: '首页',
            tabBarIcon: ({focused, tintColor}) => {
                if(focused){
                    return <Image source={require('./images/icon_tabnav.png')} />
                }else{
                    return <Image source={require('./images/tabnavB.png')} />
                }
            }
        })
    },
    PageB: {
        screen: PageB,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: '我的',
        })
    }
}, {
    initialRouteName: 'PageB',
    navigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, tintColor}) => {
            const {routeName} = navigation.state;
            let iconName;
            if (routeName === 'PageA') {
                iconName = `ios-home${focused ? '' : '-outline'}`;
            } else if (routeName === 'PageB') {
                iconName = `ios-options${focused ? '' : '-outline'}`;
            }
            return <Icon name={iconName} size={25} color={tintColor}/>;
        },
    }),
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    }
});

const RootStack = createStackNavigator({
        HomeTab: {
            screen: BottomTabNavigator,
            navigationOptions: {
                header: null,
            }
        },
        PageE: {
            screen: PageE,
        },
    },
    {
        initialRouteName: 'PageE',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#FF00FF',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    });

export default createAppContainer(RootStack);
