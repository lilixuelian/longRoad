import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtCard } from 'taro-ui'
import './Desc4.scss'
import '../Desc.scss'
import place from '../../../pictures/iconphoto/place.png'
import time from '../../../pictures/iconphoto/time.png'
import content from '../../../pictures/iconphoto/content.png'
import One from '../../../components/Number/One/One'
import Two from '../../../components/Number/Two/Two'
import Three from '../../../components/Number/Three/Three'
import Four from '../../../components/Number/Four/Four'
import Five from '../../../components/Number/Five/Five'
import Six from '../../../components/Number/Six/Six'
// import Seven from '../../../components/Number/Seven/Seven'
// import Eight from '../../../components/Number/Eight/Eight'
// import Nine from '../../../components/Number/Nine/Nine'

export default class Desc4 extends Component {

  config = {
    navigationBarTitleText: '四渡赤水'
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
          1935年1月29日到3月21日
        </AtCard>
        <View>　</View>
        <AtCard
          title='地点'
          thumb={place}
        >
          <View> 　　赤水河，即赤水，为中国长江上游支流，因河流含沙量高、水色赤黄而得名。古有赤虺河、安乐水、大涉水等名称，在云、贵、川三省接壤地区。发源于云南省镇雄县场坝镇豆戛寨山箐，
            上游称鱼洞河，东流至川、滇、黔三省交界处的梯子岩，水量增大，经贵州省毕节市的七星关区、金沙县与四川省叙永县、古蔺县边界，进入仁怀市、习水县、赤水市，至四川省合江县入长江。全长444.5公里，流域面积2.04万平方公里。\n
          </View>
          <View> 　　赤水河四分之三流域在大山中，所以赤水河是中国唯一一条没有被污染的长江支流。河水清澈透底，两岸陡峭、多险滩急流。水能蕴藏量127万千瓦，但其干流未建大坝。白杨坪以下能长年和季节性通航5－165吨船级。\n
          </View>
        </AtCard>
        <View>　</View>
        <AtCard
          title='内容'
          thumb={content}
        >
          <View> 　　\n</View>
          <One></One>
          <View> 　　一渡赤水\n</View>
          <View> 　　遵义会议后，中革军委向各军团首长下达了《渡江作战计划》，拟定：中央红军各部进至赤水、土城附近地域后，分3路纵队由宜（宾）泸（州）间的蓝田坝、
            大渡口、江安一线北渡长江。\n</View>
            <View> 　　1935年1月上旬，中央红军长征到达贵州遵义地区。15~17日，中共中央政治局在遵义召开扩大会议，纠正了王明“左”倾冒险主义在军事上的错误，在实际上确立了毛泽东在红军和中共中央的领导地位。
              这时，蒋介石为阻止中央红军北进四川同红四方面军会台或东入湖南同红2、红6军团会台，围歼中央红军于乌江西北的川黔边境地区，调集其嫡系薛岳兵团和黔军全部，
              滇军主力和四川、湖南、广西的军队各一部，向遵义地区进逼。1月中旬，薛岳兵团的2个纵队8个师尾追红军进入贵州，集结于贵阳、息烽、清镇等地，先头已进至乌江南岸；
              黔军以2个师担任黔北各县城守备，以3个师分向湄潭及遵义以南的刀靶水，滥板凳进攻；川军14个旅分路向川南集中，其中2个旅已进至松坎以北的川黔边境；湘军4个师位于
              湘川黔边境的酉阳至铜仁一线构筑碉堡，防堵红军东进；滇军3个旅正由云南宣威向贵州毕节开进；桂军2个师已进至贵州独山，都匀一线。\n</View>
          <View> 　　中共中央和中央革命军事委员会根据上述情况，决定中央红军由遵义地区北上，在四川省泸州以西的蓝田坝、大渡口、江安一线北渡长江，进至川西北建立新的苏区。
            1月19日起，红1、红3、红5、红9军团分3路先后从遵义、桐梓、松坎地区出发，向土城、赤水方向前进。黔军随即占领遵义、湄潭；川军以一部兵力防守宜宾、泸州，
            以8个旅分路向松坎、温水、赤水、续永等地推进。24日，红1军团击溃国民党军黔军的抵抗，攻占土城。28日，红3军团、红5军团、军委纵队、干部团、红1军团一部在土城、青岗坡地区对尾追的川军2个旅发起猛攻，
            予以重创。此时，川军后续部队4个旅迅速增援。毛泽东等遂决定，立即撤出战斗，西渡赤水河，向古蔺以南地区前进，寻机北渡长江。n</View>
          <View> 　　\n</View>
          <Two></Two>
          <View> 　　为筹划战略转移事宜，成立了由博古、李德和周恩来组成的“三人团”。7月，中华苏维埃共和国中央革命军事委员会命令红7军团组成北上抗日先遣队，向闽浙皖赣边挺进；
红6军团从湘赣苏区突围西征，到湘中发展游击战争，意在调动国民党“围剿”军，以减轻中央苏区的压力，但未能达到目的。\n</View>
          <View> 　　10月初，国民党军向中央苏区的中心区域进攻，迅速占领了兴国、宁都、石城一线。红军的机动回旋余地更加缩小，在苏区内打破国民党军的“围剿”已无可能，
            于是被迫退出苏区，进行战略转移。\n</View>
          <View> 　　10月10日，中共中央、中革军委率领中央红军主力8.6万余人，从江西省瑞金、古城等地出发，开始了著名的长征。按照预定计划，
            中央红军准备转移到湘西地区同红2军团、红6军团会合。\n</View>
          <View> 　　\n</View>
          <Three></Three>
          <View> 　　10月17日，中央红军由雩都（今于都）南渡贡水。21日，中革军委以红1军团为左路前卫，红3军团为右路前卫，红9军团掩护左翼，红8军团掩护右翼；
中央和军委机关及直属队编成的两个纵队居中，红5军团担任后卫，从王母渡、新田之间突破国民党军第一道封锁线，于25日全部渡过信丰河（桃江）。\n</View>
          <View> 　　\n</View>
          <Four></Four>
          <View> 　　此后，中央红军继续西进，至11月15日，先后从湖南省汝城以南的天马山至广东省的城口间、湖南省的良田至宜章间通过第二、第三道封锁线，
            进至临武、蓝山、嘉禾地区。\n</View>
          <View> 　　\n</View>
          <Five></Five>
          <View> 　　这时，蒋介石已判明红军转移的战略意图，遂任命何键为“追剿”军总司令，指挥16个师分五路“追剿”；
同时令桂军5个师、粤军4个师及黔军一部进行堵截，总兵力近30万人，企图将中央红军歼灭于湘江以东地区。\n</View>
          <View> 　　11月25日，中革军委决定，中央红军分四路纵队，从全州、兴安间西渡湘江，突破国民党军第四道封锁线，前出到湘桂边境的西延地区。
            当日，红1军团、红3军团击破桂军的阻击进入桂北。\n</View>
          <View> 　　27日，先头部队红2军团、红4师各一部渡过湘江，控制了脚山铺至界首间30公里的湘江两岸渡口，但后续部队因辎重过多，道路狭窄，
            行动迟缓，未能赶到渡口。\n</View>
          <View> 　　此时，国民党“追剿”军进至全州、零陵、道县、东安地区；桂军5个师开至灌阳、兴安一线。为掩护中央、军委纵队及后续军团渡过湘江；\n</View>
          <View> 　　红1军团、红3军团在桂北湘江两岸的新圩、脚山铺、光华铺等地区，红5军团在永安关、水车一带与国民党军血战五昼夜，
            于12月1日保护中央机关渡过湘江。\n</View>
          <View> 　　红5军团第34师被阻于湘江东岸，转战于灌阳、道县一带，虽经英勇战斗，予敌重大杀伤，终因寡不敌众，弹尽粮绝，
            包括师长陈树湘在内的绝大多数指战员牺牲。此时，中央红军已折损过半，兵力锐减为3万余人。</View>
          <View> 　　\n</View>
          <Six></Six>
          <View> 　　湘江战役，中央红军经过英勇奋战，突破了国民党军第四道封锁线，挫败了蒋介石企图歼灭红军于湘江以东的计划。</View>
        </AtCard>
        <View>　</View>
      </View>
    )
  }
}
