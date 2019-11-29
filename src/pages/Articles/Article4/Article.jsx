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
          <View className='title'>忆秦娥娄山关</View>
        </AtCard>
        <View>　</View>
        <AtCard
          title='内容'
          thumb={content}
        >
          <View className='content'>
            <View>横空出世，莽昆仑，阅尽人间春色。飞起玉龙三百万，搅得周天寒彻。夏日消溶，江河横溢，人或为鱼鳖。千秋功罪，谁人曾与评说？而今我谓昆仑：不要这高，不要这多雪。安得倚天抽宝剑，把汝裁为三截？一截遗欧，一截赠美，一截还东国。太平世界，环球同此凉热。</View>
          </View>
        </AtCard>
      </View>
    )
  }
}