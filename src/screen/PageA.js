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


                <Button title={'登录'} onPress={appAction.connectXmpp}
                />


                <Button
                    title="Go to PageD"
                    onPress={() => this.props.navigation.navigate('PageD')}
                />



                <View style={{ marginTop:50}}>
                    <Text>{this.props.userName}</Text>
                    <TextInput placeholder='请输入用户名，观测redux'
                               onChangeText={(text) => appAction.setUserName(text)}
                               value={this.props.userName}
                    />
                </View>



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
