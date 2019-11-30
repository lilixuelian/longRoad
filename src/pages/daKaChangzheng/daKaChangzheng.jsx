import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './daKaChangzheng.scss'

export default class Dakachangzheng extends Component {

  config = {
    navigationBarTitleText: '打卡长征路'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='daKaChangzheng'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
