import { Block, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './index.scss'

@withWeapp({
  data: {
    animationRotate: {}
  }
})
class _C extends Taro.Component {
  render() {
    return (
      <View className="container" style='display: block'>
        <View className="content" style='display: block'>
          <View className="content-word" style='display: block'>
            <View className="content-move" style='display: block'>
              <View className="world">
              中央红军从1934年10月10日到1936年10月22日，共742天，合2年零12天。
              </View>
              <View className="world">
              长征出发：约300000人；长征结束：约25000人。抵达终点者为出发人数1/12。
              </View>
              <View className="world">
              1、红一方面军（中央红军）：出发人数86789人，抵达终点约六七千人。
                <View className="world">
               2 、红二方面军：出发人数<View className='red'>1.7万</View>人，抵达终点约1万余人。
                </View>
                <View className="world">
                3、红二方面军：出发人数1.7万人，抵达终点约1万余人。
                </View>
                <View className="world">
                4、红25军：出发人数2981人,1935年到延安3400人。
                </View>
                <View className="world">
                总行程6.5万余里；
                </View>
                <View className="world">
                红一方面军：二万五千里。
                </View>
                <View className="world">
                红二方面军：二万余里。
                </View>
                <View className="world">
                红四方面军：一万余里。
                </View>
                <View className="world">
                红25军：近万余里。
                </View>
                <View className="world">
                长征经过省：14个。江西、福建、广东、广西、湖南、贵州、四川、云南、西康（原为四川一部分）、甘肃、山西等。
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
} //index.js

export default _C
