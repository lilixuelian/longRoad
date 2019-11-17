import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'
import './app.scss'
import 'taro-ui/dist/style/index.scss'


// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/timeLine/timeLine',
      'pages/pointsGather/pointsGather',
      'pages/historyVideos/historyVideos',
      'pages/recommendBooks/recommendBooks',
      'pages/importantPeople/importantPeople',
      'pages/scenicSpots/scenicSpots',
      'pages/famousArticles/famousArticles',
      'pages/difficulties/difficulties',
      'pages/historicalDataWeb/historicalDataWeb'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [
        {
          pagePath: 'pages/index/index',
          iconPath: './pictures/tabBar/event.png',
          text: '大事记',
          selectedIconPath: './pictures/tabBar/eventSelected.png'
        },
        {
          pagePath: 'pages/pointsGather/pointsGather',
          text: '其他',
          iconPath: './pictures/tabBar/others.png',
          selectedIconPath: './pictures/tabBar/othersSelected.png'
        }
      ],
      color: '#CACACA',
      selectedColor: '#7273F7',
      backgroundColor: '#ffffff',
      borderStyle: 'white'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
