import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './famousArticles.scss'

export default class Famousarticles extends Component {

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
      <View className='famousArticles'>
        <Text>著名文章</Text>
      </View>
    )
  }
}
