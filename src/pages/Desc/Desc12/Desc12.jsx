import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtCard } from 'taro-ui'
import './Desc12.scss'
import '../Desc.scss'
import place from '../../../pictures/iconphoto/place.png'
import time from '../../../pictures/iconphoto/time.png'
import content from '../../../pictures/iconphoto/content.png'
import sense from '../../../pictures/iconphoto/sense.png'
import One from '../../../components/Number/One/One'
import Two from '../../../components/Number/Two/Two'
import Three from '../../../components/Number/Three/Three'
import Four from '../../../components/Number/Four/Four'

export default class Desc12 extends Component {

  config = {
    navigationBarTitleText: '会宁会师'
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
          1936年10月
        </AtCard>
        <View>　</View>
        <AtCard
          title='地点'
          thumb={place}
        >
          <View> 　　会宁县，隶属于甘肃省白银市，位于甘肃省中部，白银市南端；地势由东南向西北倾斜，梁峁起伏、沟壑纵横；属中温带半干旱气候；总面积6439平方千米。截至2018年，会宁县下辖24个镇、4个乡，常住人口54.39万人。\n
          </View>
          <View> 　　会宁县素有“秦陇锁钥”之称，早在5000多年前的新石器时代，境内就有人类生息繁衍；汉武帝元鼎三年（前114年）设置祖厉县，已有2100多年的建县历史。民国二十五年（1936年）10月，中国工农红军三大主力在会宁胜利会师，
            是中国革命走向胜利的转折点。\n
          </View>
        </AtCard>
        <View>　</View>
        <AtCard
          title='内容'
          thumb={content}
        >
          <One></One>
          <View> 　　1935年6月，中央红军与红四方面军在四川懋功会师。由于张国焘推行分裂路线，两军会合后旋即分开，红四方面军南下，中央红军单独北上。南下途中，张国焘另立“中央”。
            后来张国焘被迫取消伪中央，再与红二方面军一起北上。\n</View>
          <View> 　　\n</View>
          <Two></Two>
          <View> 　　1936年9月，蒋介石命令胡宗南部兼程北上，企图在会宁一带切断红军三大主力会师的道路。中央命令红四方面军阻止胡宗南部，但张国焘心生胆怯，不执行北上命令，
            而要西渡黄河夺取宁夏。\n</View>
          <View> 　　\n</View>
          <Three></Three>
          <View> 　　红四方面军总政委陈昌浩等人则主张，立即北上会宁，与红一方面军会合，共同打击敌人。这一主张获得多数支持并形成决议。 然而张国焘于9月20日赶到前线，情绪激动，示以眼泪，
            使得前线指挥员重新调整部署，准备西进。对此中央多次复电不同意，加之西进先头部队了解到，黄河对岸已进入大雪封山季节，气候寒冷，道路难行。张国焘没有办法，被迫下令北上会合中央红军。\n</View>
          <View> 　　\n</View>
          <Four></Four>
          <View> 　　1936年7月1日，红二、红四方面军在西康甘孜会师。10月9日，红一、红四方面军在甘肃会宁会师。10月22日，红一、红二方面军在宁夏西吉县将台堡会师。至此，红军长征胜利结束。
            红一方面军长征历时一年，纵横十一省，行程二万五千里。红四方面军长征历时一年零七个月，途经四省，行程近万里。红二方面军长征历时十一个月，途经八省，行程一万六千多里。\n</View>
          </AtCard>
        <View>　</View>
        <AtCard
          title='意义'
          thumb={sense}
        >
          <View> 　　这是中国革命史上的伟大创举,也是中国革命由挫折走向胜利的伟大转折。从此,开始了由国内革命战争向抗日民族解放战争的转变,中国革命进入了一个崭新的历史阶段。长征,它将成为人类历史上坚定无畏的丰碑,
它永远是铭记着中华民族坚强不屈精神的地球上的红飘带。\n</View>
        </AtCard>
        <View>　</View>
      </View>
    )
  }
}
