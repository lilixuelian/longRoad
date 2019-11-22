import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtCard } from 'taro-ui'

import './WangRuoFei.scss'
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
    navigationBarTitleText: '王若飞'
  }

  render() {
    return (
      <View className='people'>
        <View>　</View>
        <AtCard
          title='简介'
          thumb={sdes}
        >
          王若飞（1896年10月～1946年4月8日），幼年原名大伦，小名运笙（运生）、荫生，号继仁，曾用名王度、雷音，参加革命深入敌后化名黄敬斋，出生于贵州安顺，杰出的共产主义先驱、中共领导人，老一辈无产阶级革命家，著名的“四八”烈士。
        </AtCard>
        <View>　</View>
        <AtCard
          title='他/她与长征'
          thumb={cz}
        >
          <View> 　　1931年，王若飞回国就任中共西北特委特派员，参与了领导西北地区包括陕、甘、宁、晋、绥、新等地农民斗争，开展土地革命。\n
          </View>
          <View> 　　1931年11月21日，王若飞在包头-泰安客栈因叛徒出卖不幸被捕，度过了近6年的铁窗生活。\n
          </View>
          <View> 　　1937年5月，在中共中央北方局的营救下，结束了5年零7个月的牢狱生活。同年8月到达延安，先后任中共陕甘宁边区委宣传部部长、统战部部长。\n
          </View>
          <View> 　　1946年4月8日，王若飞携带着中共代表团就宪法、国民政府组成等问题同国民党谈判的最后方案，同秦邦宪、叶挺、邓发和黄齐生等，乘飞机离开重庆返回延安。因天气原因，飞机中途迷失方向，不幸在山西省兴县黑茶山上撞山坠毁，同机13人全部遇难，王若飞当时年仅50岁。。
          </View>
        </AtCard>
        <View>　</View>
        <AtCard
          title='历史贡献'
          thumb={history}
        >
          国共两党举行了十次正式谈判会议期间，王若飞配合周恩来作了多次重要发言。10月10日下午，中共代表周恩来、王若飞同国民党代表王世杰、邵力子、张治中签署了《国民政府与中共代表会谈纪要》。
王若飞在上海任职中共中央秘书部主任时，参与领导了上海三次工人武装起义运动。在担任中央秘书长、中央党务委员会主任期间，参与研讨和制定了许多关于抗日根据地建设的政策、指示，对推动抗日根据地各项建设事业做出了重要贡献。王若飞于1940年4月在《八路军杂志》上发表了《华北游击队与民众游击战争发展的经验》一文，提出了游击队的七项任务，为游击战争的发展指明了方向。
在莫斯科召开的共产党第六次全国代表大会上，王若飞对陈独秀所犯错误的性质和严重后果作了揭露和批判。
王若飞指出内蒙古的工作要深入发动群众，做好民族工作，开展武装斗争，到一定时候要进行土地革命。针对日本特务策动的“自治运动”，王若飞还提出要加强蒙汉团结，共同抗日。
王若飞在延安创办了陕甘宁边区党委理论刊物《团结》月刊，还著有《中国向何处去》、《巴黎公社的历史意义》、《十月革命开创了历史的新纪元》等文章。
        </AtCard>
        <View>　</View>
        <AtCard
          title='人物评价'
          thumb={pdes}
        >
          中共早期领导人罗亦农这样评价王若飞：“头脑敏锐，分析问题透彻、深刻，有雄才大略，善于联络人——他像’黏合剂‘一样把大家团结起来。“ 
2009年，王若飞被中央宣传部、中央组织部等11个部门评为“100位为新中国成立作出突出贡献的英雄模范人物”。
邓毛毛在《我的父亲邓小平》一书中写道：”若飞其人聪明好学，思想敏锐，性格开朗，待人随和，在敌人狱中坚强不屈，大义凛然。” 
傅作义这样评价王若飞：“共产党员王若飞，那才是个人才哩！”
        </AtCard>
        <View>　</View>
      </View>
    )
  }
}
