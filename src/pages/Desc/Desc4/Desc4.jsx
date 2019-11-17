import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './Desc4.scss'

export default class Desc4 extends Component {

  config = {
    navigationBarTitleText: '四渡赤水',
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
      <View className='Desc4'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
