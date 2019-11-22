import Taro, { Component } from '@tarojs/taro'
import { View} from '@tarojs/components'
import './pointsGather.scss'
import { AtGrid } from "taro-ui"

export default class Pointsgather extends Component {

  config = {
    navigationBarTitleText: '其他'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  onClick=(item, index) =>{
    if(index == 0){
      Taro.navigateTo({
        url:'../importantPeople/importantPeople'
      })
    }
    else if(index == 1){
      Taro.navigateTo({
        url: '../famousArticles/famousArticles'
      })
    }
    else if(index == 2){
      Taro.navigateTo({
        url: '../historyVideos/historyVideos'
      })
    }
    else if(index == 3){
      Taro.navigateTo({
        url: '../recommendBooks/recommendBooks'
      })
    }
    else if(index == 4){
      Taro.navigateTo({
        url: '../scenicSpots/scenicSpots'
      })
    }
    else if(index == 5){
      Taro.navigateTo({
        url: '../difficulties/difficulties'
      })
    }
  }
  render () {
    return (
      <View className='pointsGather'>
        <AtGrid data={
          [
            {
              image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
              value: '人物大事记'
            },
            {
              image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
              value: '著名文章'
            },
            {
              image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
              value: '珍贵历史资料'
            },
            {
              image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
              value: '推荐影视作品'
            },
            {
              image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
              value: '推荐景点'
            },
            {
              image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
              value: '长征路难'
            }
          ]
        }
          onClick={this.onClick}
        />
      </View>
    )
  }
}
