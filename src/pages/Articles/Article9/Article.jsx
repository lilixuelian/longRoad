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
          <View className='title'>草地夜行</View>
        </AtCard>
        <View>　</View>
        <AtCard
          title='内容'
          thumb={content}
        >
          <View className='content'>
            <View>
              <View> 　　茫茫的草海，一眼望不到边。大队人马已经过去了，留下一条踩得稀烂的路，一直伸向远方。</View>
              <View> 　　干粮早就吃光了，皮带也煮着吃了。我空着肚子，拖着两条僵硬的腿，一步一挨地向前走着。背上的枪支和子弹就像一座山似的，压得我喘不过气来。唉！就是在这稀泥地上躺一会儿也好啊！ 
          迎面走来一个同志，冲着我大声嚷：“小鬼，你这算什么行军啊？照这样，三年也走不到陕北！” </View>
              <View> 　　他这样小看人，真把我气坏了。我粗声粗气地回答：“别把人看扁了！从大别山走到这儿，少说也走了万儿八千里路。瞧！枪不是还在我的肩膀上吗？” </View>
              <View> 　　他看了看我，笑了起来，就和我并肩朝前走。他比我高两头，宽宽的肩膀，魁梧的身材，只是脸又黄又瘦，两只眼睛深深地陷了下去。 </View>
              <View> 　　 “小同志，你的老家在哪儿？”他问我。 </View>
              <View> 　　 “金寨斑竹园！听说过吗？” </View>
              <View> 　　“啊，斑竹园！有名的金寨大暴动，就是从你们那儿搞起来的。我在那儿卖过帽子。” </View>
              <View> 　　一点不错，暴动前，我们村里来过几个卖帽子的人。我记得清清楚楚，爸爸还给我买了一顶。回家来掀开帽里子一看，里面有张小纸条，写着“打倒土豪劣绅”。真想不到，当年卖帽子的同志竟在这里碰上了。 </View>
              <View> 　　我立刻对他产生了敬佩的感情，就亲热地问他：“同志，你在哪部分工作？我怎么从来没见过你呀？”“我吗？在军部。现在出来找你们这些掉队的小鬼。”他一边说，一边摘下我的枪，连空干粮袋也摘了去。</View>
              <View> 　　“咱们得快点走呀！你看，太阳快落了。天黑以前咱们必须赶上部队。这草地到处是深潭，掉下去可就不能再革命了。” </View>
              <View> 　　听了他的话，我快走几步，紧紧地跟着他，但是不一会儿，我又落了一大段。 </View>
              <View> 　　他焦急地看看天，又看看我，说：“来吧，我背你走！”我说什么也不同意。这一下他可火了：“别磨蹭了！你想叫咱们俩都丧命吗？”他不容分说，背起我就往前走。</View>
              <View> 　　天边的最后一丝光亮也被黑暗吞没了。满天堆起了乌云，不一会儿下起大雨来。我一再请求他放下我，怎么说他也不肯，仍旧一步一滑地背着我向前走。 </View>
              <View> 　　突然，他的身子猛地往下一沉。“小鬼，快离开我！”他急忙说，“我掉进泥潭里了。” </View>
              <View> 　　我心里一惊，不知怎么办好，只觉得自己也随着他往下陷。这时候，他用力把我往上一顶，一下子把我甩在一边，大声说：“快离开我，咱们两个不能都牺牲！……要……要记住革命！……”</View>
              <View> 　　我使劲伸手去拉他，可是什么也没有抓住。他陷下去了已经没顶了。 </View>
              <View> 　　我的心疼得像刀绞一样，眼泪不住地往下流。多么坚强的同志！为了我这样的小鬼，为了革命，他被这可恶的草地夺去了生命！ </View>
              <View> 　　风，呼呼地刮着。雨，哗哗地下着。黑暗笼罩着大地。“要记住革命！”——我想起他牺牲前说的话。对，要记住革命！我抬起头来，透过无边的风雨，透过无边的黑暗，我仿佛看见了一条光明大路，这条大路一直通向遥远的陕北。我鼓起勇气，迈开大步，向着部队前进的方向走去。</View>
            </View>
          </View>
        </AtCard>
        <View>　</View>
      </View>
    )
  }
}
