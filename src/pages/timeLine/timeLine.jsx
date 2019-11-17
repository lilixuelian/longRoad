import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './timeLine.scss'
import { AtTimeline } from 'taro-ui'

export default class Timeline extends Component {

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
      <View className='timeLine'>
        <Text>Hello world!</Text>
        <AtTimeline 
          items={[
            { title: '刷牙洗脸' }, 
            { title: '吃早餐', color: 'green' }, 
            { title: '上班', color: 'red' }, 
            { title: '睡觉', color: 'yellow' }
          ]}
        >
</AtTimeline>
      </View>
    )
  }
}
