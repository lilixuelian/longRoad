import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtList, AtListItem, AtIcon } from 'taro-ui'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '长征',
  }

  turnto(path){
    Taro.navigateTo({
      url:path
    })
  }

  render() {
    return (
      <view className='main'>
        <AtList>
          <AtListItem
            title='突破四道封锁线'
            note='1934.10.24~1934.11.27'
            arrow='right' 
            iconInfo={{
              size: 25,
              color: '#888',
              value: 'map-pin',
            }}
            extraText='详细信息'
            arrow='right' 
            onClick={this.turnto.bind(this, '../Desc/Desc1/Desc1')}
            />
          <AtListItem
            title='强渡乌江'
            note='1935.1.2~1935.1.6 贵州乌江'
            arrow='right' 
            iconInfo={{
              size: 25,
              color: '#888',
              value: 'map-pin',
            }}
            extraText='详细信息'
            arrow='right' 
            onClick={this.turnto.bind(this, '../Desc/Desc2/Desc2')}
            />
          <AtListItem
            title='遵义会议'
            note='1935.1.15~1935.1.17 贵州遵义'
            arrow='right' 
            iconInfo={{
              size: 25,
              color: '#888',
              value: 'map-pin',
            }}
            extraText='详细信息'
            arrow='right' 
            onClick={this.turnto.bind(this, '../Desc/Desc3/Desc3')}
            />
          <AtListItem
            title='四渡赤水'
            note='1935.1.29~1935.3.21 贵州赤水'
            arrow='right' 
            iconInfo={{
              size: 25,
              color: '#888',
              value: 'map-pin',
            }}
            extraText='详细信息'
            arrow='right' 
            onClick={this.turnto.bind(this, '../Desc/Desc4/Desc4')}
            />
          <AtListItem
            title='巧渡金沙江'
            note='1935.5.9 金沙江'
            arrow='right' iconInfo={{
              size: 25,
              color: '#888',
              value: 'map-pin',
            }}
            extraText='详细信息'
            arrow='right' 
            onClick={this.turnto.bind(this, '../Desc/Desc5/Desc5')}
            />
          <AtListItem
            title='强渡大渡河'
            note='1935.5.25~1935.6.2 四川大渡河'
            arrow='right' iconInfo={{
              size: 25,
              color: '#888',
              value: 'map-pin',
            }}
            extraText='详细信息'
            arrow='right' 
            onClick={this.turnto.bind(this, '../Desc/Desc6/Desc6')}
            />
            <AtListItem
            title='飞夺泸定桥'
            note='1935.5.29 四川泸定桥'
            arrow='right' iconInfo={{
              size: 25,
              color: '#888',
              value: 'map-pin',
            }}
            extraText='详细信息'
            arrow='right' 
            onClick={this.turnto.bind(this, '../Desc/Desc7/Desc7')}
            />
            <AtListItem
            title='翻雪山'
            note='1935.6.21 四川夹金山'
            arrow='right' iconInfo={{
              size: 25,
              color: '#888',
              value: 'map-pin',
            }}
            extraText='详细信息'
            arrow='right' 
            onClick={this.turnto.bind(this, '../Desc/Desc8/Desc8')}
            />
            <AtListItem
            title='过草地'
            note='1935.8.21 川西北若尔盖地区'
            arrow='right' iconInfo={{
              size: 25,
              color: '#888',
              value: 'map-pin',
            }}
            extraText='详细信息'
            arrow='right' 
            onClick={this.turnto.bind(this, '../Desc/Desc9/Desc9')}
            />
            <AtListItem
            title='激战腊子口'
            note='1935.9.13~1935.9.17 岷山腊子口'
            arrow='right' iconInfo={{
              size: 25,
              color: '#888',
              value: 'map-pin',
            }}
            extraText='详细信息'
            arrow='right' 
            onClick={this.turnto.bind(this, '../Desc/Desc10/Desc10')}
            />
            <AtListItem
            title='吴起会师'
            note='1935.10  陕西省延安市吴起县'
            arrow='right' 
            iconInfo={{
              size: 25,
              color: '#888',
              value: 'map-pin',
            }}
            extraText='详细信息'
            arrow='right' onClick={this.turnto.bind(this, '../Desc/Desc11/Desc11')}
            />
            <AtListItem
            title='会宁会师'
            note='1936.10 甘肃省白银市会宁县'
            arrow='right' 
            iconInfo={{
              size: 25,
              color: '#888',
              value: 'map-pin',
            }}
            extraText='详细信息'
            arrow='right' onClick={this.turnto.bind(this, '../Desc/Desc12/Desc12')}
            />
        </AtList>
      </view>
    )
  }
}
