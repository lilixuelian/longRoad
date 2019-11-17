import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'
<<<<<<< HEAD
import './app.scss'
import 'taro-ui/dist/style/index.scss'

=======

import './app.scss'
import 'taro-ui/dist/style/index.scss' // 全局引入一次即可
>>>>>>> ee431e4b71e611704c55994d0bf38a1a28fd4ceb

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
<<<<<<< HEAD
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
    }
=======
      'pages/Desc1/Desc1',
      'pages/Desc2/Desc2',
      'pages/Desc3/Desc3',
      'pages/Desc4/Desc4',
      'pages/Desc5/Desc5',
      'pages/Desc6/Desc6',
      'pages/Desc7/Desc7',
      'pages/Desc8/Desc8',
      'pages/Desc9/Desc9',
      'pages/Desc10/Desc10',
      'pages/Desc11/Desc11',
      'pages/Desc12/Desc12',

    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#f00',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
      backgroundColor:'#d40a0a',
      enablePullDownRefresh:true
    },
    tabBar:{
      color:'#888',
      selectedColor:'#000',
      backgroundColor:'#ff0000',
      list:[
      {
        pagePath: 'pages/index/index',
        text: '首页'
      },
      {
        pagePath:'pages/index/index',
        text:'测试'
      }
    ]
    }

>>>>>>> ee431e4b71e611704c55994d0bf38a1a28fd4ceb
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
