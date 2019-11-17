import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './Desc3.scss'

export default class Desc3 extends Component {

  config = {
    navigationBarTitleText: '遵义会议'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='Desc3'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
