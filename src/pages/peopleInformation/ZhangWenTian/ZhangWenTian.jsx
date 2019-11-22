import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtCard } from 'taro-ui'

import './ZhangWenTian.scss'
import '../people.scss'


import sdes from '../../../pictures/iconphoto/sdes.png'
import cz from '../../../pictures/iconphoto/cz.png'
import pdes from '../../../pictures/iconphoto/pdes.png'

export default class MaoZeDong extends Component {


  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  
  config = {
    navigationBarTitleText: '张闻天'
  }

  render() {
    return (
      <View className='people'>
        <View>　</View>
        <AtCard
          title='简介'
          thumb={sdes}
        >
          张闻天（1900年8月30日——1976年7月1日），江苏省南汇县（今属上海市）人，原名应皋（也作荫皋），曾化名洛甫，字闻天。张闻天是杰出的无产阶级革命家和理论家、忠诚的马克思主义者、中国共产党早期重要领导人。
        </AtCard>
        <View>　</View>
        <AtCard
          title='他/她与长征'
          thumb={cz}
        >
          <View> 　　1933年初，随中央机关从上海迁入江西中央革命根据地。1934年1月，在中共六届五中全会上当选为中央政治局委员、中央书记处书记。2月，在中华苏维埃二大上当选为中央政府人民委员会主席。1934年10月参加长征。\n
          </View>
          <View> 　　遵义会议前夕，拥护毛泽东的正确主张。在遵义会议上，根据毛泽东的意见作了批判“左”倾军事路线的报告，为会议的成功召开作出了贡献。会后，根据中央政治局常委分工代替博古负总责；长征途中，同张国焘分裂主义进行了坚决斗争。\n
          </View>
        </AtCard>
        <View>　</View>
        <AtCard
          title='人物评价'
          thumb={pdes}
        >
         <View> 　　一个儒雅谦逊的人，一个稳重厚道的人，在事关中国命运的关键时刻，都毫不犹豫地挺身而出，明知前方阴云密布，骤雨狂风，他总是站在真理这一边。\n</View>
         <View> 　　在中国共产党和工农红军处于生死存亡的关头，他和毛泽东等一起，取得了遵义会议的胜利，实现了伟大的历史转折，挽救了党，挽救了红军；在日本军国主义侵入华北，中华民族最危险的时候，作为中共中央总负责人，他和毛泽东等一起，领导党和红军实现了从土地革命战争到抗日民族战争的转变，确立了抗日民族统一战线的策略，实现了第二次国共合作，从而为中国共产党和人民武装力量的发展壮大，为中国人民抗日战争的胜利，奠定了坚实的基础。张闻天在中共中央总负责人的岗位上恪尽了职守，立下了这两大功勋，从而确立了他的二十世纪中国伟大人物之一的地位。\n</View>
         <View> 　　张闻天具有深厚的马克思主义理论修养、高度的党性原则和敏锐的政治眼光，他一生光明磊落，无私无畏。我们缅怀张闻天同志，要学习他对党和人民事业的坚定信念，不论环境多么恶劣，道路多么崎岖，都一往无前，矢志不移。学习他敢于坚持真理、修正错误的崇高品德，当实践证明自己犯了错误的时候，勇于改正错误，同时也敢于坚持正确意见。学习他孜孜不倦、刻苦学习的精神，善于运用马克思主义的立场、观点、方法研究和解决实践中出现的新情况新问题。学习他实事求是、谦虚谨慎、艰苦朴素的优良作风，坚持深入实际，调查研究，密切联系群众，全心全意为人民服务，自觉当好人民的公仆。\n</View>
        </AtCard>
        <View>　</View>
      </View>
    )
  }
}
