import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtCard } from 'taro-ui'
import './LiuShaoQi.scss'
import '../people.scss'


import sdes from '../../../pictures/iconphoto/sdes.png'
import cz from '../../../pictures/iconphoto/cz.png'
import history from '../../../pictures/iconphoto/history.png'
import pdes from '../../../pictures/iconphoto/pdes.png'

export default class MaoZeDong extends Component {


  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  
  config = {
    navigationBarTitleText: '刘少奇'
  }

  render() {
    return (
      <View className='people'>
        <View>　</View>
        <AtCard
          title='简介'
          thumb={sdes}
        >
          刘少奇（1898年11月24日-1969年11月12日），生于湖南省宁乡县，伟大的马克思主义者，伟大的无产阶级革命家、政治家、理论家，党和国家主要领导人之一，中华人民共和国开国元勋，是以毛泽东同志为核心的党的第一代中央领导集体的重要成员。
        </AtCard>
        <View>　</View>
        <AtCard
          title='他/她与长征'
          thumb={cz}
        >
          <View> 　　1932年冬进入位于江西省南部和福建省西部的中央革命根据地，领导职工运动，后任中共福建省委书记。\n
          </View>
          <View> 　　1934年10月参加长征。1935年1月在贵州省遵义县城召开的中央政治局扩大会议上，他支持毛泽东的正确主张。\n
          </View>
          <View> 　　1936年春赴华北，先后任中共中央代表、北方局书记、坚定地执行了中共中央关于建立抗日民族统一战线的新政策，并对过去党的秘密工作中的错误——关门主义和冒险主义进行了系统的批评。\n
          </View>
          <View> 　　1966年“文化大革命”开始后，他受到错误的批判，并遭到林彪、江青反革命集团的政治陷害和人身摧残，于1969年11月12日病逝。
          </View>
        </AtCard>
        <View>　</View>
        <AtCard
          title='历史贡献'
          thumb={history}
        >
          刘少奇是中国共产党领导的工人运动的著名领袖和主要领导者，是党的正确路线在白区工作中的杰出代表。是华北、华中抗日根据地的主要创建者和领导者。为绘制新中国建设蓝图作了重要理论准备。是中国社会主义建设一系列重大决策的制定和实施者之一。
        </AtCard>
        <View>　</View>
        <AtCard
          title='人物评价'
          thumb={pdes}
        >
          <View> 　　刘少奇同志是一位品德高尚的共产党员。\n</View>
          <View> 　　刘少奇同志一贯重视研究马列主义理论。他善于根据理论原则，联系实际，周密考察、具体分析问题，具有政治上的远见卓识。\n</View>
          <View> 　　刘少奇同志和人民同呼吸共命运。他强调国家主席是人民的勤务员，革命工作没有高低贵贱之分，在任何岗位上都应该全心全意地为人民服务。对于工作中的缺点和错误，他总是从人民的利益出发，勇于纠正，勇于承担责任。在遭受林彪、江青一伙残酷迫害、处境异常艰难的时候，他始终保持共产党人的革命信念。\n</View>
          <View> 　　刘少奇同志言行一致。他在《论共产党员的修养》中对广大党员提出的党性锻炼的要求，自己都以身作则地实践了。他不隐瞒自己的观点，敢于坚持真理，抵制错误。他从来都把自己放在组织之中，尊重集体领导，服从组织决定。\n</View>
          <View> 　　刘少奇同志在对敌斗争中机智沉着，立场坚定。他两次被反动统治阶级逮捕，都坚贞不屈。在革命紧急关头，他总是不避艰险，到最困难的地方去，挑最重的担子。\n</View>
        </AtCard>
        <View>　</View>
      </View>
    )
  }
}
