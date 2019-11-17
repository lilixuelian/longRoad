import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './scenicSpots.scss'

export default class Scenicspots extends Component {

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
      <View className='scenicSpots'>
        <Text>推荐景点</Text>
      </View>
    )
  }
}
