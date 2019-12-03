import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtCard } from 'taro-ui'
import './Desc7.scss'
import '../Desc.scss'
import place from '../../../pictures/iconphoto/place.png'
import time from '../../../pictures/iconphoto/time.png'
import content from '../../../pictures/iconphoto/content.png'
import sense from '../../../pictures/iconphoto/sense.png'

export default class Desc7 extends Component {

  config = {
    navigationBarTitleText: '飞夺泸定桥'
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
          1935年5月29日
        </AtCard>
        <View>　</View>
        <AtCard
          title='地点'
          thumb={place}
        >
          <View> 　　泸定桥（Luding Chain Bridge），又名大渡桥，是中国四川省甘孜藏族自治州泸定县泸桥镇境内的一座跨大渡河铁索桥，为泸定桥风景区的主要景观文物。\n
          </View>
          <View> 　　泸定桥始建于清康熙四十四年（1705年）九月，于清康熙四十五年（1706年）四月投入使用；于1961年3月4日被纳入中国首批全国重点文物保护单位；于2003年纳入景区管理。\n
          </View>
          <View> 　　泸定桥全长103.67米，宽3米，由13根锁链组成，为一座历史悠久的古桥；该桥因“飞夺泸定桥”战斗而闻名中外。\n
          </View>
        </AtCard>
        <View>　</View>
        <AtCard
          title='内容'
          thumb={content}
        >
          <View> 　　1935年5月25日，一方面是红军在安顺场强渡大渡河后，要用仅有的几只小船将几万红军渡过河去，最快也要一个月的时间。然而国民党的追兵紧追不舍，
            形势十分严竣。当急之下，要于5月26日上午，毛泽东、周恩来、朱德等人决定后，当即作出了夺取泸定桥的指令。
            其部署是由刘伯承、聂荣臻率领红一军团一师和陈赓、宋任穷领导的干部团为右路军，由中央纵队及1、3、5、9军团为左路军夹河而上攻取泸定桥。
            左路军由王开湘、杨成武率领的红二师四团为前锋攻击前进。\n</View>
          <View> 　　1935年5月28日，红四团接到红一军团命令：“王开湘、杨成武：军委来电，限左路军于明天夺取泸定桥，你们要用最高的行军速度和坚决机动的手段，去完成这一光荣的任务。
            你们在此战斗中突破过去夺道州和五团夺鸭溪一天跑一百六十里的记录”。接令后红四团昼夜兼行240华里山路，于29日晨，出其不意地出现在泸定桥西岸并与敌军交火。\n</View>
        </AtCard>
        <View>　</View>
        <AtCard
          title='意义'
          thumb={sense}
        >
          <View> 　　打破了蒋介石妄图把红军变成第二个石达开的反革命迷梦，是红军长征中具有战略意义的重大胜利之一。这次胜利体现了红军无限忠于人民革命事业的大无畏精神。\n</View>
        </AtCard>
        <View>　</View>
      </View>
    )
  }
}
