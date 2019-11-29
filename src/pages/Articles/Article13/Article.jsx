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
          <View className='title'>倔强的小红军</View>
        </AtCard>
        <View>　</View>
        <AtCard
          title='内容'
          thumb={content}
        >
          <View className='content'>
            <View>          
              <View> 　　陈赓同志回顾自己革命经历的时候，曾经深情地谈起这样一件往事。</View>
              <View> 　　那是深秋的一天，太阳偏西了。由于长时间在荒无人烟的草地上行军，常常忍饥挨饿，陈赓同志感到砖瓦分疲惫。这一陈他掉队了，牵着那匹同样疲惫的瘦马，一步一步朝前走着。忽然，看见前边脸皮小红军，跟他一样，也掉队了。</View>
              <View> 　　那小家伙不过十一二岁，黄黄的小脸，一双大眼睛，两片薄嘴唇，鼻子有点儿翘，两只脚穿着破草鞋，冻得又青又红。陈赓同志走到他跟前，说：“小鬼，你上马骑一会儿吧。”</View>
              <View> 　　小红军摆出一副满不在乎的样子，盯着陈赓同志长着络腮胡子的瘦脸，微微一笑，用一口四川话说：“老同志，我的体力比你强多了，你快骑上走吧。”</View>
              <View> 　　陈赓同志用命令的口吻说：“上去，骑一段路再说！”</View>
              <View> 　　小红军倔强地说：“你要我同你的马比赛啊，那就比一比吧。”他说着把腰一挺，做出个准备赛跑的姿势。</View>
              <View> 　　“那我们就一块走吧。”</View>
              <View> 　　“不。你先走，我还要等我的同伴呢。”</View>
              <View> 　　陈赓同志无可奈何，从身上取出一小包青稞面，递给小红军，说：“你把它吃了。”</View>
              <View> 　　小红军把身上的干粮袋一拉，轻轻的拍了拍，说：“你看，鼓鼓的嘛。我比你还多呢。”陈赓同志终于被这个小红军说服了，只好爬上马背，朝前走去。</View>
              <View> 　　他骑在马上，心情老平静不下来，从刚才遇见的小红军，想起一连串的孩子。从上海、广州直到香港的码头上，跟他打过交道的那些穷孩子，一个个浮现在他眼前。</View>
              <View> 　　“不对，我受骗了！”陈赓同志突然喊了一声，立刻调转马头，狠踢了几下马肚子，向来的路奔跑起来，等他找到那个小红军，小红军已经倒在草地上了。</View>
              <View> 　　陈赓同志吃力地把小红军抱上马背，他的手触到了小红军的干粮袋，袋子硬邦邦的，装的什么东西呢？他掏出来一看，原来是一块烧得发黑的牛膝骨，上面还有几个牙印。</View>
              <View> 　　陈赓同志全明白了。就在这个时候，小红军停止了呼吸。</View>
              <View> 　　陈赓同志一把搂住小红军，狠狠地打了自己一个嘴巴：“陈赓啊，你怎么对得起这个小兄弟啊！”</View>
            </View>
          </View>
        </AtCard>
        <View>　</View>
      </View>
    )
  }
}
