import React, {Component} from 'react';
import {StyleSheet, View, Button, Text, TextInput} from 'react-native';

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import appAction from '../redux/actions/appAction'


class PageA extends Component {
    static navigationOptions = {
        title: 'PageA title',
    };
    render() {
        const {appAction} = this.props;
        return (
            <View>
                <Text>status:{this.props.status}</Text>
                <Text>isSuccess:{this.props.isSuccess}</Text>
                <Text>-----{this.props.userName}---</Text>


                <Button title={'登录'} onPress={appAction.connectXmpp}
                />


                <Button
                    title="Go to PageD"
                    onPress={() => this.props.navigation.navigate('PageD')}
                />


                <TextInput
                    onChangeText={(text) => appAction.setUserName(text)}
                    value={this.props.userName}
                />


            </View>
        );
    }
}

export default connect(
    (state) => {
        return {
            status:state.AppReducer.status,
            isSuccess:state.AppReducer.isSuccess,
            userName:state.AppReducer.userName
        }
    },
    (dispatch) => ({
        appAction: bindActionCreators(appAction, dispatch),
    })
)(PageA)
