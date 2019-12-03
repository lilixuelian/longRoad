import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtCard } from 'taro-ui'
import './Desc11.scss'
import '../Desc.scss'
import place from '../../../pictures/iconphoto/place.png'
import time from '../../../pictures/iconphoto/time.png'
import content from '../../../pictures/iconphoto/content.png'
import sense from '../../../pictures/iconphoto/sense.png'
import One from '../../../components/Number/One/One'
import Two from '../../../components/Number/Two/Two'

export default class Desc11 extends Component {

  config = {
    navigationBarTitleText: '吴起会师'
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
          1935年10月
        </AtCard>
        <View>　</View>
        <AtCard
          title='地点'
          thumb={place}
        >
          <View> 　　吴起镇是旧镇名，现改名为吴起街道。地处吴起县中部，为全县政治、经济、交通、文化中心。面积383.7平方公里，有人口28783人，属于内陆干旱半干旱气候。\n
          </View>
          <View> 　　吴起镇相传为战国时魏国大将吴起（约前400年）屯兵驻守而得名。1935年，毛泽东率领的中央红军长征到达陕北，吴起镇成为长征落脚点而名播中外。该镇历史悠久，
            胜利山因“割尾巴”战役而闻名天下，新窑院设有毛主席纪念馆，是革命老区，历史重镇。\n
          </View>
        </AtCard>
        <View>　</View>
        <AtCard
          title='内容'
          thumb={content}
        >
          <One></One>
          <View> 　　红1方面军主力通过腊子口后，继续北进，于1935年10月19日到达陕甘苏区吴起镇，与陕甘革命根据地红军胜利会师，随后又同十五军团红军胜利会师。至此，中央红军胜利地完成了历时一年，
            纵横11个省，行程2.5万里的长征。党中央和中央红军主力终于找到了长征立足点，抵达最后的目的地，胜利地实现了历史性的战略转移。\n</View>
          <View> 　　\n</View>
          <Two></Two>
          <View> 　　10月22日，中共中央在此召开政治局扩大会议，宣告中央红军长征胜利结束。参加当天会议的有：张闻天、博古、毛泽东、王稼祥、周恩来、邓发、李富春、聂荣臻、刘少奇、叶剑英、凯丰、贾拓夫、彭德怀等。
            会议的中心议程是：总结俄界会议后红军的行动，确定新形势下陕甘支队的行动方针。会议批准了榜罗镇会议把红军长征落脚点放在陕北的战略决策，决定党和红军今后的战略任务是建立西北苏区，以领导全国革命，
            从而宣告了中央红军长征的完结，开创了党中央全国革命大本营放在陕北的新的历史时期。\n</View>
         </AtCard>
        <View>　</View>
        <AtCard
          title='意义'
          thumb={sense}
        >
          <View> 　　吴起镇会师标志着红一方面军主力胜利地完成历时一年、纵横11个省、行程二万五千里的长征，开始了为实现党中央新的战略任务而斗争的新阶段。\n</View>
        </AtCard>
        <View>　</View>
      </View>
    )
  }
}
