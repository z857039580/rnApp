import React from 'react';


import {
    View,
    Button,
    Text,
} from 'react-native';


export default class PageA extends React.Component {
    static navigationOptions = {
        title: 'PageA title',
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>PageA页面</Text>

                <Button
                    title="Go to PageCCC"
                    onPress={() => navigate('PageC', {name: 'PageC name'})}
                />
                <Button
                    title="Go to PageD"
                    onPress={() => navigate('PageD', {name: 'PageD name'})}
                />
                <Button
                    title="Go to PageE"
                    onPress={() => navigate('PageE', {name: 'PageE name'})}
                />
            </View>
        );
    }
}

