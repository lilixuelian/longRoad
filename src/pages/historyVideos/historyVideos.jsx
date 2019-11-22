import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './historyVideos.scss'
import { AtTabs, AtTabsPane } from 'taro-ui'
import Card from '../../components/Card/Card'
import CardHigh from '../../components/CardHigh/CardHigh'

export default class Historyvideos extends Component {

  config = {
    navigationBarTitleText: '珍贵历史资料'
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
    const tabList = [{ title: '长征' }, { title: '合照' }]
    return (
      <View className='historyVideos'>
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0} >
            <View style='background-color: #F1F0F5;'>
              <Card 
                path='https://pic2.zhimg.com/80/v2-18063d6aea5d6593a7ae23eb65739a6a_hd.jpg'
                title='海拔最高的红军墓地'
                content='中国海拔最高的红军墓地，在大板雪山。转自张国勤著,追逐红飘带 单骑走访长征路纪实摄影集。'
              />
              <CardHigh 
                path='https://pic2.zhimg.com/80/v2-193d87e0dfb2462eb1511043529e1b68_hd.jpg'
                title='主力部队一方面军到达陕北'
                content='主力部队一方面军到达陕北的照片（席地而坐，朴实）'
              />
              <CardHigh 
                path='https://pic3.zhimg.com/80/v2-87e209c9653abdde37046155dead82cc_hd.jpg'
                title='草鞋'
                content='十三集团军党史资料征集办公室编,万里风云 十三集团军史料选编,1987.1,'
              />
              <Card 
                path='http://5b0988e595225.cdn.sohucs.com/images/20181130/c1ccc66afc014fc7bc9fc7b9f5a7f7e8.png'
                title='草鞋2'
                content='当时红军长征时穿的草鞋。'
              />
              <Card 
                path='https://pic2.zhimg.com/80/v2-c1ecae89b9ff49734d0bba10c04c9822_hd.jpg'
                title='一张七仙女过渭河'
                content='红二十五军七仙女过渭河的照片，现存中国人民革命军事博物馆。'
              />
              <Card 
                path='http://5b0988e595225.cdn.sohucs.com/images/20181130/8c072be73f2a475bacee68b2b4086f52.png'
                title=''
                content='图中是红军翻越雪山时的照片'
              />
              <CardHigh 
                path='http://5b0988e595225.cdn.sohucs.com/images/20181130/28f145838cba445ba5a9b5b5c3079d12.png'
                title=''
                content='长征时红军的穿着，绑腿和草鞋是红军战士的两大“法宝”。'
              />
              <Card 
                path='http://5b0988e595225.cdn.sohucs.com/images/20181130/1e3e3ab4c9984f4094c03f1ec8178772.png'
                title=''
                content='这是长征中的一个战役“飞夺泸定桥”桥身都是铁索，桥下是汹涌的怒江'
              />
              <CardHigh 
                path='https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=238406150,1337070778&fm=175&app=25&f=JPEG?w=600&h=400&s=8CE272234A318DCE0A19E9920100E091'
                title=''
                content='当地百姓送我们的军人长征路，可以看出来百姓们还是十分爱我们的军人的。'
              />
              <Card 
                path='http://dingyue.ws.126.net/l6VZYKbdRLZNrCCP8PjR4RFzCZV2dq1EpdTL7GHIXuwEw1557806334523.jpg'
                title=''
                content='毛泽东、朱德、周恩来、博古（自右至左）长征胜利到达陕北后合影'
              />

              <Card 
                path='http://dingyue.ws.126.net/LCYxG3ZJdpABEJvfrIWPiR7Yx1QsfUnMjDM93GN2Cyxnh1557806334526.jpg'
                title=''
                content='红军总司令朱德向红军指战员讲话'
              />
              
              <CardHigh
                path='http://5b0988e595225.cdn.sohucs.com/images/20180712/e022653cb6814a1e9221a009f70736d0.jpeg'
                title='红军战士助民麦收'
                content='红军战士助民麦收 聂荣臻摄'
              />
              <CardHigh 
                path='http://5b0988e595225.cdn.sohucs.com/images/20180712/1d04684bd4324f7eae5f23c2b40566ed.jpeg'
                title='红小鬼歌舞队'
                content='红小鬼歌舞队 苏静摄'
              />
              <Card 
                path='http://5b0988e595225.cdn.sohucs.com/images/20180712/28d35055cc1345adb947c078c83c1793.jpeg'
                title=''
                content='红25军部分重伤员与7名女战士渡过渭河合影 当地照相馆摄'
              />
              <CardHigh 
                path='http://5b0988e595225.cdn.sohucs.com/images/20180712/7e6aa332a8d041bcbe88fcc5690789bf.jpeg'
                title=''
                content='红25军和陕甘红军在永平举行会师联欢会 当地照相馆摄'
              />
              <CardHigh 
                path='https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=4241130145,1421898565&fm=175&s=88E27227900267471E9CA08E0100C091&w=620&h=382&img.JPEG'
                title=''
                content='红军长征时期四渡赤水打乱了敌人的部署，体现了我军军事指挥官的才华。图中是当时的赤水河。'
              />
              <Card 
                path='https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1088178436,573561076&fm=175&s=8CE27A27D4090CEE8A1CA09B01008091&w=626&h=383&img.JPEG'
                title=''
                content='飞夺泸定桥牺牲了我们多少英雄战士。'
              />
              <CardHigh 
                path='https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3916609302,1943298447&fm=175&app=25&f=JPG?w=619&h=459&s=DCC3722300CAAEEB0810CC9303008091'
                title=''
                content='远征军跋山涉水，飞夺泸定桥的时刻。浩浩荡荡的队伍负重前行，河的两岸都是我们的红军部队，从队伍的起点至终点都有着不小的一段距离，但是军人们不会落队。'
              />
              <CardHigh 
                path='https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2350514925,1419514670&fm=175&app=25&f=JPG?w=620&h=414&s=FECB722344C2C8E25CB531CE0300E0B1'
                title=''
                content='部队在根据地开会商议突击方案，虽然设施简陋，但是将士们听得非常认真！这是与敌人斗智斗勇的关键一步，谋划的好，战役不战而胜，谋划失误，就会有很多将士牺牲，容不得半点马虎！'
              />
              <CardHigh 
                path='https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2603333847,3495063493&fm=175&app=25&f=JPG?w=600&h=447&s=A8C2722352E3A6F31C34149E03008081'
                title=''
                content='红军长征过程中，真实的翻山越岭的场景，稀疏的队伍走在崇山峻岭之间，随着陡峭的山路开始着蜿蜒起伏的路程，这只是长征途中的冰山一角。'
              />
              <Card 
                path='http://www.xinhuanet.com//mil/2016-08/02/129196022_14700539729281n.jpg'
                title=''
                content='这是红军长征时经过的雪山——川康边界的夹金山（资料照片）。'
              />
              <CardHigh 
                path='http://www.xinhuanet.com//mil/2016-08/02/129196022_14700544525071n.jpg'
                title=''
                content='1935年8月6日，中共中央政治局在中央红军长征途中于四川毛儿盖召开会议。会议重申党中央北上抗日的方针，并决定组织左、右两路军经草地北上。 这是毛泽东同志在毛儿盖住过的房子。'
              />
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View style='background-color: #F1F0F5;text-align: center;'>
              <CardHigh 
                path='http://www.xinhuanet.com/mil/2016-08/02/129196022_14700550707521n.jpg'
                title=''
                content=' 1935年5月25日，十七名勇士乘坐1条小船，在船工的帮助下，冒着枪林弹雨强渡大渡河，打开了中央红军北进的通道。1935年，由红1军团政治部主办的《战士报》最先报道了大渡河17勇士的事迹，并刊登了17个人和强渡大渡河模范特等射手的名单。'
              />
              <Card 
                path='http://www.xinhuanet.com//mil/2016-08/02/129196022_14700538162021n.jpg'
                title=''
                content='红二十五军团于1934年11月开始长征，到达陕北根据地与陕甘红军会师，合编为红十五军团。这是红十五军团一部。'
              />
              <Card 
                path='http://www.xinhuanet.com//mil/2016-08/02/129196022_14700542298891n.jpg'
                title='红3军团司令员和三位政治委员'
                content='红3军团司令员和三位政治委员合影。左起李富春、彭德怀、杨尚昆、滕代远。'
              />
              <Card 
                path='http://www.xinhuanet.com//mil/2016-08/02/129196022_14700543929311n.jpg'
                title='长征途中的女红军'
                content='部分长征女杰合影（左起：陈琮英、蔡畅、夏明、刘英）'
              />
              <Card 
                path='http://dingyue.ws.126.net/VEWNl98UF9TxWma5hvs200KydOcp10DV=ng9Rmqv14ljb1557806334530.jpg'
                title=''
                content='参加红军的部分彝族战士到达陕北后的合影'
              />
              <Card 
                path='http://dingyue.ws.126.net/Nw74w8s3tkqwNhBGc7xWrRsqiY3CnKgzmSCYfJ1tP8uVv1557806334530.jpg'
                title=''
                content='参加红军的部分藏族战士到达陕北后的合影'
              />
              <Card 
                path='http://dingyue.ws.126.net/j3wk529lMvNeredOAUldvyj1c57fip38OOvQWxnQipIC51557806334526.jpg'
                title=''
                content='叶剑英（右）和徐向前（左）于1937年在陕北合影'
              />
              <Card 
                path='http://dingyue.ws.126.net/v0x0pyHBTBpw2vQhx6JYWmaEU3wXd4Ag44I4TZI5Gzf8F1557806334526.jpg'
                title=''
                content='彭德怀、徐海东、彭雪枫和郭述申于1937年在陕北合影'
              />
              <Card 
                path='http://dingyue.ws.126.net/bN4VUob6gqGWkyUPFHZh8c4gG0dIbHZGcCoJ07chVpFHD1557806334526.jpg'
                title=''
                content='红军长征中单独行动的红九军团部分干部到达陕北后于延安合影'
              />
              <Card 
                path='http://dingyue.ws.126.net/=qVvHZO9iOYwbaveROK7HSFQDMQYMNPsqlMuq0aEoUrQK1557806334526.jpg'
                title=''
                content='到达陕北的红二方面军一部合影'
              />
              <Card 
                path='https://pic1.zhimg.com/80/v2-82d5f2c74224ba1d04a79d02ac0b8096_hd.jpg'
                title=''
                content='红二、六军团政治保卫局干部在贵州大定（今大方）县城的合影'
              />
              <Card 
                path='https://pic1.zhimg.com/80/v2-fd8db0398ca612d9c4dcb6c24c3e71b5_hd.jpg'
                title=''
                content='吴德峰、王震、张子意在大定的合影'
              />
              <CardHigh 
                path='https://pic4.zhimg.com/80/v2-03d6eece0b43a6b60db6368022c802f2_hd.jpg'
                title=''
                content='1935年11月29日，红六军团领导人在湖南新化合影，那时二、六军团长征刚开始不久。前排左起：周仁杰、李铨、王震、夏曦、萧克 。中排左六晏福生，左七刘礼年。后排左起：王赤军、贺庆积、戴正华。'
              />
              <CardHigh 
                path='https://pic2.zhimg.com/80/v2-4c1315e4ab177384611083eaa17eb334_hd.jpg'
                title=''
                content='红二十五军领导人与警卫员合影，第一排从左往右依次为：吴焕先、郭述申、徐海东、戴季英、赵凌波'
              />
              <CardHigh 
                path='http://5b0988e595225.cdn.sohucs.com/images/20180712/9ebf265f558e4b638e7e5cdb205dc78d.jpeg'
                title=''
                content='我军南征胜利占领新化城纪念 当地照相馆摄'
              />
              <Card 
                path='http://www.people.com.cn/mediafile/pic/20150907/86/10141354832240002394.jpg'
                title=''
                content='邓小平与部分政治工作干部在红军胜利到达陕北后在旬邑县的合影'
              />
              <CardHigh 
                path='http://5b0988e595225.cdn.sohucs.com/images/20180712/39f9532514304e58a859b4e1f3725a60.jpeg'
                title=''
                content='王震和欢迎红军的贵州苗族群众合影 当地照相馆摄'
              />
              <CardHigh 
                path='http://www.people.com.cn/mediafile/pic/20150907/18/14643702515381025690.jpg'
                title=''
                content='参加长征的部分女战士在北京合影'
              />
            </View>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}
