import Taro, { Component } from '@tarojs/taro'
import { View} from '@tarojs/components'
import './importantPeople.scss'
import People from '../../components/People/People'

export default class Importantpeople extends Component {

  config = {
    navigationBarTitleText: '人物大事记'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='importantPeople'>
        <People 
          path='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
          name='毛泽东'
        />
        <People 
          path='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
          name='周恩来'
        />
        <People 
          path='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
          name='毛泽东'
        />
        <People 
          path='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
          name='周恩来'
        />
        <People 
          path='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
          name='毛泽东'
        />
        <People 
          path='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
          name='周恩来'
        />
        <People 
          path='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
          name='毛泽东'
        />
      </View>
    )
  }
}
