import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtCard } from 'taro-ui'
import './Desc6.scss'
import '../Desc.scss'
import place from '../../../pictures/iconphoto/place.png'
import time from '../../../pictures/iconphoto/time.png'
import content from '../../../pictures/iconphoto/content.png'
import One from '../../../components/Number/One/One'
import Two from '../../../components/Number/Two/Two'
import Three from '../../../components/Number/Three/Three'
import Four from '../../../components/Number/Four/Four'

export default class Desc6 extends Component {

  config = {
    navigationBarTitleText: '强渡大渡河'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='Desc'>
        <View>　</View>
        <AtCard
          title='时间'
          thumb={time}
        >
          1935年5月25日到6月2日
        </AtCard>
        <View>　</View>
        <AtCard
          title='地点'
          thumb={place}
        >
          <View> 　　大渡河，古称北江、戢水、涐水、沫水、大渡水、濛水、泸水、泸河、阳、阳山江、 羊山江、中镇河、鱼通河、金川、铜河。
            位于中华人民共和国四川省中西部，历史上被作为中国长江支流岷江的最大支流。但从河源学上应为岷江正源。\n
          </View>
          <View> 　　大渡河发源于青海省玉树藏族自治州境内阿尼玛卿山脉的果洛山南麓，上源足木足河（其上源为麻尔柯河、阿柯河，在久治县）
            经阿坝县于马尔康县境接纳梭磨河、绰斯甲河（杜柯河、多柯河）后称大金川，向南流经金川县、丹巴县，于丹巴县城东接纳小金川后始称大渡河，
            再经泸定县、石棉县转向东流，经汉源县、峨边县，于乐山市城南注入岷江，全长1062公里（一说1050公里），流域面积7. 77万平方公里，
            大渡河支流较多，流域面积在1000平方公里以上的28条，10000平方公里的2条，河网密度0. 39。 \n
          </View>
        </AtCard>
        <View>　</View>
        <AtCard
          title='内容'
          thumb={content}
        >
          <One></One>
          <View> 　　1935年5月上旬，中央红军准备渡过大渡河。24日晚，先头部队赶到安顺场，占领了该地。\n</View>
          <View> 　　\n</View>
          <Two></Two>
          <View> 　　1935年5月24日晚，中央红军先头部队第一师第一团，经80多公里的急行军赶到大渡河右岸的安顺场。此地由川军2个连驻守，渡口有川军第二十四军第五旅第七团1个营筑堡防守。
            当晚，红一团由团政治委员黎林率第二营到渡口下游佯攻，团长杨得志率第一营冒雨分3路隐蔽接近安顺场，突然发起攻击，经20多分钟战斗，击溃川军2个连，占领了安顺场，并在渡口附近找到1只木船。
            安顺场一带大渡河宽100多米，水深流急，高山耸立。在红军到达之前，川军第五旅第七团1个营抢占了这一地区，正在构筑工事，凭险防守。情况对红军十分不利。\n</View>
          <View> 　　\n</View>
          <Three></Three>
          <View> 　　25日晨，红一团开始强渡大渡河。刘伯承、聂荣臻亲临前沿阵地指挥。红一团第一营营长孙继先从第二连挑选17名勇士组成渡河突击队，连长熊尚林任队长，由帅士高等4名当地船工摆渡。
            战前，先遣队首长亲自向领导领导交代任务，一起制定渡河方案，并强调这次渡河，关系全军成败，一定要战胜一切困难，完成任务，为全军打开一条通向胜利的道路。7时，强渡开始，
            岸上轻重武器同时开火，掩护突击队渡河。炮手赵章成两发迫击炮弹命中对岸碉堡。\n</View>
          <View> 　　\n</View>
          <Four></Four>
          <View> 　　突击队分成两批，熊尚林带领第一批8人先渡河，孙继先带领第二批8人再渡河。十八名勇士冒着川军的密集枪弹和炮火，在激流中前进。快接近对岸时，川军向渡口反冲击，杨得志命令再打两炮，正中川军。
            十八名勇士战胜了惊涛骇浪，冲过了敌人的重重火网，终于登上了对岸。 敌人见红军冲上岸滩，便往下甩手榴弹。智能双全的勇士们，利用又高又陡的台阶死角作掩护，沿台阶向上猛烈冲杀。在右岸火力的支援下，
            勇士们击退了川军的反扑，控制了渡口，后续部队及时渡河增援，一举击溃川军1个营，巩固了渡河点。随后，红一军团第一师和干部团由此渡过了被国民党军视为不可逾越的天险大渡河。\n</View>
        </AtCard>
        <View>　</View>
      </View>
    )
  }
}
