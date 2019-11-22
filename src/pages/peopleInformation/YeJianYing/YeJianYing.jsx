import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtCard } from 'taro-ui'

import './YeJianYing.scss'
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
    navigationBarTitleText: '叶剑英'
  }

  render() {
    return (
      <View className='people'>
        <View>　</View>
        <AtCard
          title='简介'
          thumb={sdes}
        >
          叶剑英（1897年04月28日-1986年10月22日），原名叶宜伟，字沧白，广东省梅县人。中国伟大的无产阶级革命家、政治家、军事家、战略家，久经考验的共产主义者、坚定的马克思主义者，中华人民共和国和中国人民解放军的缔造者和领导人之一，中华人民共和国十大元帅之一，中国特色社会主义改革开放和现代化建设的重要开拓者和奠基人。
        </AtCard>
        <View>　</View>
        <AtCard
          title='他/她与长征'
          thumb={cz}
        >
          <View> 　　1934年10月，中央红军进行长征。叶剑英任军委第一纵队司令员。部队进入广西山区，他在一次敌机轰炸中负伤，带伤坚持行军、作战。\n
          </View>
          <View> 　　1935年1月，党中央在遵义召开政治局扩大会议。在这个重大历史转折中，叶剑英坚决拥护毛泽东的正确主张。3月，调任三军团参谋长。7月，任红军前敌总指挥部参谋长。8月，党中央政治局在毛儿盖开会，决定部队分左、右两路军过草地北上甘南。率领左路军的张国焘，进行分裂党和红军的活动，拒绝执行党中央的北上方针，并企图危害党中央。叶剑英识破了张国焘的阴谋，立即报告毛泽东。党中央在巴西召开紧急会议，决定迅速率领红一方面军主力北上，终于脱离险境。叶剑英在这个危急关头保护了党中央。毛泽东后来屡次称赞这是叶剑英在关键时刻为党为革命建立的一个大功。9月中旬，叶剑英任由一、三军团改编的中国工农红军陕甘支队参谋长。中央红军到达陕北后，任红一方面军和军委参谋长。\n
          </View>
        </AtCard>
        <View>　</View>
        <AtCard
          title='历史贡献'
          thumb={history}
        >
          <View> 　　叶剑英同志是久经考验的共产主义忠诚战士，坚定的马克思主义者，伟大的无产阶级革命家、 政治家、军事家，中国人民解放军的缔造者之一，中华人民共和国的开国元勋，长期担任党、国家和军队重要领导职务的卓越领导人。\n</View>
          <View> 　　在六十多年的革命生涯中，他为中国人民的解放事业和社会主义建设事业殚精竭虑，作出了重大贡献，建立了丰功伟绩，深受全党、全军和全国人民的爱戴与敬重。叶剑英同志从青年时代起就立志追求真理、救国救民。他投身于孙中山先生领导的民主主义革命，征讨桂系军阀，抗击陈炯明叛军，护卫孙中山脱险，参与创办黄埔军校，驰骋东征和北伐战场，成为国民革命军的名将。他从斗争实践中认识到，只有马克思列宁主义和中国共产党才能救中国。1927年，在蒋介石和汪精卫相继背叛革命、大批共产党人惨遭杀害的严峻时刻，他毅然通电反蒋，加入中国共产党，由一个爱国的民主主义者转变为共产主义者。从此他对共产主义这一人类社会发展的最高理想坚信不移，并为之执着地奋斗了一生。叶剑英同志为实现中华民族的独立和中国人民的解放建立了光辉业绩。在大革命失败后的白色恐怖中，他坚定机敏地策应南昌起义的组织准备工作，参加领导广州起义。这两次起义和秋收起义一起，成为第二次国内革命战争和创建人民军队的伟大开端。在中央苏区，他拥护毛泽东同志的正确路线，参与第二、第三、第四次反“围剿”的作战指挥，为红军建设作出重要贡献。长征途中，他坚决维护全党全军的团结，机智勇敢地同张国焘分裂红军、危害党中央的阴谋作斗争，为党中央和红军胜利北上立了大功。毛泽东同志后来曾多次称赞叶剑英同志在这一关键时刻“救了党，救了红军”。红军到达陕北后，他为党的抗日民族统一战线的建立和发展，做了大量工作。根据党中央的方针，他协助周恩来同志，促成西安事变的和平解决，形成国共两党再次合作、一致抗日的局面。抗日战争爆发后，他先后到南京、武汉、长沙和重庆等地参加党的领导工作，坚持党的抗日主张和统一战线政策，积极扩大党的影响。回到延安军委总部后，他协助毛泽东、朱德同志指挥我军对日作战。抗战胜利后，他协助周恩来同志同国民党谈判，达成停止内战的协议。随后他领导中共代表团在北平进行军事调处，同国民党进行针锋相对的斗争，揭露国民党当局破坏停战、发动内战的真实面目。解放战争时期，他在晋西北领导中央后方委员会的工作，有力地保证了党中央和毛泽东同志转战陕北、指挥全军作战。他为北平的和平解放和接管做了大量工作。他指挥解放广东和海南岛的战役，夺取华南战场的最后胜利。叶剑英同志戎马一生，英勇善战，为中国革命的胜利建立了不朽的历史功勋。\n</View>
          <View> 　　新中国成立后，叶剑英同志为社会主义革命和建设事业作出了重要贡献。他主持华南、中南地区工作期间，胜利完成了剿匪、土改、建立人民政权和恢复发展生产等各项任务。一九五四年后，他长期担任中央军委领导工作，创造性地运用毛泽东军事思想，领导和组织全军的教育训练，开拓军事科学研究，为建设现代化正规化的革命军队呕心沥血，成绩斐然。“文化大革命”期间，他坚决同林彪、江青反革命集团作斗争，为维护军队和全国的稳定，为抵制和纠正“文化大革命”的错误，奋不顾身，顽强努力。一九七六年，叶剑英同志同中央其他领导同志一道，根据中央政治局多数同志的意见，代表党和人民的意志，一举粉碎了江青反革命集团，从危难中挽救了党、挽救了国家。在这场斗争中，他起了决定性的作用。叶剑英同志排除阻力，坚决主张请邓小平、陈云同志等老一辈革命家立即出来担任党和国家的领导工作，坚决主张平反一切冤假错案，坚决支持关于真理标准问题的讨论，为党的十一届三中全会确立正确的路线方针政策，实现党和国家工作的伟大历史性转折，作出了重要贡献。他全力支持邓小平同志开创的社会主义改革开放和现代化建设事业。他主持全国人大工作期间，有力地推动了新时期的民主法制建设。他在一九七九年一月主持全国人大常委会通过《告台湾同胞书》，又在一九八一年九月发表了著名谈话，进一步提出了实现和平统一的九条方针政策，对推动祖国统一大业的进程，起了重要作用。他以身作则地推动党和国家领导干部的新老交替与合作。叶剑英同志是以邓小平同志为核心的第二代中央领导集体的重要成员，他为建设有中国特色社会主义事业建立了新的历史功勋。\n</View>
          <View> 　　叶剑英同志所作的“矢志共产宏图业，为花欣作落泥红”的诗句，是他不懈奋斗的光辉一生的真实写照。他的崇高思想和高尚品质，是永远值得我们学习和发扬的宝贵精神财富。\n</View>
        </AtCard>
        <View>　</View>
        <AtCard
          title='人物评价'
          thumb={pdes}
        >
          <View> 　　叶剑英同志党性坚强，信念坚定。他对社会主义、共产主义事业矢志不渝，对党和人民无比忠诚。他无私无畏，有胆有识。在各种严峻的考验面前，他总是把党和人民的利益放在首位，坚决同一切危害党和人民利益的行为作斗争。在重大和紧要的历史关头，他总是挺身而出，力挽狂澜，表现出伟大的革命气魄和高超的斗争艺术。毛泽东同志给予他很高的评价，说他是“诸葛一生唯谨慎，吕端大事不糊涂”。周恩来同志也引用“疾风知劲草，板荡识诚臣”来赞誉他。\n</View>
          <View> 　　叶剑英同志胸怀宽广，谦逊质朴。他顾全大局，团结同志，严于律己，富于批评与自我批评精神。他不计浮名不畏难，能上能下，任劳任怨。他始终保持高尚的革命气节，为党为民，一身正气。他一生勋业卓著，但从不夸耀自己，把一切功劳归于党和人民。\n</View>
          <View> 　　叶剑英同志好学深思，实事求是。他孜孜不倦地学习马克思主义理论，坚持理论联系实际，注重向实践学习。他博览群书，熟谙历史。耄耋之年，仍坚持不断地吸取新知识，真正做到了“攻城不怕坚，攻书莫畏难”。他还是一位受毛泽东同志称赞的诗人。他的许多诗句，“人生贵有胸中竹，经得艰难考验时”；“笃信马列依真理，不移不屈不苟同”；“全心全意一为公”，“老骥仍将万里行”；“应向青年寻后继”，“长征接力有来人”等等，都深含人生和社会发展的哲理，对我们一代一代的后继者都具有深刻的教育、启示和鞭策作用。\n</View>
          <View> 　　\n</View>
        </AtCard>
        <View>　</View>
      </View>
    )
  }
}
