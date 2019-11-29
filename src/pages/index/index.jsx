import Taro, { Component } from '@tarojs/taro'
import { AtList, AtListItem, } from 'taro-ui'
import { View } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '长征',
  }

  turnto(path, n) {
    Taro.navigateTo({
      url: path
    })
    switch (n) {
      case 1:
        this.setState({
          color1: '#f00'
        });
        break;
      case 2:
        this.setState({
          color2: '#f00'
        })
        break;
      case 3:
        this.setState({
          color3: '#f00'
        })
        break;
      case 4:
        this.setState({
          color4: '#f00'
        })
        break;
      case 5:
        this.setState({
          color5: '#f00'
        })
        break;
      case 6:
        this.setState({
          color6: '#f00'
        })
        break;
      case 7:
        this.setState({
          color7: '#f00'
        })
        break;
      case 8:
        this.setState({
          color8: '#f00'
        })
        break;
      case 9:
        this.setState({
          color9: '#f00'
        })
        break;
      case 10:
        this.setState({
          color10: '#f00'
        })
        break;
      case 11:
        this.setState({
          color11: '#f00'
        })
        break;
      case 12:
        this.setState({
          color12: '#f00'
        })
        break;
    }
  }

  state = {
    color1: '#888',
    color2: '#888',
    color3: '#888',
    color4: '#888',
    color5: '#888',
    color6: '#888',
    color7: '#888',
    color8: '#888',
    color9: '#888',
    color10: '#888',
    color11: '#888',
    color12: '#888',
  }

  render() {
    return (
      <view className='index'>
        <View> 　　</View>
        <AtList>
          <AtListItem
            title='突破四道封锁线'
            note='1934.10.24~1934.11.27'
            arrow='right'
            iconInfo={{
              size: 25,
              color: this.state.color1,
              value: 'check-circle',
            }}
            extraText='详细信息'
            arrow='right'
            onClick={this.turnto.bind(this, '../Desc/Desc1/Desc1', 1)}
          />
          <AtListItem
            title='强渡乌江'
            note='1935.1.2~1935.1.6 贵州乌江'
            arrow='right'
            iconInfo={{
              size: 25,
              color: this.state.color2,
              value: 'check-circle',
            }}
            extraText='详细信息'
            arrow='right'
            onClick={this.turnto.bind(this, '../Desc/Desc2/Desc2', 2)}
          />
          <AtListItem
            title='遵义会议'
            note='1935.1.15~1935.1.17 贵州遵义'
            arrow='right'
            iconInfo={{
              size: 25,
              color: this.state.color3,
              value: 'check-circle',
            }}
            extraText='详细信息'
            arrow='right'
            onClick={this.turnto.bind(this, '../Desc/Desc3/Desc3', 3)}
          />
          <AtListItem
            title='四渡赤水'
            note='1935.1.29~1935.3.21 贵州赤水'
            arrow='right'
            iconInfo={{
              size: 25,
              color: this.state.color4,
              value: 'check-circle',
            }}
            extraText='详细信息'
            arrow='right'
            onClick={this.turnto.bind(this, '../Desc/Desc4/Desc4', 4)}
          />
          <AtListItem
            title='巧渡金沙江'
            note='1935.5.3~1935.5.9 金沙江'
            arrow='right' iconInfo={{
              size: 25,
              color: this.state.color5,
              value: 'check-circle',
            }}
            extraText='详细信息'
            arrow='right'
            onClick={this.turnto.bind(this, '../Desc/Desc5/Desc5', 5)}
          />
          <AtListItem
            title='强渡大渡河'
            note='1935.5.25~1935.6.2 四川大渡河'
            arrow='right' iconInfo={{
              size: 25,
              color: this.state.color6,
              value: 'check-circle',
            }}
            extraText='详细信息'
            arrow='right'
            onClick={this.turnto.bind(this, '../Desc/Desc6/Desc6', 6)}
          />
          <AtListItem
            title='飞夺泸定桥'
            note='1935.5.29 四川泸定桥'
            arrow='right' iconInfo={{
              size: 25,
              color: this.state.color7,
              value: 'check-circle',
            }}
            extraText='详细信息'
            arrow='right'
            onClick={this.turnto.bind(this, '../Desc/Desc7/Desc7', 7)}
          />
          <AtListItem
            title='翻雪山'
            note='1935.6.12~1935.7.8 四川夹金山'
            arrow='right' iconInfo={{
              size: 25,
              color: this.state.color8,
              value: 'check-circle',
            }}
            extraText='详细信息'
            arrow='right'
            onClick={this.turnto.bind(this, '../Desc/Desc8/Desc8', 8)}
          />
          <AtListItem
            title='过草地'
            note='1935.8.21 川西北若尔盖地区'
            arrow='right' iconInfo={{
              size: 25,
              color: this.state.color9,
              value: 'check-circle',
            }}
            extraText='详细信息'
            arrow='right'
            onClick={this.turnto.bind(this, '../Desc/Desc9/Desc9', 9)}
          />
          <AtListItem
            title='激战腊子口'
            note='1935.9.13~1935.9.17 岷山腊子口'
            arrow='right' 
            iconInfo={{
              size: 25,
              color: this.state.color10,
              value: 'check-circle',
            }}
            extraText='详细信息'
            arrow='right'
            onClick={this.turnto.bind(this, '../Desc/Desc10/Desc10', 10)}
          />
          <AtListItem
            title='吴起会师'
            note='1935.10  陕西省延安市吴起县'
            arrow='right'
            iconInfo={{
              size: 25,
              color: this.state.color11,
              value: 'check-circle',
            }}
            extraText='详细信息'
            arrow='right' onClick={this.turnto.bind(this, '../Desc/Desc11/Desc11', 11)}
          />
          <AtListItem
            title='会宁会师'
            note='1936.10 甘肃省白银市会宁县'
            arrow='right'
            iconInfo={{
              size: 25,
              color: this.state.color12,
              value: 'check-circle',
            }}
            extraText='详细信息'
            arrow='right' onClick={this.turnto.bind(this, '../Desc/Desc12/Desc12', 12)}
          />
        </AtList>
        <View> 　　</View>
      </view>
    )
  }
}
