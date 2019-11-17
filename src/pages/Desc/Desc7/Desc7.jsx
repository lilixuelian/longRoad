import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './Desc7.scss'

export default class Desc7 extends Component {

  config = {
    navigationBarTitleText: '飞夺泸定桥',
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
      <View className='Desc7'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
