import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './Desc6.scss'

export default class Desc6 extends Component {

  config = {
    navigationBarTitleText: '强渡大渡河',
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
      <View className='Desc6'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
