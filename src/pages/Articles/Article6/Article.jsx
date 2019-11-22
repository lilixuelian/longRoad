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
          <View className='title'>六言诗·给彭德怀同志</View>
        </AtCard>
        <AtCard
          title='内容'
          thumb={content}
        >
          <View className='content'>
            <View>山高路远坑深，大军纵横驰奔。</View>
            <View>谁敢横刀立马？唯我彭大将军。</View>
          </View>
        </AtCard>
      </View>
    )
  }
}
