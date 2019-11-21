import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './scenicSpots.scss'
import Box from '../../components/Box/Box'

export default class Scenicspots extends Component {

  config = {
    navigationBarTitleText: '推荐景点'
  }

  render () {
    return (
      <View className='scenicSpots'>
        <Box
          path='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574688273&di=ab96656e7f31f76721312eb002a9098f&imgtype=jpg&er=1&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171001%2F31e208e550784816adaa7e4a54735f4b.jpeg'
          title='梅园新村纪念馆'
          content='中国革命纪念博物馆'
        />
        <Box
          path='http://img2.imgtn.bdimg.com/it/u=2855352317,1999594795&fm=26&gp=0.jpg'
          title='雨花台烈士陵园'
          content='中国规模最大的纪念性陵园'
        />
        <Box
          path='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
          title='公私合营'
          content='公私合营是中国对民族资本主义工商业实行社会主义改造所采取的国家资本主义的高级形式。大体上经过个别企业的公私合营和全行业公私合营两个阶段'
        />
        <Box
          path='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
          title='公私合营'
          content='公私合营是中国对民族资本主义工商业实行社会主义改造所采取的国家资本主义的高级形式。大体上经过个别企业的公私合营和全行业公私合营两个阶段'
        />
      </View>
    )
  }
}
