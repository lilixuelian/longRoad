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
            title='标题一'
          >
            <AtList hasBorder={false}>
              <AtListItem
                title='标题文字'
                note='描述信息'
                arrow='right'
                thumb={one}
              />
              <AtListItem
                title='标题文字'
                note='描述信息'
                extraText='详细信息'
                arrow='right'
                thumb={two}
              />
              <AtListItem
                title='标题文字'
                note='描述信息'
                extraText='详细信息'
                arrow='right'
                thumb={three}
              />
            </AtList>
          </AtAccordion>
          <AtAccordion
            open={this.state.open2}
            onClick={this.handleClick2.bind(this)}
            title='标题一'
          >
            <AtList hasBorder={false}>
              <AtListItem
                title='标题文字'
                note='描述信息'
                arrow='right'
                thumb={one}
              />
              <AtListItem
                title='标题文字'
                note='描述信息'
                extraText='详细信息'
                arrow='right'
                thumb={two}
              />
              <AtListItem
                title='标题文字'
                note='描述信息'
                extraText='详细信息'
                arrow='right'
                thumb={three}
              />
            </AtList>
          </AtAccordion>
          <AtAccordion
            open={this.state.open3}
            onClick={this.handleClick3.bind(this)}
            title='标题一'
          >
            <AtList hasBorder={false}>
              <AtListItem
                title='标题文字'
                note='描述信息'
                arrow='right'
                thumb={one}
              />
              <AtListItem
                title='标题文字'
                note='描述信息'
                extraText='详细信息'
                arrow='right'
                thumb={two}
              />
              <AtListItem
                title='标题文字'
                note='描述信息'
                extraText='详细信息'
                arrow='right'
                thumb={three}
              />
            </AtList>
          </AtAccordion>
          <AtAccordion
            open={this.state.open4}
            onClick={this.handleClick4.bind(this)}
            title='标题一'
          >
            <AtList hasBorder={false}>
              <AtListItem
                title='标题文字'
                note='描述信息'
                arrow='right'
                thumb={one}
              />
              <AtListItem
                title='标题文字'
                note='描述信息'
                extraText='详细信息'
                arrow='right'
                thumb={two}
              />
              <AtListItem
                title='标题文字'
                note='描述信息'
                extraText='详细信息'
                arrow='right'
                thumb={three}
              />
            </AtList>
          </AtAccordion>
          <AtAccordion
            open={this.state.open5}
            onClick={this.handleClick5.bind(this)}
            title='标题一'
          >
            <AtList hasBorder={false}>
              <AtListItem
                title='标题文字'
                note='描述信息'
                arrow='right'
                thumb={one}
              />
              <AtListItem
                title='标题文字'
                note='描述信息'
                extraText='详细信息'
                arrow='right'
                thumb={two}
              />
              <AtListItem
                title='标题文字'
                note='描述信息'
                extraText='详细信息'
                arrow='right'
                thumb={three}
              />
            </AtList>
          </AtAccordion>
        </AtCard>
        <View>　</View>
      </View>
    )
  }
}
