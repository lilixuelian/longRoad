import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './Desc2.scss'

export default class Desc2 extends Component {

  config = {
    navigationBarTitleText: '强渡乌江',
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
      <View className='Desc2'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
