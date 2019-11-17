import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './importantPeople.scss'

export default class Importantpeople extends Component {

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
      <View className='importantPeople'>
        <Text>人物大事记</Text>
      </View>
    )
  }
}
