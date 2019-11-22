import Taro, { Component } from '@tarojs/taro'
import { View} from '@tarojs/components'
import './Article.scss'
import { AtCard } from "taro-ui"
import place from '../../../pictures/iconphoto/place.png'
import content from '../../../pictures/iconphoto/content.png'
import One from '../../../components/Number/One/One'
import Two from '../../../components/Number/Two/Two'
import Three from '../../../components/Number/Three/Three'
import Four from '../../../components/Number/Four/Four'
import Five from '../../../components/Number/Five/Five'
import Six from '../../../components/Number/Six/Six'

export default class Article extends Component {

  config = {
    navigationBarTitleText: '其他'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  render () {
    return (
      <View className='Article'>
        <AtCard
          title='标题'
          thumb={place}
        >
          <View className='title'>七律长征</View>
        </AtCard>
        <AtCard
          title='内容'
          thumb={content}
        >
          <View className='content'>
            <View>红军不怕远征难，万水千山只等闲。</View>
            <View>五岭逶迤腾细浪，乌蒙磅礴走泥丸。</View>
            <View>金沙水拍云崖暖，大渡桥横铁索寒。</View>
            <View>更喜岷山千里雪，三军过后尽开颜</View>
          </View>
        </AtCard>
      </View>
    )
  }
}
