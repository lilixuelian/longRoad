import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtCard } from 'taro-ui'
import './Desc1.scss'
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

export default class Desc1 extends Component {


  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  
  config = {
    navigationBarTitleText: '突破四道防线'
  }

  render() {
    return (
      <View className='Desc'>
        <View>　</View>
        <AtCard
          title='时间'
          thumb={time}
        >
          1934年10月24日到11月27日
        </AtCard>
        <View>　</View>
        <AtCard
          title='地点'
          thumb={place}
        >
          <View> 　　第一道封锁线：东南起于安远、信丰，西北迄止赣州、南康、大余间，以桃江为天然屏障，南北长约120公里，东西宽约50公里；\n
          </View>
          <View> 　　第二道封锁线设在粤北韶关的仁化县，国军分南北两路，北路为中央军，时薛岳率领吴奇伟，周浑元2个纵队，共4个师追击，南路是粤军，由余汉谋率领李振球，叶肇，李汉魂三个师堵截；\n
          </View>
          <View> 　　第三道封锁线设在粤汉铁路沿湘粤边湖南境内良田到宜章之间；\n
          </View>
          <View> 　　第四道封锁线就是湘江。
          </View>
        </AtCard>
        <View>　</View>
        <AtCard
          title='内容'
          thumb={content}
        >
          <One></One>
          <View> 　　1933年9月至1934年夏，中央苏区红军进行第五次反“围剿”作战，由于中共中央领导人博古（秦邦宪）和共产国际派来的军事顾问李德，先是实行冒险主义的进攻战略，
            后又实行保守主义的防御战略，致使红军屡战失利，苏区日渐缩小。\n</View>
          <View> 　　1934年4月，中央红军（红一方面军改称）在江西省广昌与国民党军进行决战，损失严重，形势危殆。5月，中央书记处作出准备将中央红军主力撤出根据地的决定，
            后获共产国际同意。\n</View>
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
