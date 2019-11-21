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
          path='https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=a15086bc31adcbef01347900949449e0/aec379310a55b3199a363d0d43a98226cefc17fe.jpg'
          name='毛泽东'
          page='../peopleInformation/MaoZeDong/MaoZeDong'
        />
        <People 
          path='https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=e161a7814836acaf59e091fa44e2ea2d/b219ebc4b74543a9a8a81e741d178a82b80114d2.jpg'
          name='周恩来'
          page='../peopleInformation/ZhouEnLai/ZhouEnLai'
        />
        <People 
          path='https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=5162d3485cafa40f3cc6c9db935f6472/adaf2edda3cc7cd9af8250a33f01213fb80e9118.jpg'
          name='彭德怀'
          page='../peopleInformation/PengDeHuai/PengDeHuai'
        />
        <People 
          path='https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=0f8077a27d1ed21b79c929e39555baf9/14ce36d3d539b600b2e7e9e7e950352ac65cb7b1.jpg'
          name='朱德'
          page='../peopleInformation/ZhuDe/ZhuDe'
        />
        <People 
          path='https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=3bc71dd9d788d43ff0a996f44525b526/359b033b5bb5c9ead20ab94fd439b6003bf3b3a5.jpg'
          name='王若飞'
          page='../peopleInformation/WangRuoFei/WangRuoFei'
        />
        <People 
          path='https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=e0707a90c7bf6c81f7372bee8405d608/a1ec08fa513d2697251c96a55efbb2fb4216d87f.jpg'
          name='博古'
          page='../peopleInformation/BoGu/BoGu'
        />
        <People 
          path='https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=53a3af00b70e7bec23da04e71715de05/4b90f603738da97753b03d24bf51f8198618e326.jpg'
          name='刘伯承'
          page='../peopleInformation/LiuBoCheng/LiuBoCheng'
        />
        <People 
          path='https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=394f1d2095cad1c8d0bbfb2147050034/9922720e0cf3d7ca72ca3279f21fbe096b63a984.jpg'
          name='刘少奇'
          page='../peopleInformation/LiuShaoQi/LiuShaoQi'
        />
        <People 
          path='https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=88b52bab0055b3199cf985737b92e51b/55e736d12f2eb938bc261d58df628535e4dd6fd4.jpg'
          name='张闻天'
          page='../peopleInformation/ZhangWenTian/ZhangWenTian'
        />
        <People 
          path='https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=00f0b0cf46fbfbeddc59317940cb900b/a2cc7cd98d1001e9635e35ffb50e7bec55e797db.jpg'
          name='贺子珍'
          page='../peopleInformation/HeZiZhen/HeZiZhen'
        />
        <People 
          path='https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=1da7851ba418972ba33a07ccdef61cb4/9213b07eca806538c1661d1c98dda144ad348235.jpg'
          name='叶剑英'
          page='../peopleInformation/YeJianYing/YeJianYing'
        />
        <People 
          path='https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=bf37bb22d12a283447a631096bb5c92e/7aec54e736d12f2e6656055f4ac2d562853568ba.jpg'
          name='王稼祥'
          page='../peopleInformation/WangJiaXiang/WangJiaXiang'
        />
      </View>
    )
  }
}
