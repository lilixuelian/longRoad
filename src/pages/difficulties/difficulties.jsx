import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { AtAccordion, AtList, AtListItem, AtCard } from 'taro-ui'

import './difficulties.scss'

import one from '../../pictures/iconphoto/b1.png'
import two from '../../pictures/iconphoto/b2.png'
import three from '../../pictures/iconphoto/b3.png'

export default class Difficulties extends Component {

  constructor() {
    super(...arguments)
    this.state = {
      open1: false,
      open2: false,
      open3: false,
      open4: false,
      open5: false
    }
  }


  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  handleClick1(value) {
    this.setState({
      open1: value
    })
  }

  handleClick2(value) {
    this.setState({
      open2: value
    })
  }

  handleClick3(value) {
    this.setState({
      open3: value
    })
  }

  handleClick4(value) {
    this.setState({
      open4: value
    })
  }

  handleClick5(value) {
    this.setState({
      open5: value
    })
  }

  handleClick6(value) {
    this.setState({
      open6: value
    })
  }

  handleClick7(value) {
    this.setState({
      open7: value
    })
  }

  handleClick8(value) {
    this.setState({
      open8: value
    })
  }

  config = {
    navigationBarTitleText: '长征路难'
  }


  render() {
    return (
      <View className='difficulties'>
        <View>　</View>
        <AtCard>
          <View>长征遇到了什么困难？\n</View>
          <View>　</View>
          <Image src='https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D480/sign=f02bf08db1389b5038ffe15ab537e5f1/6d81800a19d8bc3e77cfec598a8ba61ea9d3455a.jpg'></Image>
          <View> 　　长征是人类历史上的伟大奇迹，中央红军共进行了380余次战斗，攻占700多座县城，红军牺牲了营以上干部多达430余人，平均年龄不到30岁，共击溃国民党军数百个团，其间共经过14个省，翻越18座大山，跨过24条大河，走过荒草地，翻过雪山，行程约二万五千里，红一方面军于1935年10月到达陕北，与陕北红军胜利会师。1936年10月，红二、四方面军到达甘肃会宁地区，同红一方面军会师。红军三大主力会师，标志着万里长征的胜利结束。\n</View>
        </AtCard>
        <View>　</View>
        <AtCard>
          <AtAccordion
            open={this.state.open1}
            onClick={this.handleClick1.bind(this)}
            title='地理环境'
          >
            <AtList hasBorder={false}>
              <AtListItem
                title='自然地理环境'
                note='雪山的极寒和草地的潮湿，地势险要，山川交纵'
                thumb={one}
              />
              <AtListItem
                title='人文地理环境'
                note='经过许多少数民族地区，语言不通'
                thumb={two}
              />
            </AtList>
          </AtAccordion>
          <AtAccordion
            open={this.state.open2}
            onClick={this.handleClick2.bind(this)}
            title='武器'
          >
            <AtList hasBorder={false}>
              <AtListItem
                title='热兵器'
                note='步马枪，山炮、迫击炮，重机枪，轻机枪，手枪，冲锋枪'
                thumb={one}
              />
              <AtListItem
                title='冷兵器'
                note='梭镖，大刀'
                thumb={two}
              />
              <AtListItem
                title='坐骑'
                note='马'
                thumb={three}
              />
            </AtList>
          </AtAccordion>
          <AtAccordion
            open={this.state.open3}
            onClick={this.handleClick3.bind(this)}
            title='武装人数与兵源'
          >
            <AtList hasBorder={false}>
              <AtListItem
                title='战争损失'
                note='仅反第四次围剿就损失近半'
                thumb={one}
              />
              <AtListItem
                title='招兵困难'
                note='大多经过山地等无人区'
                thumb={two}
              />
            </AtList>
          </AtAccordion>
          <AtAccordion
            open={this.state.open4}
            onClick={this.handleClick4.bind(this)}
            title='经济'
          >
            <AtList hasBorder={false}>
              <AtListItem
                title='战争损耗'
                note='战争损耗大量资金'
                thumb={one}
              />
              <AtListItem
                title='补充不足'
                note='仅靠打土豪和平民捐赠以及士兵自掏腰包'
                thumb={two}
              />
            </AtList>
          </AtAccordion>
          <AtAccordion
            open={this.state.open5}
            onClick={this.handleClick5.bind(this)}
            title='补给与医疗'
          >
            <AtList hasBorder={false}>
              <AtListItem
                title='没有来源'
                note='没有驻扎地就没有后方补给'
                thumb={one}
              />
              <AtListItem
                title='装备不足'
                note='没有足够衣服和帐篷，很多人都被冻死'
                thumb={two}
              />
              <AtListItem
                title='医生缺乏'
                note='因为进军速度快，条件艰苦，所以医生缺乏'
                thumb={three}
              />
            </AtList>
          </AtAccordion>
          <AtAccordion
            open={this.state.open6}
            onClick={this.handleClick6.bind(this)}
            title='内部政治斗争'
          >
            <AtList hasBorder={false}>
              <AtListItem
                title='张国焘夺权'
                note='张国焘企图获取更多权力并违背中央'
                thumb={one}
              />
            </AtList>
          </AtAccordion>
          <AtAccordion
            open={this.state.open7}
            onClick={this.handleClick7.bind(this)}
            title='路线不明和指导思想不明'
          >
            <AtList hasBorder={false}>
              <AtListItem
                title='行军路线不明'
                note='因为要躲避追击所以路线不明'
                thumb={one}
              />
              <AtListItem
                title='指导思想不明'
                note='左倾思想和逃跑主义一度盛行'
                thumb={two}
              />
              <AtListItem
                title='共产国际的干预'
                note='共产国际的错误领导，不符合实情'
                thumb={three}
              />
            </AtList>
          </AtAccordion>
          <AtAccordion
            open={this.state.open8}
            onClick={this.handleClick8.bind(this)}
            title='携带大量非战斗物资与非战斗人员'
          >
          </AtAccordion>
        </AtCard>
        <View>　</View>
      </View>
    )
  }
}
