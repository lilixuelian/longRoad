import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtCard } from 'taro-ui'

import './MaoZeDong.scss'
import '../people.scss'

import sdes from '../../../pictures/iconphoto/sdes.png'
import cz from '../../../pictures/iconphoto/cz.png'
import history from '../../../pictures/iconphoto/history.png'
import pdes from '../../../pictures/iconphoto/pdes.png'
import Num from '../../../components/Number/Num/Num'

export default class MaoZeDong extends Component {


  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  
  config = {
    navigationBarTitleText: '毛泽东'
  }

  render() {
    return (
      <View className='people'>
        <View>　</View>
        <AtCard
          title='简介'
          thumb={sdes}
        >
          毛泽东（1893年12月26日-1976年9月9日），字润之（原作咏芝，后改润芝），笔名子任。湖南湘潭人。中国人民的领袖，伟大的马克思主义者，无产阶级革命家、战略家和理论家，中国共产党、中国人民解放军和中华人民共和国的主要缔造者和领导人，诗人，书法家。
        </AtCard>
        <View>　</View>
        <AtCard
          title='他/她与长征'
          thumb={cz}
        >
          <View> 　　1934年\n
          </View>
          <View> 　　10月18日，傍晚，带领警卫班离开于都城，踏上长征的路途。\n
          </View>
          <View> 　　11月底，湘江之战中红军遭受惨重损失。30日，随军委第一野战纵队渡过湘江。\n
          </View>
          <View> 　　12月12日，在湖南通道召开的中共中央负责人紧急会议上，力主红军放弃原定向湘西与红二、六军团会合的计划，改向敌人力量薄弱的贵州前进，被采纳。\n
          </View>
          <View> 　　\n
          </View>
          <View> 　　1935年\n
          </View>
          <View> 　　1月15日至17日，出席在贵州遵义召开的中共中央政治局扩大会议，被增选为中央政治局常委。会议结束了王明“左”倾冒险主义在中共中央的统治，实际确立了以毛泽东为代表的新的中央领导。\n
          </View>
          <View> 　　3月，同周恩来、王稼祥组成三人军事指挥小组。\n
          </View>
          <View> 　　3月至5月，同周恩来等指挥红一方面军四渡赤水，巧渡金沙江，飞夺泸定桥，取得战略转移中具有决定意义的胜利。\n
          </View>
          <View> 　　6月15日，同项英等发表《为反对日本并吞华北和蒋介石卖国宣言》。\n
          </View>
          <View> 　　6月，率红一方面军同红四方面军在四川西部会合。不久，即同张国焘的逃跑主义、分裂主义进行斗争。\n
          </View>
          <View> 　　10月19日，率领中国工农红军陕甘支队到达陕西延安吴起镇。红军胜利完成长征。\n
          </View>
          <View> 　　12月，出席在陕北瓦窑堡召开的中共中央政治局会议。会议确定了建立抗日民族统一战线的策略。\n
          </View>
          <View> 　　12月27日，在党的活动分子会议上作《论反对日本帝国主义的策略》报告，阐发抗日民族统一战线的策略方针。\n
          </View>
          <View> 　　\n
          </View>
          <View> 　　1936年\n
          </View>
          <View> 　　1月25日，同周恩来、彭德怀等二十位红军将领联名发出《为红军愿意同东北军联合抗日致东北军全体将士书》，提出关于组织国防政府和抗日联军的具体办法，建议互派代表共同协商。\n
          </View>
          <View> 　　2月至5月，同彭德怀率领红一方面军主力渡黄河东征。\n
          </View>
          <View> 　　3月，向南京当局提出停止内战、一致抗日的五点意见。\n
          </View>
          <View> 　　6月1日，同朱德发布关于救国救民的主张二十条。\n
          </View>
          <View> 　　6月12日，同朱德发布宣言，对“两广事变”表示支持，提出抗日救国的八项纲领。\n
          </View>
          <View> 　　7月至10月，在陕北延安多次会见美国记者斯诺，回答他提出的有关中国革命和工农红军等多方面的问题，并介绍了自己的经历。\n
          </View>
          <View> 　　8月10日，出席中共中央政治局会议，作关于国共两党关系和统一战线问题的报告。\n
          </View>
          <View> 　　8月25日，起草《中国共产党致中国国民党书》，呼吁一致抗日。\n
          </View>
        </AtCard>
        <View>　</View>
        <AtCard
          title='历史贡献'
          thumb={history}
        >
          <Num num='1' />
          <View> 　　毛泽东引导中国走上社会主义发展道路，确立了社会主义基本制度。\n
          </View>
          <Num num='2' />
          <View> 　　毛泽东领导中国人民开辟了社会主义现代化建设道路，开始了沿着社会主义道路实现中华民族伟大复兴的新纪元。\n
          </View>
          <Num num='3' />
          <View> 　　开创了人民当家作主的新时代，开始了实现社会主义民主的艰辛而曲折的探索。\n
          </View>
          <Num num='4' />
          <View> 　　奠定了中国共产党的执政地位，对保持马克思主义政党的先进性和执政地位作了不懈的探索。\n
          </View>
          <Num num='5' />
          <View> 　　奠定了新中国在国际上的大国地位，为开创独立自主的和平外交作了不懈的努力。\n
          </View>
        </AtCard>
        <View>　</View>
        <AtCard
          title='人物评价'
          thumb={pdes}
        >
          <View> 　　毛泽东虽然在晚年犯了严重的错误，但是就他的一生来看，他对中国革命的不可争论的功绩远大于他的过失，他的功绩是第一位的，错误是第二位的，他仍然受到中国人民的崇敬。\n</View>
          <View> 　　中国共产党在他逝世5年以后，对他的全部革命活动和革命思想以中央委员会决议的形式作出了全面的评价。\n</View>
          <View> 　　毛泽东思想作为马克思主义在中国的发展，仍然是中国共产党的指导思想。\n</View>
        </AtCard>
        <View>　</View>
      </View>
    )
  }
}
