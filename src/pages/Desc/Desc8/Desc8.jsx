import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtCard } from 'taro-ui'
import './Desc8.scss'
import '../Desc.scss'
import place from '../../../pictures/iconphoto/place.png'
import time from '../../../pictures/iconphoto/time.png'
import content from '../../../pictures/iconphoto/content.png'
import reason from '../../../pictures/iconphoto/reason.png'
import One from '../../../components/Number/One/One'
import Two from '../../../components/Number/Two/Two'
import Three from '../../../components/Number/Three/Three'
import Four from '../../../components/Number/Four/Four'

export default class Desc8 extends Component {

  config = {
    navigationBarTitleText: '翻雪山'
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='Desc'>
        <View>　</View>
        <AtCard
          title='时间'
          thumb={time}
        >
          1935年6月12日到7月8日
        </AtCard>
        <View>　</View>
        <AtCard
          title='地点'
          thumb={place}
        >
          <View> 　　夹金山位于四川省雅安市宝兴县境内，是省级风景名胜区、国家级森林公园，是中国工农红军二万五千里长征翻越的第一座大雪山，也是雅安通往小金四姑娘山的必经之道。\n
          </View>
          <View> 　　夹金山又名大雪山，以雪景著称。这里原始森林茂密，自然风光旖旎，雪峰晶莹，主峰海拔为4930米，是青衣江的发源地。\n
          </View>
        </AtCard>
        <View>　</View>
        <AtCard
          title='内容'
          thumb={content}
        >
          <One></One>
          <View> 　　1935年6月，中央红军在川康边地区翻越了终年积雪、气候变化无常的大雪山——夹金山。7月上旬，红一方面军又相继翻越了梦笔山、长板山（又称亚克夏山、马塘梁子）、
            仓德山（又称昌德山、昌德梁子）、打古山（又称拖罗岗、施罗山、塔鲁岗）等雪山。雪山地区的行程约31天，1350公里。\n</View>
          <View> 　　\n</View>
          <Two></Two>
          <View> 　　1936年4月至7月，红二方面军（红二、六军团）翻越了雅哈雪山、磊雪山、小雪山、茨布腊山、扎拉牙卡山、藏巴拉雪山、东隆山、米拉山、玉龙等雪山。 雅哈雪山是红二、
            六军团从云南渡金沙江后北上西康甘孜途中，于1936年4月底中翻越的一座大雪山。雅哈雪山海拔5300米，雪峰林立，高耸云端，金沙江、澜沧江的激流不断冲涮的峡谷陡峭异常，很难通行。
            尽管雪山陡峭险峻，道路崎岖，气候严寒，行走时呼吸困难，红二、六军团广大指战员还是以一往无前的精神把哈巴雪山踩在了脚下。\n</View>
          <View> 　　\n</View>
          <Three></Three>
          <View> 　　1935年6月至1936年7月，红四方面军先后翻越了虹桥山、鹧鸪山、梦笔山、长板山、仓德山、打古山、夹金山、格达梁子、党岭山、折多山、罗锅梁子、剪子湾山、卡子拉山（喜委拉卡山）等雪山。
            在所经过的四川、西康、青海、甘肃四省内，翻越了海拔4400米以上的雪山共5座，其中梦笔山、夹金山都是两次经过，虹桥山、折多山、巴郎山是一次经过。虹桥山海拔4592米，是红四方面军翻过的雪山中最高的一座。
            党岭雪山，海拔5000多米，是红军三大主力在长征途中翻越的最高雪山 。据美国著名记者斯诺统计：红军一共爬过了18条山脉，其中5条终年冰雪覆盖。\n</View>
          <View> 　　\n</View>
          <Four></Four>
          <View> 　　6月12日，中央红军先头部队终于翻过几座大雪山，在北进途中与红四方面军先头部队胜利会师。两大主力红军会师后，总兵力达10万余人，士气高昂。但张国焘却以种种借口延误红四方面军主力北上，
            向中央索取更多权力。为维护红军的团结，党中央于7月18日发出通知，任命张国焘为红军总政治委员，随后又对红军序列进行了一系列调整。\n</View>
        </AtCard>
        <View>　</View>
        <AtCard
          title='原因'
          thumb={reason}
        >
          <View> 　　美国作家索尔兹·哈里森伯里在他写的《长征———前所未闻的故事》中，对红军为什么过夹金山，作了专门的解释。他写道：毛泽东当时有三条路可以选择。第一条是雪山以西，走一条海拔高但商队常来常往的路线，
            到川西北和青海的藏族地区首府阿坝。这条路稍远一点，几乎全是要穿过人口相当稠密的持敌视态度的藏民地区。第二条是，走雪山以东的另一条路，最后到松潘县，但是沿路遭受国民党袭击，危险相当大。第三个选择是，
            走雪山中间的一条崎岖山路，这是一条很糟糕的山间小径，且当地居民都没有走过这条路。但这第三条路将会最接近于他的目标：同张国焘的四方面军会师。\n</View>
        </AtCard>
        <View>　</View>
      </View>
    )
  }
}
