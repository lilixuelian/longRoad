import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtCard } from 'taro-ui'

import './PengDeHuai.scss'
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
    navigationBarTitleText: '彭德怀'
  }

  render() {
    return (
      <View className='people'>
        <View>　</View>
        <AtCard
          title='简介'
          thumb={sdes}
        >
          彭德怀（1898年10月24日-1974年11月29日），中华人民共和国元帅（1955年）。军事家。原名彭清宗，字怀归，号得华。
        </AtCard>
        <View>　</View>
        <AtCard
          title='他/她与长征'
          thumb={cz}
        >
          <View> 　　1934年1月补选为中共第六届候补中央委员；长征开始后，率部连续突破国民党军四道封锁线，掩护中央纵队、军委纵队渡过湘江。在1935年1月举行的遵义会议上，拥护毛泽东的主张。会后率红3军团二渡赤水河，神速回师攻占娄山关，并协同红1军团再克遵义城，歼灭大量反扑之敌，取得红一方面军长征中的第一个大胜利。\n
          </View>
          <View> 　　1935年6月红一、红四方面军在川西北会合后，坚决拥护北上抗日的方针，反对张国焘的分裂活动。9月任中国工农红军陕甘支队司令员，10月与政治委员毛泽东率部到达陕北，胜利结束长征。在他指挥红军勇猛打退敌骑兵的追击后，毛泽东曾写诗赞扬他：“山高路远坑深，大军纵横驰奔，谁敢横刀立马，惟我彭大将军。”同年11月任西北革命军事委员会副主席、红一方面军司令员，参与指挥直罗镇战役。\n
          </View>
          <View> 　　1936年1月补选为中共中央政治局委员，2月任中国人民红军抗日先锋军司令员，与政治委员毛泽东指挥红军东渡黄河，挺进山西，宣传抗日，扩大红军。5月任西方野战军司令员，率部西征宁夏、陇东，扩大了苏区面积，迎接红二、红四方面军北上，实现了三大红军主力胜利会师。11月指挥山城堡战役，歼国民党军胡宗南部1个旅又2个团，迫使其停止对陕甘苏区的进攻。12月任中央革命军事委员会主席团成员。\n
          </View>
        </AtCard>
        <View>　</View>
        <AtCard
          title='历史贡献'
          thumb={history}
        >
          <Num num='1' />
          带领红一方面军获得了一系列胜利
          <Num num='2' />
          抗日战争
          <Num num='3' />
          解放战争
          <Num num='4' />
          抗美援朝
          <Num num='5' />
          参与国内国防建设
        </AtCard>
        <View>　</View>
        <AtCard
          title='人物评价'
          thumb={pdes}
        >
          <View> 　　彭德怀同志是伟大的无产阶级革命家、军事家、政治家；中国共产党、中华人民共和国与中国人民解放军的卓越领导人之一；中国人民解放军的缔造者之一，中华人民共和国的开国元勋之一；1955年被授予元帅军衔和一级八一勋章、一级独立自由勋章、一级解放勋章。\n</View>
          <View> 　　在中国革命的各个历史时期，彭德怀同志都担任共产党军队的高级领导职务，是毛泽东、朱德同志指挥全军的得力助手；他具有非凡胆略和精湛的军事指挥艺术，在国内外享有崇高的声望；彭德怀同志为党和人民立下的赫赫战功，永远载入中国革命的光荣史册。\n</View>
          <View> 　　彭德怀同志为毛泽东军事思想的形成和发展作出了重要贡献。他认真研究中国革命战争的特点和规律，创造性地执行毛泽东同志提出的战略方针和战术原则，丰富和发展了人民战争的战略战术。他毕生所积累的丰富经验，对加强新形势下的国防和军队建设，仍然具有重要的意义。\n</View>
          <View> 　　彭德怀同志有着坚定的共产主义信念和坚强的党性原则，始终保持坦荡的革命胸怀，保持艰苦奋斗的作风。在许多重要历史关头，他总是挺身而出，坚持真理，坚定地维护党的利益；他为党和人民作出了巨大贡献，却从不居功自傲，从不接受任何特殊待遇，严于律己，克勤克俭，他极其关心人民群众之疾苦，始终保持劳动人民之本色\n</View>
        </AtCard>
        <View>　</View>
      </View>
    )
  }
}
