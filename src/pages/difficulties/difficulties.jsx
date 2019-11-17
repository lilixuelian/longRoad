import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './difficulties.scss'

export default class Difficulties extends Component {

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
      <View className='difficulties'>
        <Text>长征路难</Text>
      </View>
    )
  }
}
