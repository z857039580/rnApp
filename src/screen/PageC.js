import React from 'react';


import {
    View,
    Button,
    Text,
} from 'react-native';


export default class PageC extends React.Component {
    static navigationOptions = {
        title: 'PageC title',
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>PageC页面</Text>
                <Button
                    title="Go to PageA"
                    onPress={() => navigate('PageA', {name: 'PageA name'})}
                />
                <Button
                    title="Go to PageB"
                    onPress={() => navigate('PageB', {name: 'PageB name'})}
                />
            </View>
        );
    }
}
