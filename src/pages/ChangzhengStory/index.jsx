import { Block, View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './index.scss'
//index.js
//获取应用实例
var app = Taro.getApp()

@withWeapp({
  data: {
    animationData: {},
    cardInfoList: [
      {
        cardUrl: 'http://m.qpic.cn/psb?/V11eVEA03x8oJX/OiNBiWcnLptlE24Uk9t3veNusZiKxrlk7dTz0NQKS7Q!/b/dLYAAAAAAAAA&bo=JwG4AQAAAAARB68!&rf=viewer_4',
        cardInfo: {
          cardTitle: '赠参救母',
          cardInfoMes: [
            '  一渡赤水后，红军来到走马坝，适逢贫农方少周家六十九岁的老母亲卧病在床。由于家境清贫，缺乏营养，加之老病缠身，没有东西吃，家里只有青菜萝卜，老人已气息奄奄，朝不保夕，一家人束手无策，要医无钱，欲救无药，只有死路一条了。',
            '可正在这时，住在方家的一位红军营长得知方母病重，他主动进屋去看望病人，只见老人快要死了，不由想起他挂包中藏了许久给自己老弱多病的母亲吃的人参给了那位方家的老母亲吃。方家的老母亲服了参汤以后，脸色转也红润，晚上又连服两次，病情大有好转，全家老小喜不自禁，连连感谢红军，这位红军营长也露出笑颜。虽然后来这位营长走了，可方家三辈人始终念念不忘红军营长“赠参救母”的恩情。'
          ]
        }
      },
      {
        cardUrl: 'http://ku.90sjimg.com/back_pic/05/01/99/82594f7aaada206.jpg%21/fwfh/804x1055/quality/90/unsharp/true/compress/true/watermark/text/OTDorr7orqE=/font/simkai/align/southeast/opacity/20/size/50',
        cardInfo: {
          cardTitle: '无私班长',
          cardInfoMes: [
            '  一九四五年秋天，红军进入了草地。由于三个小同志得了肠胃病的关系，所以指导员就让炊事班长照顾他们。 三个病号一天只走了二十里路，到了宿营地，班长就到处挖草根，和着青稞面给他们做饭。不到半个月，青稞面全吃光了。',
            '虽然班长到处找野草、挖树根，可光吃这些怎么能吃饱呢？班长眼看着他们瘦了下去，整夜整夜的合不拢眼。 有一天，班长在河边洗衣服，忽然看见了一条鱼跃出水面，他急忙找出一根缝衣针，弯成了个钩，让三个同志吃上了新鲜的鱼，喝上了鱼汤。可有一位小同志注意到在他们吃鱼的时候，班长从来不吃东西。',
            '后来，这位小同志发现班长在吃他们吃剩下的食物，眼泪就禁不住流了下来。眼看就要走出草地了，班长却饿晕过去了，三个小同志急忙去钓鱼，做汤，可班长还是为了他们而牺牲了。'
          ]
        }
      },
      {
        cardUrl: 'http://m.qpic.cn/psb?/V11eVEA03x8oJX/o8nPNwV9PgNGUHBBml7mrI1HNM1jofZgVMPvZDC.v24!/b/dL8AAAAAAAAA&bo=JAG0AQAAAAARF7A!&rf=viewer_4',
        cardInfo: {
          cardTitle: '奉献干粮',
          cardInfoMes: [
            '  有一位普通的红军叫做谢益先，过草地时，他分到了四斤干粮。在行军过程中，战士们看到了饿慌了的母子三人，小谢就瞒着队友，把自己的干粮袋给了他们，而他自己每天就吃些野菜、凉水充饥，最终，因体力不支，就这样走了。直到那母子三人来还这一只印着“谢”字的干粮袋时，部队的同志才明白了事情的原委。',
            '谢益先明明知道，在茫茫草地上，哪怕是一小袋粮食，都是救命的“宝贝”，意味着一个人的生命！但是，就是在这样的情况下，他还是毅然把自己的粮食给了那位母亲。'
          ]
        }
      }
    ]
  },
  //事件处理函数
  slidethis: function(e) {
    console.log(e)
    var animation = Taro.createAnimation({
      duration: 400,
      timingFunction: 'cubic-bezier(.8,.2,.1,0.8)'
    })
    var self = this
    this.animation = animation
    this.animation
      .translateY(-420)
      .rotate(-5)
      .translateX(0)
      .step()
    this.animation
      .translateY(62)
      .translateX(25)
      .rotate(0)
      .step()
    this.setData({
      animationData: this.animation.export()
    })
    setTimeout(function() {
      var cardInfoList = self.data.cardInfoList
      var slidethis = self.data.cardInfoList.shift()
      self.data.cardInfoList.push(slidethis)
      self.setData({
        cardInfoList: self.data.cardInfoList,
        animationData: {}
      })
    }, 450)
  },
  buythis: function(e) {
    console.log(e)
    app.buyDetail = this.data.cardInfoList[e.target.id]
    Taro.navigateTo({
      url: '../detail/detail'
    })
  },
  onLoad: function() {
    // console.log('onLoad')
    // var that = this
    // //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo) {
    //   //更新数据
    //   that.setData({
    //     userInfo: userInfo
    //   })
    // })
  }
})

class _C extends Taro.Component {
  config = {
    navigationBarTitleText: '长征小故事'
  }

  render() {
    const { animationData, cardInfoList } = this.data
    return (
      <View className="container">
        <View className="card_wrap">
          {cardInfoList.map((item, id) => {
            return (
              <View
                onTouchEnd={this.slidethis}
                animation={id === 0 ? animationData : ''}
                className={'card_item card' + (id + 1)}
                key="unique"
              >
                {/* <View>&nbsp;&nbsp;&nbsp;&nbsp;</View> */}
                {id === 0 && (
                  <View className="title" onClick={this.slidethis}>
                  </View>
                )}
                <View className="card_info">
                  {/* <Blockquote className="card_info_mes_title">
                    {/* {item.cardInfo.cardTitle} */}
                  {/* </Blockquote> */} 
                  <View className="title" onClick={this.slidethis}>
                    {item.cardInfo.cardTitle}
                  </View>
                  {item.cardInfo.cardInfoMes.map((cradMes, idx) => {
                    return (
                      <Span
                        className="card_info_mes_item font-light content3"
                        key="unique2"
                        style={'margin-top: ' + (idx === 0 ? 15 : 0) + 'px;'}
                      >
                        {cradMes}
                      </Span>
                    )
                  })}
                  {/*  <span class="card_info_mes_item">一月两送，有趣节日送奇异花</span>
                          <span class="card_info_mes_item">一月四送，有你在每天都是最好的节日</span>  */}
                </View>
                <Image src={item.cardUrl}></Image>
              </View>
            )
          })}
           {/* <view class="card_item card2">
                  <span class="change_icon">
                    <image src="../../images/changeicon.png"></image>
                  </span>
                  <view class="card_info">
                    <blockquote class="card_info_mes_title">你不知道的花事</blockquote>
                    <span class="card_info_mes_item" style="margin-top: 15px;">
                      一月一送，浪漫节日送浪漫花
                    </span>
                    <span class="card_info_mes_item">一月两送，有趣节日送奇异花</span>
                    <span class="card_info_mes_item">一月四送，有你在每天都是最好的节日</span>
                  </view>
                  <image src="http://dev.wemart.cn/console/images/card/card2.png"></image>
                </view>
                <view class="card_item card3">
                  <span class="change_icon">
                    <image src="../../images/changeicon.png"></image>
                  </span>
                  <view class="card_info">
                    <blockquote class="card_info_mes_title">你不知道的花事</blockquote>
                    <span class="card_info_mes_item" style="margin-top: 15px;">
                      一月一送，浪漫节日送浪漫花
                    </span>
                    <span class="card_info_mes_item">一月两送，有趣节日送奇异花</span>
                    <span class="card_info_mes_item">一月四送，有你在每天都是最好的节日</span>
                  </view>
                  <image src="http://dev.wemart.cn/console/images/card/card1.png"></image>
                </view>  */}
        </View>
      </View>
    )
  }
}

export default _C
