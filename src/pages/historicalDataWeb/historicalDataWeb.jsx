import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './historicalDataWeb.scss'

export default class Historicaldataweb extends Component {

  config = {
    navigationBarTitleText: '史料搜集站'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='historicalDataWeb'>
        <Text>史料搜集站</Text>
      </View>
    )
  }
}
