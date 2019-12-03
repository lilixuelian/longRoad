import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtCard } from 'taro-ui'
import './Desc2.scss'
import '../Desc.scss'
import place from '../../../pictures/iconphoto/place.png'
import time from '../../../pictures/iconphoto/time.png'
import content from '../../../pictures/iconphoto/content.png'
import sense from '../../../pictures/iconphoto/sense.png'
import One from '../../../components/Number/One/One'
import Two from '../../../components/Number/Two/Two'
import Three from '../../../components/Number/Three/Three'
import Four from '../../../components/Number/Four/Four'
import Five from '../../../components/Number/Five/Five'
import Six from '../../../components/Number/Six/Six'
import Seven from '../../../components/Number/Seven/Seven'

export default class Desc2 extends Component {

  config = {
    navigationBarTitleText: '强渡乌江'
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='Desc'>
        <View>　</View>
        <AtCard
          title='时间'
          thumb={time}
        >
          1935年1月2日到6日
        </AtCard>
        <View>　</View>
        <AtCard
          title='地点'
          thumb={place}
        >
          <View> 　　乌江为贵州省第一大河，长江上游右岸支流，古称黔江。发源于贵州省境内威宁县香炉山花鱼洞，
            流经黔北及渝东南酉阳彭水，在重庆市涪陵注入长江。\n
          </View>
          <View> 　　乌江干流全长1037公里，流域面积8.79万平方公里。六冲河汇口以上为上游，汇口至思南为中游，思南以下为下游。
            较大支流有六冲河、猫跳河、清水江、湘江、洪渡河、芙蓉江、唐岩河等15条，天然落差2123.5米，年均流量1 650立方米/秒。
            流域内年均径流深600毫米，但年内分配不均，汛期5～9月占全年径流量的80%。乌江水系呈羽状分布，流域地势西南高，
            东北低，由于地势高差大，切割强，自然景观垂直变化明显。以流急、滩多、谷狭而闻名于世，号称“天险”。\n
          </View>
        </AtCard>
        <View>　</View>
        <AtCard
          title='内容'
          thumb={content}
        >
          <One></One>
          <View> 　　1935年1月1日，中共中央在瓮安猴场作出了决定指出：“建立川黔边新苏区根据地。
            首先以遵义为中心的黔北地区，然后向川南发展，是目前最中心的任务”。
            红军总政治部下达《关于瓦解贵州白军的指示》。朱德电示红军各部，乌江“偷渡部队不应小于一个团”。\n</View>
          <View> 　　国民党“追剿军”第2兵团总指挥薛岳到马场坪，与贵州总指挥王家烈商定黔北部署。
            王家烈称“30日晨匪一股由王文场向江界河新老渡口抢渡”，“午又匪一股约4000余人，向我回龙北岸渡口抢渡”。\n</View>
          <View> 　　\n</View>
          <Two></Two>
          <View> 　　1月2日，红军右纵队一军团主力和九军团，在余庆县箐口附近的回龙场渡口击溃黔军第8团万式炯部，渡过乌江。
            9时，红一军团2师4团在团长耿飚、政委杨成武的率领下，在江界河用竹筏强渡乌江未成功。入夜后，4团再次强渡乌江，
            第3连连长毛振华率4名战士登上北岸。\n</View>
          <View> 　　黔军教导师师长侯之担上报称“匪一股由回龙场以机炮向箐口猛攻”，“又一股约2000人在江界河对岸，向我猛攻”，“匪即扎筏强渡”。\n</View>
          <Three></Three>
          <View> 　　1月3日9时，红军在江界河发起猛烈攻势，击溃江防黔军第3旅林秀生部第5、第6团，强渡乌江成功。红军干部团、工兵连在渡口架设浮桥。
            军委纵队及五军团渡过乌江。左纵队三军团于茶山关渡口过乌江，进驻遵义尚稽。17时，红一军团2师先头连占领黔军“前敌指挥部”所在地猪场（今珠藏）。
            王家烈向蒋介石电报乌江战况，称“该匪北窜渡江之企图，已可明证”。\n</View>
          <View> 　　\n</View>
          <Four></Four>
          <View> 　　1月4日，红一军团2师第6团接受夺取遵义的任务，在团长朱水秋、政委王集成的率领下，向遵义团溪方向前进。
            王家烈电报蒋介石：“冬日午时共匪突以巨大火力，向我岩门老渡口猛烈轰击，我第8团余营守兵，击毙匪众逾千，该营亦伤亡殆尽，匪乘势抢渡，占据箐口。”\n</View>
          <View> 　　\n</View>
          <Five></Five>
          <View> 　　1月5日，红九军团占领湄潭，驻守县黔军第8团溃退凤岗。红三军团进入遵义懒板凳。红一军团第2师第6团由团溪经龙坪向遵义进发，在深溪歼黔军第1营。
            22时36分，中央军委电令我各路红军迅速休整，准备进入反攻战。24时，红一军团向所属各部队下达《关于进城执行政策的规定》。\n</View>
          <View> 　　\n</View>
          <Six></Six>
          <View> 　　1月6日，红一军团第2时在遵义城外桑木垭至丰乐桥之间与黔军侯汉佑部交战。晚黔军溃败，红军将黔军俘虏押在遵义城南门。
            俘虏叫开城门后，红军冲进城内与黔军激战。黔军教导师副师长、遵义城防司令侯汉佑从遵义北门退往板桥。红五军团集中猪场，并以一部扼守乌江袁家渡、江界河、孙家渡渡口。
王家烈电报：“匪大部渡过乌江。支日分陷湄潭、团溪、向遵义压迫。七在乌江南岸一部约3000人，经中坪、龙旺河西窜，微午逼近开阳”。\n</View>
          <View> 　　\n</View>
          <Seven></Seven>
          <View> 　　1月7日，红军全面占领遵义城，一军团向娄山关、桐梓方向追击，扩大占领区，确保中央机关的安全。晚21时40分，中革军委在团溪致电各军团及军委纵队：
            “我2师已袭占遵义，敌由北门溃退，正乘胜追击中，我野战军已到达预定的集中地域......”\n</View>
        </AtCard>
        <View>　</View>
        <AtCard
          title='意义'
          thumb={sense}
        >
          为红军赢得了宝贵的休整时间，为中央政治局会议的举行创造了良好的条件。
        </AtCard>
        <View>　</View>
      </View>
    )
  }
}
