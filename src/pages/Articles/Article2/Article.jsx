import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './Article.scss'
import { AtCard } from "taro-ui"
import place from '../../../pictures/iconphoto/place.png'
import content from '../../../pictures/iconphoto/content.png'

export default class Article extends Component {

  config = {
    navigationBarTitleText: '其他'
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  render() {
    return (
      <View className='Article'>
        <View>　</View>
        <AtCard
          title='标题'
          thumb={place}
        >
          <View className='title'>十六字令三首</View>
        </AtCard>
        <View>　</View>
        <AtCard
          title='【其一】'
          thumb={content}
        >
          <View className='content'>
            <View>山，快马加鞭未下鞍。</View>
            <View>惊回首，离天三尺三。</View>
          </View>
        </AtCard>
        <View>　</View>
        <AtCard
          title='【其二】'
          thumb={content}
        >
          <View className='content'>
            <View>山，倒海翻江卷巨澜。</View>
            <View>奔腾急，万马战犹酣。</View>
          </View>
        </AtCard>
        <View>　</View>
        <AtCard
          title='【其三】'
          thumb={content}
        >
          <View className='content'>
            <View>山，刺破青天锷未残。</View>
            <View>天欲堕，赖以拄其间。</View>
          </View>
        </AtCard>
        <View>　</View>
      </View>
    )
  }
}