import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './Desc8.scss'

export default class Desc8 extends Component {

  config = {
    navigationBarTitleText: '翻雪山'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='Desc8'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
