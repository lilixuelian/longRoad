import Taro, { Component } from '@tarojs/taro'
import { View} from '@tarojs/components'
import './recommendBooks.scss'
import { AtTabs, AtTabsPane } from 'taro-ui'
import Card from '../../components/Card/Card'

export default class Recommendbooks extends Component {

  config = {
    navigationBarTitleText: '推荐影视作品'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
    }
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }

  render () {
    const tabList = [{ title: '电影' }, { title: '电视剧' }, { title: '音乐' }, { title: '书' }]
    return (
      <View className='recommendBooks'>
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0} >
            <View style='background-color: #F1F0F5;'>
              <Card 
                path='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
                title='公私合营'
                content='公私合营是中国对民族资本主义工商业实行社会主义改造所采取的国家资本主义的高级形式。大体上经过个别企业的公私合营和全行业公私合营两个阶段公私合营是中国对民族资本主义工商业实行社会主义改造所。'
              />
              <Card 
                path='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
                title='卡片组件'
                content='公私合营是中国对民族资本主义工商业实行社会主义改造所采取的国家资本主义的高级形式。大体上经过个别企业的公私合营和全行业公私合营两个阶段'
              />
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View style='background-color: #F1F0F5;text-align: center;'>标签页二的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
            <View style='background-color: #F1F0F5;text-align: center;'>标签页三的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={3}>
            <View style='background-color: #F1F0F5;text-align: center;'>标签页三的内容</View>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}
