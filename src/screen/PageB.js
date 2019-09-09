import React from 'react';
import {connect} from 'react-redux'
import {View, Button, Text} from 'react-native';

class PageB extends React.Component {
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

                <Text style={{ marginTop:100, textAlign:'center',color:'#ff0000'}}>{this.props.count}</Text>
            </View>
        );
    }
}


export default connect()(PageB)
