import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtCard } from 'taro-ui'
import './Desc10.scss'
import '../Desc.scss'
import place from '../../../pictures/iconphoto/place.png'
import time from '../../../pictures/iconphoto/time.png'
import content from '../../../pictures/iconphoto/content.png'
import sense from '../../../pictures/iconphoto/sense.png'
import One from '../../../components/Number/One/One'
import Two from '../../../components/Number/Two/Two'

export default class Desc10 extends Component {

  config = {
    navigationBarTitleText: '激战腊子口'
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
          1935年9月13日到17日
        </AtCard>
        <View>　</View>
        <AtCard
          title='地点'
          thumb={place}
        >
          <View> 　　腊子口是岷山山脉的一个重要隘口，是川西北通向甘南的门户，口宽约30米，周围是崇山峻岭，地势十分险要。两个悬崖绝壁间夹着一道窄窄的山沟向上延伸，两边绝壁峭立。
            山中一道河水急流而下，隘口处的河上架着一座木桥，横跨于两岸陡壁之上，是通过腊子口的唯一通路。\n
          </View>
        </AtCard>
        <View>　</View>
        <AtCard
          title='内容'
          thumb={content}
        >
          <One></One>
          <View> 　　蒋介石在岷县、腊子口地区配置了两个师，妄图凭借天险挡住红军的出路。鲁大昌两个营的兵力驻守在腊子口，1个营扼守隘口，1个营配置在隘口后边的三角形谷地，
            师主力配置在隘口以北至岷县一带，可随时增援。他们在桥头和山崖上构筑了碉堡，形成了交叉的火力网。\n</View>
          <View> 　　毛泽东清楚地知道，腊子口再险，红军也要攻下来，否则就得重回草地去。乌江、金沙江、大渡河没有挡住红军的前进，雪山草地红军都走过来了。
            毛泽东果断地下达了“两天之内拿下腊子口”的命令。\n</View>
          <View> 　　\n</View>
          <Two></Two>
          <View> 　　9月17日下午，红1军2师4团向腊子口发动了猛烈的进攻。可是由于地形不利，兵力无法展开，从下午攻到半夜，连续冲锋十几次都没有成功。
            在半夜时分，部队暂停进攻，重新研究作战方案。根握新侦察到的情况和战士们的建议，他们决定兵分两路、一路由政委杨成武率领第6连从正面进行夜袭，夺取木桥；
            如果偷袭不成就连续发动进攻，达到疲劳敌人，消耗敌人弹药，造成敌人恐慌的目的。另一路由团长王开湘率领第1、第2连，悄悄地迂回到腊子口右侧，攀登陡峭的崖壁，摸到敌人后面去。\n</View>
          <View> 　　战斗再次打响了，正当正面战斗激烈进行的时刻，迂回部队已摸到腊子口右侧峭壁下。一个苗族战士手持带铁钩的长杆，顺着陡壁最先爬了上去，然后将事先接好的绑腿缠在树干上放下来，
            后来的战士拉着绑腿一个接一个地全部上去。他们突然出现在敌人的后方，吓得敌人魂飞魄散，扔下枪支仓惶逃命。\n</View>
        </AtCard>
        <View>　</View>
        <AtCard
          title='意义'
          thumb={sense}
        >
          <View> 　　党中央率陕甘支队通过腊子口后，9月20日，进占甘南的哈达铺。至此，党中央和红一方面军主力终于走出了雪山草地的藏民区域，打破了蒋介石妄图利用恶劣的自然条件“困死”红军的阴谋。\n</View>
        </AtCard>
        <View>　</View>
      </View>
    )
  }
}
