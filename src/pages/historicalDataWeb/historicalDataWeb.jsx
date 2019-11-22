import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './historicalDataWeb.scss'

export default class Historicaldataweb extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '史料搜集站'
  }

  render () {
    return (
      <View className='historicalDataWeb'>
        <Text>史料搜集站</Text>
        <Curtain />
      </View>
    )
  }
}
