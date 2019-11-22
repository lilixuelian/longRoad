import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtAccordion, AtList, AtListItem } from 'taro-ui'

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
      </View>
    )
  }
}
