import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './digitalizeChangzheng.scss'

export default class Digitalizechangzheng extends Component {

  config = {
    navigationBarTitleText: '数字长征'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='digitalizeChangzheng'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
