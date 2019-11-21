import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './recommendBooks.scss'
// eslint-disable-next-line import/first
import { AtTabs, AtTabsPane } from 'taro-ui'
import Card from '../../components/Card/Card'
import CardLow from '../../components/CardLow/CardLow'

export default class Recommendbooks extends Component {

  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '推荐影视作品'
  }

  constructor() {
    super(...arguments)
    this.state = {
      current: 0,
    }
  }
  handleClick(value) {
    this.setState({
      current: value
    })
  }

  render() {
    const tabList = [{ title: '电影' }, { title: '电视剧' }, { title: '音乐' }, { title: '书' }, { title: '画作' }, { title: '邮票' }]
    return (
      <View className='recommendBooks'>
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0} >
            <View style='background-color: #F1F0F5;'>
              <Card
                path='https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike220%2C5%2C5%2C220%2C73/sign=b2660b742834349b600b66d7a8837eab/caef76094b36acafb9967c927cd98d1001e99c6e.jpg'
                title='四渡赤水'
                content='1982年八一电影制片厂在中国大陆出品的历史题材战争电影，由古月主演，于1983年2月1月上映。该片讲述遵义会议后，毛泽东运筹帷幄，指挥红军四渡赤水，胜利摆脱国民党军队的围追堵截的故事。'
              />
              <Card
                path='https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521884655.webp'
                title='金沙江畔'
                content='1963年上海电影制片厂在中国大陆出品的历史题材战争电影。由傅超武执导，由著名电影表演艺术家冯喆及张伐、卫禹平、曹雷、赵抒音、中叔皇等主演。该剧讲述了1936年中国工农红军北上抗日的故事。'
              />
              <Card
                path='https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268/sign=d52cdba40855b3199cf985737ba88286/e824b899a9014c0814e9bf00087b02087af4f441.jpg'
                title='草地'
                content='1986年八一电影制片厂在中国大陆出品的剧情类电影，本片讲述了长征途中普通官兵的遭遇。'
              />
              <Card
                path='https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=3c3f6dd27a8b4710da22f59ea2a7a898/622762d0f703918f2672a839593d269758eec4a6.jpg'
                title='遵义会议'
                content='由刘星等执导，佟瑞欣、郭伟华、赵滨主演。该片于2016年10月10日在中国大陆上映。该片讲述了1935年1月在红军第五次反“围剿”失败和长征初期严重受挫的情况下，中共中央在遵义召开了遵义会议历史史实。'
              />
              <Card
                path='https://image11.m1905.cn/mdb/uploadfile/2019/0723/thumb_1_283_390_20190723113911293740.jpg'
                title='马蹄声碎'
                content='刘苗苗执导，1987上映的历史记录片。讲述的是由1935年，红四方面军因错误路线的干扰，南下时受国民党军队的阻击，损失过半，被迫折回。为阻追敌，团长陈子昆受命炸毁百川大桥的故事。'
              />
              <Card
                path='http://pic0.iqiyipic.com/image/20171016/47/95/v_112871971_m_601_180_236.jpg'
                title='赣水苍茫'
                content='姜树森执导，由长春电影制片厂出品的历史战争题材电影。1979年放映，时长90分钟。'
              />
              {/* 
              <Card 
                path=''
                title=''
                content=''
              />
               */}
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View style='background-color: #F1F0F5;text-align: center;'>
              <Card
                path='http://pic.xiami.net/images/album/img17/3217/4271671298454522.jpg'
                title='长征'
                content='古典派纯音乐专辑。中国人民解放军军乐团推出的大型交响管弦乐音乐作品，包含《交响序曲》、《出征》等8首纯音乐。'
              />
              <Card 
                path='http://pic.xiami.net/images/album/img69/7169/4538291311214708.jpg'
                title='长征组歌'
                content='POP流行乐专辑。中国人民解放军战友歌舞团合唱队发行的合唱专辑，包含《四渡赤水出奇兵》等10首。'
              />
              <Card 
                path='http://imge.kugou.com/stdmusic/240/20180207/20180207181007867970.jpg'
                title='一路红歌颂长征'
                content=''
              />
              <Card 
                path='' 
                title=''
                content=''
              />
              <Card 
                path=''
                title=''
                content=''
              />
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
            <View style='background-color: #F1F0F5;text-align: center;'>标签页三的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={3}>
            <View style='background-color: #F1F0F5;text-align: center;'>标签页三的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={4}>
            <View style='background-color: #F1F0F5;text-align: center;'>
              <Card 
                path='http://epaper.gmw.cn/gmrb/images/2016-10/25/11/res04_attpic_brief.jpg'
                title=''
                content='雄关漫道真如铁，而今迈步从头越（油画·1964年）彭彬画（图片选自《中国共产党历史画典》）'
              />
              <Card 
                path='http://www.woaihuahua.com/uploads/allimg/160304/10-16030414033Q32.jpg'
                title=''
                content='红军长征军事油画    蔡鸣 王大为 马志明 苏翰宇2009年作 中国美术馆藏'
              />
              <Card 
                path='http://www.woaihuahua.com/uploads/allimg/160304/10-160304140400T3.jpg'
                title=''
                content='红军长征军事画《星火》 章仁缘1987年'
              />
              <Card 
                path='http://www.woaihuahua.com/uploads/allimg/160304/10-16030414043R13.jpg'
                title=''
                content='红军长征军事画《红军到川北》刘国枢作'
              />
              <Card 
                path='http://www.woaihuahua.com/uploads/allimg/160304/10-16030414045B02.jpg'
                title=''
                content='红军长征军事画《过普渡河（红二、六军团）》 邵亚川作'
              />
              <Card 
                path='http://www.woaihuahua.com/uploads/allimg/160304/10-160304140514100.jpg'
                title=''
                content='红军长征军事画《三大主力会师》蔡亮、张自嶷1977年作 中国美术馆藏'
              />
              <Card 
                path='http://epaper.gmw.cn/gmrb/images/2016-10/23/12/res08_attpic_brief.jpg'
                title=''
                content='娄山关（油画）全山石'
              />
              <Card 
                path='http://epaper.gmw.cn/gmrb/images/2016-10/23/12/res10_attpic_brief.jpg'
                title=''
                content='万里长征诗不尽（中国画）林 岗 庞 壔'
              />
              <Card 
                path='http://epaper.gmw.cn/gmrb/images/2016-10/23/12/res12_attpic_brief.jpg'
                title=''
                content='六盘山（中国画）李可染'
              />
              <Card 
                path='http://epaper.gmw.cn/gmrb/images/2016-10/23/12/res14_attpic_brief.jpg'
                title=''
                content='过雪山（油画）吴作人'
              />
              <Card 
                path='http://epaper.gmw.cn/gmrb/images/2016-10/23/12/res16_attpic_brief.jpg'
                title=''
                content='草地情（油画）张文源'
              />
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={5}>
            <View style='background-color: #F1F0F5;text-align: center;'>
              <CardLow 
                path='http://image100.360doc.com/DownloadImg/2016/09/3015/81271586_1'
                title=''
                content='送别'
              />
              <CardLow 
                path='http://image100.360doc.com/DownloadImg/2016/09/3015/81271586_2'
                title=''
                content='遵义会议'
              />
              <CardLow 
                path='http://image100.360doc.com/DownloadImg/2016/09/3015/81271586_3'
                title=''
                content='娄山关大捷'
              />
              <CardLow 
                path='http://image100.360doc.com/DownloadImg/2016/09/3015/81271586_4'
                title=''
                content='飞夺泸定桥'
              />
              <CardLow 
                path='http://image100.360doc.com/DownloadImg/2016/09/3015/81271586_5'
                title=''
                content='过雪山'
              />
              <CardLow 
                path='http://image100.360doc.com/DownloadImg/2016/09/3015/81271586_6'
                title=''
                content='过草地'
              />
              <CardLow 
                path='http://image100.360doc.com/DownloadImg/2016/09/3015/81271586_7'
                title=''
                content='会宁会师'
              />
              <CardLow 
                path='http://image100.360doc.com/DownloadImg/2016/09/3015/81271586_8'
                title=''
                content='三军大会师'
              />
            </View>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}
