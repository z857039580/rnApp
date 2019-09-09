import * as types from '../constants/appType'

const {client, xml} = require('@xmpp/client')


const connectXmpp = ()=> {
    return dispatch => {
        dispatch(xmppLoginIng('连接中...'));

        const xmpp = client({
            service: 'ws://192.168.26.160:7070/ws/',
            username: 'arvinc',
            password: '123456',
        })
        xmpp.on('error', err => {
            console.error('❌', err.toString())
        })
        xmpp.on('offline', () => {
            console.log('⏹', 'offline')
        })
        xmpp.on('stanza', async stanza => {
            console.log('---------收到信息')
            console.log(stanza)
        })
        xmpp.on('online', async address => {

            dispatch(xmppSuccess('连接成功'));

            console.log('▶', 'online as', address.toString())
            await xmpp.send(xml('presence'))
            const message = xml(
                'message',
                {type: 'chat', to: address},
                xml('body', null, 'hello world')
            )
            await xmpp.send(message)
        })
        xmpp.on('status', status => {
            console.debug('🛈', 'status', status)
        })
        xmpp.on('input', input => {
            console.debug('⮈', input)
        })
        xmpp.on('output', output => {
            console.debug('⮊', output)
        })
        xmpp.start().catch(console.error)


    }
}

function xmppSuccess(status) {
    return {
        type : types.CONNECT_XMPP,
        status:status,
    }
}
function xmppLoginIng(status) {
    return {
        type : types.CONNECT_XMPP_ING,
        status:status,
    }
}

function setUserName(userName) {
    return {
        type : types.USER_NAME,
        userName:userName,
    }
}

export default {
    connectXmpp,
    setUserName
}