import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './ChangzhengStory.scss'

export default class Changzhengstory extends Component {

  config = {
    navigationBarTitleText: '长征小故事'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='ChangzhengStory'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
