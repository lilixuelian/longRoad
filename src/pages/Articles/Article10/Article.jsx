import Taro, { Component } from '@tarojs/taro'
import { View} from '@tarojs/components'
import '../Article.scss'
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
          <View className='title'>丰碑</View>
        </AtCard>
        <View>　</View>
        <AtCard
          title='内容'
          thumb={content}
        >
          <View className='content'>
            <View>
              <View> 　　红军队伍在冰天雪地里艰难地前进。严寒把云中山冻成了一个大冰坨。狂风呼啸，大雪纷飞，似乎要吞掉这支装备很差的队伍。</View>
              <View> 　　将军早把他的马让给了重伤员。他率领战士们向前挺进，在冰雪中为后续部队开辟一条通道。等待着他们的是恶劣的环境和残酷的战斗，可能吃不上饭，可能睡雪窝，可能一天要走一百几十里路，可能遭到敌人的突然袭击。这支队伍能不能经受住这样严峻的考验呢？将军思索着。</View>
              <View> 　　队伍忽然放慢了速度，前面有许多人围在一起，不知在干什么。</View>
              <View> 　　将军边走边喊：“不要停下来，快速前进！”</View>
              <View> 　　“前面有人冻死了。”警卫员跑回来告诉他。</View>
              <View> 　　将军愣了一下，什么话也没说，快步朝前走去。</View>
              <View> 　　一个冻僵的老战士，倚靠光秃秃的树干坐着。他一动不动，好似一尊塑 像，身上落满了雪，无法辨认他的面目，但可以看出，他的神态十分镇定，十分安祥：右手的中指和食指间还夹着半截纸卷的旱烟，火已被雪打灭；左手微微向前伸着，好像在向战友借火。单薄破旧的衣服紧紧地贴在他的身上。</View>
              <View> 　　将军的脸色顿时严峻起来，嘴角边的肌肉抽动着。忽然他转过脸向身边的人吼道：“把军需处长给我叫来！为什么不给他发棉衣？”</View>
              <View> 　　呼啸的狂风淹没了将军的话音。没有人回答他，也没有人走开。他红着眼睛，像一头发怒的豹子，样子十分可怕。</View>
              <View> 　　“听见没有，警卫员？叫军需处长跑步过来！”将军两腮的肌肉抖动着。</View>
              <View> 　　这时候，有人小声告诉将军：“他就是军需处长……”</View>
              <View> 　　将军愣住了，久久地站在雪地里。他的眼睛湿润了。他深深地吸了一口气，缓缓地举起右手，举到齐眉处，向那位跟云中山化为一体的军需处长敬了一个军礼。</View>
              <View> 　　风更狂了，雪更大了。在雪很快地覆盖了军需处长的身体，他成了一座晶莹的丰碑。</View>
              <View> 　　将军什么话也没有说，大步走进漫天的风雪中。他听见无数沉重而坚定的脚步声。那声音似乎在告诉人们：如果胜利不属于这样的队伍，还会属于谁呢？</View>
            </View>
          </View>
        </AtCard>
        <View>　</View>
      </View>
    )
  }
}
