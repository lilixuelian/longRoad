import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './ZhouEnLai.scss'
import '../people.scss'
import { AtCard } from 'taro-ui'

import sdes from '../../../pictures/iconphoto/sdes.png'
import cz from '../../../pictures/iconphoto/cz.png'
import history from '../../../pictures/iconphoto/history.png'
import pdes from '../../../pictures/iconphoto/pdes.png'
import One from '../../../components/Number/One/One'
import Two from '../../../components/Number/Two/Two'
import Three from '../../../components/Number/Three/Three'
import Four from '../../../components/Number/Four/Four'
import Five from '../../../components/Number/Five/Five'
import Six from '../../../components/Number/Six/Six'
import Seven from '../../../components/Number/Seven/Seven'
import Eight from '../../../components/Number/Eight/Eight'
import Nine from '../../../components/Number/Nine/Nine'

export default class MaoZeDong extends Component {


  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  
  config = {
    navigationBarTitleText: '周恩来'
  }

  render() {
    return (
      <View className='people'>
        <View>　</View>
        <AtCard
          title='简介'
          thumb={sdes}
        >
          1934年10月24日到11月27日
        </AtCard>
        <View>　</View>
        <AtCard
          title='他/她与长征'
          thumb={cz}
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
          title='历史贡献'
          thumb={history}
        >
          1934年10月24日到11月27日
        </AtCard>
        <View>　</View>
        <AtCard
          title='人物评价'
          thumb={pdes}
        >
          1934年10月24日到11月27日
        </AtCard>
        <View>　</View>
      </View>
    )
  }
}
