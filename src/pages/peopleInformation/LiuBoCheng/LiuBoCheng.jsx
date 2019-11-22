import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtCard } from 'taro-ui'

import './LiuBoCheng.scss'
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
    navigationBarTitleText: '刘伯承'
  }

  render() {
    return (
      <View className='people'>
        <View>　</View>
        <AtCard
          title='简介'
          thumb={sdes}
        >
          刘伯承（1892年12月4日-1986年10月7日），原名刘明昭，曾用名刘伯坚，重庆市开州人。中国共产党的优秀党员，中华人民共和国元帅，中国人民解放军缔造者之一，伟大的无产阶级革命家、军事家、马克思主义军事理论家，军事教育家。
        </AtCard>
        <View>　</View>
        <AtCard
          title='他/她与长征'
          thumb={cz}
        >
          <View> 　　1932年1月前往中央苏区首府瑞金，任中央军事政治学校校长兼政治委员。10月任中国工农红军总参谋长，协助朱德、周恩来在前方指挥作战，取得第四次反“围剿”作战的胜利。期间，撰写《现在游击队要解答的问题》、《到敌人后方开展游击战争的几个教训》等，并翻译多篇苏军教材和理论文章，促进了红军干部军事素质的提高。\n
          </View>
          <View> 　　1934年在第五次反“围剿”中，因反对共产国际派来的军事顾问李德在作战指挥上的教条主义和专横作风而被撤销总参谋长职务，降任第5军团参谋长。\n
          </View>
          <View> 　　长征初期，协助军团长董振堂执行后卫任务，掩护中央机关通过国民党军四道封锁线。1934年底复任红军总参谋长，兼中央纵队司令员。\n
          </View>
          <View> 　　1935年1月指挥先遣部队突破乌江，智取遵义，甩开了敌军主力，使伤亡大半、疲惫不堪的中央红军获得了一次难得的短期休整。遵义会议上，他坚决拥护毛泽东的主张。会后，协助毛泽东等组织指挥了四渡赤水、二进遵义等战役，使部队跳出了敌军包围圈，直插云南北部，并亲率干部团抢占皎平渡，保障全军渡过天险金沙江。5月兼任红军先遣队司令，同政治委员聂荣臻率部进入大凉山，与彝族首领小叶丹歃血为盟，使全军顺利通过彝族聚居区。继而指挥所部在安顺场强渡大渡河，打开红军北上的通路。红一、红四方面军会合后，坚决执行中共中央关于北上抗日的方针，在逆境中和朱德一起同张国焘的分裂活动进行了斗争，被张国焘撤销总参谋长职务，降为红四方面军红军大学校长。\n
          </View>
          <View> 　　1936年10月红军三大主力会师后，任前敌总指挥部参谋长、红军总参谋长、援西军司令员等职。\n
          </View>
        </AtCard>
        <View>　</View>
        <AtCard
          title='历史贡献'
          thumb={history}
        >
          <Num num='1' />
          　辛亥革命与讨袁护国
          <Num num='2' />
          　北伐与土地革命战争
          <Num num='3' />
          　参与长征
          <Num num='4' />
          　抗日战争
          <Num num='5' />
          　解放战争
        </AtCard>
        <View>　</View>
        <AtCard
          title='人物评价'
          thumb={pdes}
        >
           <View> 　　刘伯承的一生，经历了中国革命战争的全部过程。他判断敌情准确，计划战斗周密，善于出奇制胜，以神机妙算、足智多谋著称。\n</View>
           <View> 　　朱德元帅曾赞誉他“具有仁、信、智、勇、严的军人品质，有古名将风，为国家不可多得的将才”。\n</View>
           <View> 　　陈毅元帅留下过“论兵新孙吴，守土古范韩”的名句。\n</View>
           <View> 　　邓小平同志在《悼伯承》一文中写道：“伯承同志是我党我军的大知识分子，大军事家。他的军事指挥艺术和军事理论造诣，在国内外屈指可数。”“对于毛泽东军事思想的形成和发展，伯承是有大贡献的。”\n</View>
           <View> 　　面对荣誉和功劳，他本人生前曾谦逊地说：“我自己的一生，如果有一点点成就，那是党和毛主席的领导所给我的。离开党，像我们这些人，都不会搞出什么名堂来的。因此，我愿意在党的领导下，做毛主席的小学生，为中国人民尽力。如果我一旦死了，能在我的墓碑上题上‘中国布尔什维克刘伯承之墓’十二个大字，那就是我最大的光荣。”\n</View>
        </AtCard>
        <View>　</View>
      </View>
    )
  }
}
