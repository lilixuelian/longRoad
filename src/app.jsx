import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'
import 'taro-ui/dist/style/index.scss' // 全局引入一次即可

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/pointsGather/pointsGather',
      'pages/historyVideos/historyVideos',
      'pages/recommendBooks/recommendBooks',
      'pages/importantPeople/importantPeople',
      'pages/scenicSpots/scenicSpots',
      'pages/famousArticles/famousArticles',
      'pages/difficulties/difficulties',
      'pages/Desc/Desc1/Desc1',
      'pages/Desc/Desc2/Desc2',
      'pages/Desc/Desc3/Desc3',
      'pages/Desc/Desc4/Desc4',
      'pages/Desc/Desc5/Desc5',
      'pages/Desc/Desc6/Desc6',
      'pages/Desc/Desc7/Desc7',
      'pages/Desc/Desc8/Desc8',
      'pages/Desc/Desc9/Desc9',
      'pages/Desc/Desc10/Desc10',
      'pages/Desc/Desc11/Desc11',
      'pages/Desc/Desc12/Desc12',
      'pages/Articles/Article1/Article',
      'pages/Articles/Article2/Article',
      'pages/Articles/Article3/Article',
      'pages/Articles/Article4/Article',
      'pages/Articles/Article5/Article',
      'pages/Articles/Article6/Article',
      'pages/Articles/Article7/Article',
      'pages/Articles/Article8/Article',
      'pages/Articles/Article9/Article',
      'pages/Articles/Article10/Article',
      'pages/Articles/Article11/Article',
      'pages/Articles/Article12/Article',
      'pages/Articles/Article13/Article',
      'pages/Articles/Article14/Article',
      'pages/Articles/Article15/Article',
      'pages/peopleInformation/MaoZeDong/MaoZeDong',
      'pages/peopleInformation/ZhouEnLai/ZhouEnLai',
      'pages/peopleInformation/PengDeHuai/PengDeHuai',
      'pages/peopleInformation/ZhuDe/ZhuDe',
      'pages/peopleInformation/WangRuoFei/WangRuoFei',
      'pages/peopleInformation/BoGu/BoGu',
      'pages/peopleInformation/LiuBoCheng/LiuBoCheng',
      'pages/peopleInformation/LiuShaoQi/LiuShaoQi',
      'pages/peopleInformation/ZhangWenTian/ZhangWenTian',
      'pages/peopleInformation/HeZiZhen/HeZiZhen',
      'pages/peopleInformation/YeJianYing/YeJianYing',
      'pages/peopleInformation/WangJiaXiang/WangJiaXiang',
      'pages/ChangzhengStory/index', 
      'pages/logs/logs', 
      'pages/digitalizeChangzheng/index',
      'pages/questionBank/questionBank',
      'pages/questionStart/questionStart',
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

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
