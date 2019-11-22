import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtCard } from 'taro-ui'

import './WangJiaXiang.scss'
import '../people.scss'


import sdes from '../../../pictures/iconphoto/sdes.png'
import cz from '../../../pictures/iconphoto/cz.png'
import history from '../../../pictures/iconphoto/history.png'

export default class MaoZeDong extends Component {


  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  
  config = {
    navigationBarTitleText: '王稼祥'
  }

  render() {
    return (
      <View className='people'>
        <View>　</View>
        <AtCard
          title='简介'
          thumb={sdes}
        >
          王稼祥（1906年8月15日—1974年1月25日），原名嘉祥，又名稼蔷，安徽省泾县桃花潭镇厚岸村人。忠诚的马克思主义者，杰出的无产阶级革命家，中国共产党和中国人民解放军卓越领导人，中国共产党和新中国对外工作的开拓者之一。
        </AtCard>
        <View>　</View>
        <AtCard
          title='他/她与长征'
          thumb={cz}
        >
          <View> 　　1933年4月王稼祥遇空袭被炸穿了肠子——在没有麻药的情况下，忍着剧痛经历了八小时手术，当时人称胜过关公刮骨疗毒。因无法取出弹片，只好采取保守疗法。翌年1月，他当选中央政治局候补委员。同年秋，他腹部通着管子、坐着担架参加了长征。在长征担架上，王稼祥向毛泽东表示：这样下去不行，应该让不了解中国国情的德籍顾问李德下台\n
          </View>
          <View> 　　1935年1月召开的遵义会议上，王稼祥拥护毛泽东为代表的正确路线，再次被选为政治局委员。会后，同毛泽东、周恩来一起组成中央三人军事指挥小组。9月任中国工农红军陕甘支队政治部主任。红一、红四方面军会合后，任中央军事委员会主席团成员。\n
          </View>
          <View> 　　1935年长征途中举行为遵义会议的酝酿、召开以及贯彻遵义会议的决议，作出了重大贡献。在1935年1月的遵义会议上，王稼祥提出要毛泽东担任党和红军的领导。毛泽东曾多次说过，王稼祥在党的历史上是有功劳的，他在遵义会议上投了“关键的一票”。遵义会议后，王稼祥与毛泽东、周恩来组成中央军事三人小组，指挥全军行动。过雪山草地时，王稼祥肠子流脓，甚至爬出蛔虫，仍以常人难以想象的毅力坚持下来。到达陕北后，他因伤情恶化被中央派人秘密送往上海治疗。\n
          </View>
          <View> 　　1936年10月当选中央书记处书记（1934年1月至1956年9月中央书记处书记相当于中央政治局常委）、中央政治局委员。
          </View>
        </AtCard>
        <View>　</View>
        <AtCard
          title='历史贡献'
          thumb={history}
        >
          是早期的中共领导人。井冈山时期，他曾是三人军事领导小组成员之一，其主张举足轻重，遵义会议上力挺毛泽东，毛泽东才开始登上中共最高领导人地位，从此中国革命走上正确道路。革命胜利后兢兢业业为党工作，文革中遭受迫害，一九七四年逝世。
        </AtCard>
        <View>　</View>
      </View>
    )
  }
}
