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
        url: '../digitalizeChangzheng/index'
      })
    }
    else if(index == 6){
      Taro.navigateTo({
        url: '../ChangzhengStory/index'
      })
    }
    else if(index == 7){
      Taro.navigateTo({
        url: '../questionBank/questionBank'
      })
    }
    else if(index == 8){
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
              image: 'https://i.ibb.co/9Hpr840/person.png',
              value: '人物大事记'
            },
            {
              image: 'https://i.ibb.co/vVXvLF3/files.png',
              value: '著名文章'
            },
            {
              image: 'https://i.ibb.co/3zMW2s6/lishiziliao.png',
              value: '珍贵历史资料'
            },
            {
              image: 'https://i.ibb.co/NsW24nV/Video-Camera-I.png',
              value: '推荐影视作品'
            },
            {
              image: 'https://i.ibb.co/dKjTwCd/forest.png',
              value: '推荐景点'
            },
            {
              image: 'https://i.ibb.co/CWNpccV/Numbered-list.png',
              value: '数字长征'
            },
            {
              image: 'https://i.ibb.co/2FvBbY1/Story.png',
              value: '长征小故事'
            },
            {
              image: 'https://i.ibb.co/4tjschd/test.png',
              value: '题库答题'
            },
            {
              image: 'https://i.ibb.co/h7FxJP1/Reports.png',
              value: '长征路难'
            },
          ]
        }
          onClick={this.onClick}
        />
      </View>
    )
  }
}
