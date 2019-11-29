import Taro, { Component } from '@tarojs/taro'
import { View} from '@tarojs/components'
import './Article.scss'
import { AtCard } from "taro-ui"
import place from '../../../pictures/iconphoto/place.png'
import content from '../../../pictures/iconphoto/content.png'

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
        <View>　</View>
        <AtCard
          title='标题'
          thumb={place}
        >
          <View className='title'>艰苦岁月</View>
        </AtCard>
        <View>　</View>
        <AtCard
          title='内容'
          thumb={content}
        >
          <View className='content'>
            红军打退了敌人的又一次进攻，在山坡上休息。天色渐渐暗下来，周围非常寂静。山谷中响起了悠扬的笛声。吹笛子的是一位老红军。他坐在石头上，赤着脚，身上的衣服很破了，腰里挂着驳壳枪，帽子上的五角星红得十分鲜艳。他颧骨很高，额上的皱纹很深，浓浓的眉毛下面，一双眼睛特别有神。一位十来岁的小红军偎依在他的身旁，右手托着下巴，侧着耳朵倾听。小红军也赤着脚，衣服也很破，搂着一支跟他差不多高的步枪。这位老红军，很可能原来是个长工；小红军呢，也许原来是个放牛娃。这一老一小都来到了人民的军队，跟着共产党、毛主席闹革命。战斗的岁月非常艰苦，可是他们充满了胜利的信心，相信一定能够彻底打垮敌人，使穷苦人都翻身做主人，过上幸福的生活。小红军听着笛声，出神地望着远方。他看到了未来，看到了希望。
          </View>
        </AtCard>
        <View>　</View>
      </View>
    )
  }
}
