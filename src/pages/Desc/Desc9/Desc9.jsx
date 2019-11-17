import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './Desc9.scss'

export default class Desc9 extends Component {

  config = {
    navigationBarTitleText: '过草地'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='Desc9'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
