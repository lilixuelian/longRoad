import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtCard } from 'taro-ui'
import './HeZiZhen.scss'
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
    navigationBarTitleText: '贺子珍'
  }

  render() {
    return (
      <View className='people'>
        <View>　</View>
        <AtCard
          title='简介'
          thumb={sdes}
        >
          贺子珍（1909年9月28日-1984年4月19日），原名桂圆，又名自珍，江西永新乡绅贺焕文长女，毛泽东第二任妻子，贺子珍与毛泽东生三子三女，李敏是贺子珍和毛泽东惟一在世的孩子。
        </AtCard>
        <View>　</View>
        <AtCard
          title='他/她与长征'
          thumb={cz}
        >
          <View> 　　1935年参加红军长征。在长征路上，为掩护伤员，头、背、肺部被炸入弹片，终生没有取出。1950年被定为三级甲等残疾，但终生没有领取残疾军人抚恤金。\n
          </View>
          <View> 　　1937年（28岁）年冬去苏联治病，但经苏联医生证实，弹片已无法取出。后入东方大学学习毕业后，留在伊万诺沃国际儿童院东方部工作，因女儿病重和儿童院领导发生争执，由时任第三国际东方部长的王明指使，被强制送入精神病院拘押。\n
          </View>
          <View> 　　1947年（38岁）经王稼祥和罗荣桓向第三国际交涉，被放回国。但毛泽东已和江青结婚。贺子珍留在东北任东北财经委员会党支部书记。\n
          </View>
          <View> 　　1948年（39岁）回国，曾在沈阳财政厅任处长。在哈尔滨参加全国劳动大会。\n
          </View>
          <View> 　　1949年（40岁）秋，中华人民共和国成立后，任浙江省妇联主席，10月调中共上海市委组织部工作。\n
          </View>
          <View> 　　1959年夏，贺子珍与毛泽东在庐山最后一次相见。\n
          </View>
          <View> 　　1984年4月19日17时17分，身体不好，一直在上海医治的贺子珍与世长辞，享年75岁。后葬于八宝山革命公墓。\n
          </View>
        </AtCard>
        <View>　</View>
        <AtCard
          title='人物评价'
          thumb={pdes}
        >
          <View> 　　贺子珍同志是坚强的共产主义战士，中国共产党优秀党员，她的一生是革命的一生，艰苦奋斗的一生。\n</View>
          <View> 　　贺子珍，这位平凡而伟大的女性，这位最早上井冈山的女共产党员终于走完了她坎坷不平的人生之路，含着微笑离开了人世。她的一生中有慷慨激昂、英勇悲壮的战斗岁月，有遭受磨难与不幸的艰难时光，更多的是心里流着血、眼里流着泪的沉默的悲苦日子。但是，人们不会忘记她，因为她为中国革命献出了自己的青春，她——一位平凡的女性，为中国革命几乎流尽了身上最后一滴血……是她，伴随毛泽东一起度过了中国革命历史上最艰难的阶段，也是她，在革命胜利之后，为了大局默默忍受个人的悲苦，过着孤寂的生活。然而，中国革命的历史丰碑上却镌刻着一个不朽的名字：她就是——贺子珍!\n</View>
        </AtCard>
        <View>　</View>
      </View>
    )
  }
}
