import Taro, { Component } from '@tarojs/taro'
import { View, Text, Textarea } from '@tarojs/components'
import './Desc1.scss'
import '../Desc.scss'

export default class Desc1 extends Component {

  config = {
    navigationBarTitleText: '突破四道防线',
    navigationBarBackgroundColor: '#f00',
    navigationBarTextStyle: 'white'
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='Desc'>
      </View>
    )
  }
}
