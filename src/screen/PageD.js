import React from 'react';
import {connect} from 'react-redux'
import {View, Button, Text} from 'react-native';

class PageD extends React.Component {
    static navigationOptions = {
        title: 'PageD title',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>PageD页面</Text>
                <Button title="跳转到PageA,登录连接XMPP" onPress={() => navigate('PageA', {name: 'PageA name'})} />
            </View>
        );
    }
}

export default connect()(PageD)
