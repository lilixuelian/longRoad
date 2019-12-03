import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtCard } from 'taro-ui'
import './Desc5.scss'
import '../Desc.scss'
import place from '../../../pictures/iconphoto/place.png'
import time from '../../../pictures/iconphoto/time.png'
import content from '../../../pictures/iconphoto/content.png'
import sense from '../../../pictures/iconphoto/sense.png'
export default class Desc5 extends Component {

  config = {
    navigationBarTitleText: '巧渡金沙江'
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
          1935年5月3日到9日
        </AtCard>
        <View>　</View>
        <AtCard
          title='地点'
          thumb={place}
        >
          <View> 　　金沙江，是中国长江的上游。因江中沙土呈黄色得名。又名绳水、淹水、泸水。川藏界河。金沙江的发源地（即长江的发源地）20世纪70年代定于青海省唐古拉山主峰各拉丹冬雪山，正源沱沱河。
            2008年调查建议当曲的上源且曲为正源，发源于唐古拉山脉东段北支5054米的无名山地东北处，行政隶属玉树州杂多县结多乡。\n
          </View>
          <View> 　　当曲与源于格尔木市的唐古拉山镇的沱沱河汇合后，称通天河。长江干流流经治多县、曲麻莱县、称多县，玉树县，于玉树州直门达（称多县歇武镇直门达村，巴塘河汇入口）以下，始称金沙江。\n
          </View>
          <View> 　　金沙江穿行于川、藏、滇三省区之间，其间有最大支流雅砻江汇人，至四川宜宾纳岷江始名长江。从青海省的河源至宜宾市干流河长3481千米（一说3364公里），
            流域面积50.2万平方千米（一说47.32万平方公里），约占长江流域面积26%。年平均流量4750立方米/秒。以降水补给为主，地下水和冰雪融水补给为辅。\n
          </View>
          <View> 　　金沙江落差3300米（一说5100米），水力资源一亿多千瓦，占长江水力资源的40%以上。干流是规划有多级梯级水电开发。金沙江流急坎陡，
            江势惊险，航运困难。由于河床陡峻，流水侵蚀力强，金沙江是长江干流宜昌站泥沙的主要来源。\n
          </View>
        </AtCard>
        <View>　</View>
        <AtCard
          title='内容'
          thumb={content}
        >
          <View> 　　1金沙江位于长江的上游，穿行在川滇边界的深山狭谷间，江面宽阔，水急浪大。如果红军过不去，就会被国民党军压进深山狭谷，遭致全军覆灭的危险。当红军大队人马向金沙江挺进时，
            蒋介石如梦初醒，认定红军的目的地既不在贵阳，也不在昆明，而是“必渡金沙江无疑”。\n</View>
          <View> 　　1935年4月28日，蒋介石下达命令，控制渡口，毁船封江。就在红军抵进金沙江前夕，江边的敌人已将所有船只掠到北岸了。 1935年5月3日至9日，红军避敌锋芒、仅凭6只渡船在7天7夜间，2万多人的红军部队全部渡过金沙江。\n</View>
          <View> 　　1935年5月3日，军委干部团的同志们接受了抢夺皎平渡的任务。他们二话不说，翻山越岭180里，当天夜晚就来到了金沙江边。在渡口，他们幸运地找到了两条船。
            原来这两条船是送探子来南岸探查情况的，探子不知跑到哪里去了.......
            然后，他们乘坐这两条船悄悄地渡到北岸。敌人的哨兵以为探子回来了，不以为意。他们来了个突然袭击，一举消灭了一连正规军和一个保安队，控制了皎平渡两岸渡口。后来，他们又找到了五条船，动员了36名艄公。
            与此同时，红一军团赶到了龙街渡口，红三军团赶到了洪门渡口，但这两个渡口都没有船只，加上江宽水急无法架桥。军委命令他们迅速转到皎平渡过江。\n</View>
          <View> 　　从1935年5月3日至9日，在7天7夜的时间里，红军主力就靠这7只小船从容地过了江。担任后卫的9军团在南渡乌江以后奉军委命令一直绕圈子，忽南忽北，牵制了敌人部分兵力。1935年5月6日，
            他们到了云南东川与巧家县之间，并于1935年5月9日在渡过了金沙江。两天以后，敌人的追兵才赶到南岸。可红军早已毁船封江，无影无踪地走了,体现出了将士们的机智与勇敢。\n</View>
        </AtCard>
        <View>　</View>
        <AtCard
          title='意义'
          thumb={sense}
        >
          <View> 　　中国工农红军中央红军渡过金沙江，摆脱数十万敌军的围追堵截，粉碎了蒋介石欲将红军围歼于川、黔、滇地区的计划，取得了战略转移中具有决定意义的胜利。\n</View>
        </AtCard>
        <View>　</View>
      </View>
    )
  }
}
