import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './historyVideos.scss'

export default class Historyvideos extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='historyVideos'>
        <Text>珍贵历史资料</Text>
      </View>
    )
  }
}
