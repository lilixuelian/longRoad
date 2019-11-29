import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import '../Article.scss'

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
          <View className='title'>吃水不忘挖井人</View>
        </AtCard>
        <View>　</View>
        <AtCard
          title='内容'
          thumb={content}
        >
          <View className='content'>
            <View>
              <View> 　　瑞金城外有个村子叫沙洲坝。毛主席在江西领导革命的时候，在那儿住过。\n</View>
              <View> 　　一天，毛主席看见一个老乡挑着浑浊的水往家里走，就问：“老乡，这水挑来做什么用呀？”老乡回答说：“吃呀！”毛主席疑惑地问：“水这么脏，能吃吗？”老乡苦笑着说：“没法子，再脏的水也得吃呀！”毛主席又问：“是从哪里挑的？”老乡回答：“从塘里挑的。”毛主席请老乡带他去看看。走了一阵，只见一个不大的水塘，杂草丛生，池水污浊。全村人洗衣、洗菜、吃水全在这里。毛主席关切地问：“能不能到别处挑水吃？”老乡摇摇头，说：“我们沙洲坝就是缺水呀！挑担水要走好几里路。”毛主席皱了皱眉头，若有所思地走了。</View>
              <View> 　　第二天，毛主席找来村里人一起商量挖水井的事。大家一起勘察水源，选择井位。当井位确定后，毛主席挽起衣袖，卷起裤腿，带头挖了起来。于是，大伙挖的挖，铲的铲，干得热火朝天。</View>
              <View> 　　在挖井的日子里，毛主席和临时中央政府的其他领导人，一有空就到工地参加劳动。经过十几天的奋战，水井挖成了，沙洲坝的人民终于喝上了清澈甘甜的井水。群众激动地说：“我们从来没有喝过这么甜的水，毛主席真是我们的大恩人哪！”</View>
              <View> 　　解放以后，沙洲坝人民在井旁立了一块石碑，上面刻着：“吃水不忘挖井人，时刻想念毛主席！”</View>
            </View>
          </View>
        </AtCard>
        <View>　</View>
      </View>
    )
  }
}
