import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './scenicSpots.scss'
import Box from '../../components/Box/Box'
export default class Scenicspots extends Component {

  config = {
    navigationBarTitleText: '推荐景点'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='scenicSpots'>
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
