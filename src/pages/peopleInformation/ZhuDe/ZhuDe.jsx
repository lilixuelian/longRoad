import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtCard } from 'taro-ui'

import './ZhuDe.scss'
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
    navigationBarTitleText: '朱德'
  }

  render() {
    return (
      <View className='people'>
        <View>　</View>
        <AtCard
          title='简介'
          thumb={sdes}
        >
          朱德（1886年12月1日-1976年7月6日），字玉阶，原名朱代珍，曾用名朱建德，伟大的马克思主义者，无产阶级革命家、政治家和军事家，中国共产党、中国人民解放军和中华人民共和国的主要缔造者和领导人之一。中华人民共和国十大元帅之首。
        </AtCard>
        <View>　</View>
        <AtCard
          title='他/她与长征'
          thumb={cz}
        >
          <View> 　　1933年\n</View>
          <View> 　　3月，和周恩来率红一方面军粉碎国民党军的第四次“围剿”。9月，国民党军发动第五次大规模“围剿”，共产国际派遣的军事顾问李德到达中央苏区后，采用错误的战略战术。\n</View>
          <View> 　　\n</View>
          <View> 　　1934年\n</View>
          <View> 　　1月，出席中共六届五中全会，当选为中央政治局委员。同月，在中华苏维埃第二次全国代表大会上作《红军建设》的报告，继续当选为中央执行委员、中央革命军事委员会主席。10月，红军被迫进行战略转移。\n</View>
          <View> 　　\n</View>
          <View> 　　1935年\n</View>
          <View> 　　1月，出席在遵义召开的中共中央政治局扩大会议，支持毛泽东的正确主张。会议决定仍由朱德、周恩来为军事指挥者。6月，红一方面军和红四方面军在四川懋功会师。8月，红一、四方面军混合编组，分左、右两路军北上，朱德率红军总部随左路军行动。9月，张国焘坚持南下的错误方针、另立中央。朱德和刘伯承一起对张国焘分裂党、分裂红军的错误行为进行不妥协的斗争。\n</View>
          <View> 　　\n</View>
          <View> 　　1936年\n</View>
          <View> 　　6月，促使红二、六军团北上与红四方面军在川西甘孜地区会合，再一起北上。10月，率红二、四方面军到达甘肃，与红一方面军会师。\n</View>
        </AtCard>
        <View>　</View>
        <AtCard
          title='历史贡献'
          thumb={history}
        >
          <Num num='1' />
          长征
          <Num num='2' />
          抗日战争
          <Num num='3' />
          解放战争
          <Num num='4' />
          国内政治建设
        </AtCard>
        <View>　</View>
        <AtCard
          title='人物评价'
          thumb={pdes}
        >
          朱德同志参加革命70年，经历了旧民主主义革命、新民主主义革命、社会主义革命、社会主义建设几个历史时期，经历过许多磨难和险境，为中国人民解放事业和社会主义建设事业建立了不朽功勋，深受全党全军全国各族人民爱戴和崇敬。毛泽东同志称赞朱德同志是“人民的光荣”。这是党对朱德同志的最高评价，这是人民对朱德同志的最高评价。
        </AtCard>
        <View>　</View>
      </View>
    )
  }
}
