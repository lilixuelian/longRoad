import { Block, View, Image, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './detail.scss'
//detail.js
//获取应用实例
var app = Taro.getApp()

@withWeapp({
  data: {}
})
class _C extends Taro.Component {
  config = {
    navigationBarTitleText: '烂漫计划'
  }

  render() {
    return (
      <View className="container">
        <View className="hader_wrap">
          <View className="header_banner">
            <View className="header_banner_tip content1">
              「Colourful多彩系列」
            </View>
            <Image src={require('../../images/flower.png')}></Image>
          </View>
          <View className="header_goods_mes text-center">
            <View className="text-center flower_name">
              混合鲜花<Span></Span>温暖的时光
            </View>
            <View className="flower_name_tip content2">
              香槟玫瑰29枝，粉色香水百合3枝，叶上花3枝
            </View>
            <View className="flower_price text-green text-center">
              ￥259~299
            </View>
            <Ul className="flower_advantage clearfix">
              <Li>精致花束包装</Li>
              <Li>新鲜空运花材</Li>
              <Li>免配送费</Li>
            </Ul>
          </View>
          <View className="flower_sku_wrap">
            <Text className="sku_name font-p">订购日期</Text>
            <View className="sku_list_wrap">
              <View className="btn-sku active inline-block">仅此一次</View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default _C
