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
          <View className='title'>清平乐·六盘山</View>
        </AtCard>
        <AtCard
          title='内容'
          thumb={content}
        >
          <View className='content'>
            <View>天高云淡，望断南飞雁。不到长城非好汉，屈指行程二万。六盘山上高峰，红旗漫卷西风。今日长缨在手，何时缚住苍龙？</View>
          </View>
        </AtCard>
      </View>
    )
  }
}
