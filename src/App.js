import React from 'react';
import { View, StyleSheet, Text, Image, StatusBar } from 'react-native';
import {Provider} from 'react-redux'
import configureStore from './redux/store/ConfigureStore'
import {createStackNavigator, createBottomTabNavigator,createAppContainer} from 'react-navigation';
import PageA from "./screen/PageA";
import PageB from "./screen/PageB";
import PageC from "./screen/PageC";
import PageD from "./screen/PageD";
import Ionicons from 'react-native-vector-icons/Ionicons';


class IconWithBadge extends React.Component {
    render() {
        const { name, badgeCount, color, size } = this.props;
        return (
            <View style={{ width: 24, height: 24, margin: 5 }}>
                <Ionicons name={name} size={size} color={color} />
                {badgeCount > 0 && (
                    <View
                        style={{
                            // If you're using react-native < 0.57 overflow outside of parent
                            // will not work on Android, see https://git.io/fhLJ8
                            position: 'absolute',
                            right: -6,
                            top: -3,
                            backgroundColor: 'red',
                            borderRadius: 6,
                            width: 12,
                            height: 12,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
                            {badgeCount}
                        </Text>
                    </View>
                )}
            </View>
        );
    }
}

const HomeIconWithBadge = props => {
    // You should pass down the badgeCount in some other ways like react context api, redux, mobx or event emitters.
    return <IconWithBadge {...props} name="appStore" size={24} badgeCount={3} />;
};


const PageAStack = createStackNavigator({
    PageA: PageA,
    PageC: PageC,
    PageD: PageD,
}, {
    initialRouteName: 'PageA',
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
                    return <Image source={require('./common/images/icon_tabnav.png')} />
                }else{
                    return <Image source={require('./common/images/tabnavB.png')} />
                }
            }
        })
    },
    PageB: {
        screen: PageB,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: '我的',
            tabBarIcon:HomeIconWithBadge
        })
    }
}, {
    initialRouteName: 'PageA',
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

const Navigator = createStackNavigator({
        HomeTab: {
            screen: BottomTabNavigator,
            navigationOptions: {
                header: null,
            }
        },
        PageD: {
            screen: PageD,
        },
    },
    {
        initialRouteName: 'PageD',
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

const AppContainer = createAppContainer(Navigator);

const store = configureStore()
const Root = ()=>{
    return (
        <Provider store = {store}>
            <AppContainer/>
        </Provider>
    )
}

export default Root;

