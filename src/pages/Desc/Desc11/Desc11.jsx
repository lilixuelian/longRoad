import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './Desc11.scss'

export default class Desc11 extends Component {

  config = {
    navigationBarTitleText: '吴起会师',
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
      <View className='Desc11'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
