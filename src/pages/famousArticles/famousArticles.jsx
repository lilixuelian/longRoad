import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './famousArticles.scss'
import Article from '../../components/Article/Article'

export default class Famousarticles extends Component {

  config = {
    navigationBarTitleText: '著名文章'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='famousArticles'>
        <Article />
        <Article />
        <Article />
      </View>
    )
  }
}
