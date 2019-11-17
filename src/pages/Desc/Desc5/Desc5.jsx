import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './Desc5.scss'

export default class Desc5 extends Component {

  config = {
    navigationBarTitleText: '巧渡金沙江',
    navigationBarBackgroundColor: '#f00',
    navigationBarTextStyle: 'white'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='Desc5'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
