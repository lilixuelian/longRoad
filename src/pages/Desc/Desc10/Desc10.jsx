import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './Desc10.scss'

export default class Desc10 extends Component {

  config = {
    navigationBarTitleText: '激战腊子口'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='Desc10'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
