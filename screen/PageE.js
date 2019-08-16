import React from 'react';


import {
    View,
    Button,
    Text,
} from 'react-native';


export default class PageE extends React.Component {
    static navigationOptions = {
        title: 'PageE title',
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>PageE页面</Text>
                <Button
                    title="Go to PageA"
                    onPress={() => navigate('PageA', {name: 'PageA name'})}
                />
                <Button
                    title="Go to PageB"
                    onPress={() => navigate('PageB', {name: 'PageB name'})}
                />
                <Button
                    title="Go to PageC"
                    onPress={() => navigate('PageC', {name: 'PageC name'})}
                />
                <Button
                    title="Go to PageD"
                    onPress={() => navigate('PageD', {name: 'PageD name'})}
                />
            </View>
        );
    }
}
