import React from 'react';


import {
    View,
    Button,
    Text,
} from 'react-native';


export default class PageB extends React.Component {
    static navigationOptions = {
        title: 'PageB title',
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>PageB页面</Text>
                <Button
                    title="Go to PageC"
                    onPress={() => navigate('PageC', {name: 'PageC name'})}
                />
            </View>
        );
    }
}
