import React from 'react';
import {connect} from 'react-redux'
import {View, Button, Text} from 'react-native';

class PageC extends React.Component {
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

                <Button
                    title="Go to PageD"
                    onPress={() => navigate('PageD')}
                />

                <Text style={{ marginTop:100, textAlign:'center',color:'#ff0000'}}>{this.props.state.counter.count}</Text>


            </View>
        );
    }
}


export default connect(
    (state) => {
        return {
            state: state
        }
    }
    )(PageC)