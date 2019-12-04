import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './recommendBooks.scss'
import { AtTabs, AtTabsPane } from 'taro-ui'
import Card from '../../components/Card/Card'
import CardZhai from '../../components/CardZhai/CardZhai'
import CardLow from '../../components/CardLow/CardLow'
import CardHigh from '../../components/CardHigh/CardHigh'
import MusicCard from '../../components/MusicCard/MusicCard'

export default class Recommendbooks extends Component {

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
              {/* 
              <Card 
                path=''
                title=''
                content=''
              />
               */}
              <CardZhai
                path='https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike220%2C5%2C5%2C220%2C73/sign=b2660b742834349b600b66d7a8837eab/caef76094b36acafb9967c927cd98d1001e99c6e.jpg'
                title='四渡赤水'
                content='1982年八一电影制片厂在中国大陆出品的历史题材战争电影，由古月主演，于1983年2月1月上映。该片讲述遵义会议后，毛泽东运筹帷幄，指挥红军四渡赤水，胜利摆脱国民党军队的围追堵截的故事。'
              />
              <CardZhai
                path='https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521884655.webp'
                title='金沙江畔'
                content='1963年上海电影制片厂在中国大陆出品的历史题材战争电影。由傅超武执导，由著名电影表演艺术家冯喆及张伐、卫禹平、曹雷、赵抒音、中叔皇等主演。该剧讲述了1936年中国工农红军北上抗日的故事。'
              />
              <CardZhai
                path='https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268/sign=d52cdba40855b3199cf985737ba88286/e824b899a9014c0814e9bf00087b02087af4f441.jpg'
                title='草地'
                content='1986年八一电影制片厂在中国大陆出品的剧情类电影，本片讲述了长征途中普通官兵的遭遇。'
              />
              <CardZhai
                path='https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=3c3f6dd27a8b4710da22f59ea2a7a898/622762d0f703918f2672a839593d269758eec4a6.jpg'
                title='遵义会议'
                content='由刘星等执导，佟瑞欣、郭伟华、赵滨主演。该片于2016年10月10日在中国大陆上映。该片讲述了1935年1月在红军第五次反“围剿”失败和长征初期严重受挫的情况下，中共中央在遵义召开了遵义会议历史史实。'
              />
              <CardZhai
                path='https://image11.m1905.cn/mdb/uploadfile/2019/0723/thumb_1_283_390_20190723113911293740.jpg'
                title='马蹄声碎'
                content='刘苗苗执导，1987上映的历史记录片。讲述的是由1935年，红四方面军因错误路线的干扰，南下时受国民党军队的阻击，损失过半，被迫折回。为阻追敌，团长陈子昆受命炸毁百川大桥的故事。'
              />
              <CardZhai
                path='http://pic0.iqiyipic.com/image/20171016/47/95/v_112871971_m_601_180_236.jpg'
                title='赣水苍茫'
                content='姜树森执导，由长春电影制片厂出品的历史战争题材电影。1979年放映，时长90分钟。'
              />
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View style='background-color: #F1F0F5;text-align: center;'>
              <Card
                path='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574425697692&di=c9e2dd94ea3c7c970ea6d752e8c64ca0&imgtype=0&src=http%3A%2F%2Fr.sinaimg.cn%2Flarge%2Farticle%2F82a47b51b7c209d0e7b037daf8c19ffa'
                title='伟大的转折'
                content='2019年首播。由李伟执导，侯京健、许敏、王韦智、马晓伟等主演的革命历史剧。该剧讲述了毛泽东等在红军长征途中自通道转兵以后，指挥中央红军最终粉碎数十倍国民党军围追堵截而使红军重出生天的故事。'
              />
              <Card
                path='http://img3.imgtn.bdimg.com/it/u=1798509528,2451464823&fm=26&gp=0.jpg'
                title='雄关漫道'
                content='由八一电影制片厂、中央电视台影视部、等单位于2006年联合出品的电视剧，由张玉中执导，王健、杜源、等主演。'
              />
              <Card
                path='https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268/sign=f613599cd43f8794d3ff4f28ea1b0ead/5bafa40f4bfbfbedcf328c5b78f0f736afc31fae.jpg'
                title='强渡嘉陵江'
                content='由八一电影制片厂出品的军事历史剧。由王珈执导，夏宇立为编剧。 由樊志起等领衔主演。本剧取材于一段真实的历史，它反映的是徐向前元帅和红四方面军的一段鲜为人知的重大历史事件。：'
              />
              <Card
                path='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574321553907&di=fda98368680bdc437ddfcbcd4fd36d6f&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D3209027301%2C1476752346%26fm%3D214%26gp%3D0.jpg'
                title='红军摇篮'
                content='由金韬执导，王霙、王伍福等人主演的革命题材电视剧。于2010年1月16日在央视一套播出。该剧讲述了1929年至1934年毛泽东、朱德等老一辈无产阶级革命家，在以瑞金为中心的赣南、闽西苏区纵横驰骋，进行共和国建设伟大预演的历史故事'
              />
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
            <View style='background-color: #F1F0F5;text-align: center;'>
              <MusicCard
                poster='http://p2.music.126.net/I2ajFAF4Zh93NyEwBHVCRg==/1426066593653442.jpg?param=130y130'
                name='八月桂花遍地开'
                author='徐贵祥'
                src='http://m801.music.126.net/20191204213928/19aebfe67c1361dc0554ed86ae80d781/jdyyaac/015c/0258/0509/66f201dd7452fdf78e312ca011c342bf.m4a'
                title='《八月桂花遍地开》'
                content='曲调优美、歌词生动，这首歌很快就在豫东南革命根据地传开了。后来，伴随着红军的足迹传遍了大江南北。它是以大别山民歌《八段锦》为曲调、依曲填词而成的。'
              />
              <MusicCard
                poster='http://p1.music.126.net/PmpjIEsnzmR8jx7C-QTb1A==/109951163497823236.jpg?param=130y130'
                name='十送红军'
                author='朱正本、张士燮收集整理'
                src='http://m801.music.126.net/20191204214306/4f279f96969835d86dc4b20072d9975d/jdyyaac/0f58/5609/075d/821617c94facd6fe3414070e50ae2e4c.m4a'
                title='《十送红军》'
                content='当年，在中国共产党和红四方面军的领导下进行了艰苦卓绝的斗争，留下了可歌可泣，光照日月的事迹。这些，必然要反映到劳动人民口头文学的创作里。'
              />
              <MusicCard
                poster='http://p2.music.126.net/vlgUxpQBrJhjFgh3MFBFOQ==/109951163497917519.jpg?param=130y130'
                name='过雪山草地'
                author='肖华'
                src='http://m801.music.126.net/20191122193912/5d43e3e833603678e702cad4dada05fb/jdyyaac/065d/5253/530e/17ca566e7ae97a8a55cfdd878ab758ce.m4a'
                title='《过雪山草地》'
                content='歌词内容可以分为两部分， 第一部分描写红军过雪山草地时遇到的极大困难。第二部分描写红军战天斗地、以野菜充饥的顽强斗志，表现了红军战士力量的源泉。'
              />
              <MusicCard
                poster='http://p2.music.126.net/y1IX3If8JHSwOTOvUq8jig==/86861418611943.jpg?param=130y130'
                name='突破封锁线'
                author='萧华'
                src='http://m801.music.126.net/20191121210208/47a4c55ece9c8321fcf116302dbd2fd8/jdyyaac/0f5e/565c/5352/84a5b81935a6fdc8f999d80189083a42.m4a'
                title='《突破封锁线》'
                content='《突破封锁线》是《长征组歌》的第二首，萧华作词，1976年舞台艺术片《长征组歌》拍摄完成。'
              />

            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={3}>
            <View style='background-color: #F1F0F5;text-align: center;'>
              <CardHigh
                path='http://img3m7.ddimg.cn/49/15/20033887-1_u.jpg'
                title='《中国工农红军长征亲历记》'
                content='《中国工农红军长征亲历记》是2005年5月1日由四川人民出版社出版的图书，作者是李海文。本书重新梳理和精选了原文90篇，按一日、一事，行军时间、路线顺序排列。这样，读者看到的将是一个完整的红军长征历程，长征故事。'
              />
              <CardHigh
                path='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574336431800&di=4c3eb7064ea330f830d0706aed8c6435&imgtype=0&src=http%3A%2F%2Fimg1.winxuan.cn%2F5389%2F10095389_16.jpg%3F1401042432007'
                title='《长征：前所未闻的故事》'
                content='一本记述20世纪30年代中共领导下的中国工农红军面临绝境，被迫转移，历经艰难险阻，终于脱离险境的纪实性文学作品。由美国作家、全美作家协会主席哈里森·埃文斯·索尔兹伯里于1986年写成，三年后被译成中文在中国大陆出版发行。'
              />
              <CardHigh
                path='https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=7f2bfdc85cda81cb5aeb8b9f330fbb73/eac4b74543a982261db93e1b8782b9014a90eb96.jpg'
                title='《红星照耀中国》'
                content='《红星照耀中国》是美国著名记者埃德加·斯诺的不朽名著，一部文笔优美的纪实性很强的报道性作品。作者真实记录了自1936年6月至10月在中国西北革命根据地进行实地采访的所见所闻，向全世界真实报道了中国共产党和中国工农红军以及许多红军领袖、红军将领的情况。'
              />
              <Card
                path='https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike272%2C5%2C5%2C272%2C90/sign=7210436a9b13b07ea9b0585a6dbefa46/7aec54e736d12f2e30da6a2b47c2d5628435689a.jpg'
                title='《长征》'
                content='中国工农红军长征所展现的永不磨灭的信念，是全人类追寻理想的宝贵精神财富。为增进广大读者对长征精神的理解，弘扬长征精神在当今的现实意义，王树增先生创作出《长征》，广受读者好评赞赏。'
              />
              <Card
                path='http://img2.imgtn.bdimg.com/it/u=3985817173,2938599803&fm=15&gp=0.jpg'
                title='《红军长征追踪》'
                content='《红军长征追踪》是一本是日记，也是一部历史，更是一本独特的研究著作。作者在长征路上边记录 [1]  ，边思考，让读者在许多“离所示闻的故事”中得到新启示。'
              />
              <CardHigh
                path='http://img3.jarhu.com/goodimages/201210/13/di1350100633728.jpg'
                title='《长征行》'
                content='《长征行》是2006年1月1日中共党史出版社出版的图书，作者是石仲泉。本书是作者利用六年的时间，重走了红一、红二方面军的全部长征路及红二十五军的部分长征路，对主要历史事件的发生地、重要历史人物的重大活动情况作了深入细致的探究和分析。'
              />
              <CardHigh
                path='http://img0.winxuancdn.com/4749/1201534749_0_1_800x800.jpg?1524638817960&imageMogr2/thumbnail/600x600'
                title='《红军长征记》'
                content='《红军长征记》是1937年2月由丁玲主编的一本记述长征的书，原名初为《二万五千里》。《红军长征记》是极为珍贵的一本书，也是我党我军历史上最早、最真实、最具文化特色的纪实文学作品。'
              />
              <CardHigh
                path='http://img30.ddimg.cn/44/9/1123494020-1_u_1.jpg'
                title='《地球的红飘带》'
                content='《地球的红飘带》 [1]  是我国第一部描写红军二万五千里长征的长篇小说。作品从湘江之役写起，描绘了中央红军长征的完整过程。作者——著名作家魏巍以诗人的激情和历史学家的严肃精神，真实地、艺术地再现了长征这一人类历史上的壮举，使诗与史融为一体。'
              />
              <CardHigh
                path='https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike72%2C5%2C5%2C72%2C24/sign=da4ce2afc0fdfc03f175ebeab556ecf1/58ee3d6d55fbb2fb51a64c434c4a20a44723dcd5.jpg'
                title='《从革命到政治：长征与毛泽东的崛起》'
                content='《从革命到政治:长征与毛泽东的崛起》以20世纪30年代红军长征为中心题材，讨论中国革命与中国政治的相互关系。作者应用了大量国内外文献档案和当事人自述资料，澄清了若干史实疑难问题，'
              />
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={4}>
            <View style='background-color: #F1F0F5;text-align: center;'>
              <CardHigh
                path='http://epaper.gmw.cn/gmrb/images/2016-10/25/11/res04_attpic_brief.jpg'
                title=''
                content='雄关漫道真如铁，而今迈步从头越（油画·1964年）彭彬画（图片选自《中国共产党历史画典》）'
              />
              <CardHigh
                path='http://www.woaihuahua.com/uploads/allimg/160304/10-16030414033Q32.jpg'
                title=''
                content='红军长征军事油画    蔡鸣 王大为 马志明 苏翰宇2009年作 中国美术馆藏'
              />
              <Card
                path='http://www.woaihuahua.com/uploads/allimg/160304/10-160304140400T3.jpg'
                title=''
                content='红军长征军事画《星火》 章仁缘1987年'
              />
              <CardHigh
                path='http://www.woaihuahua.com/uploads/allimg/160304/10-16030414043R13.jpg'
                title=''
                content='红军长征军事画《红军到川北》刘国枢作'
              />
              <CardHigh
                path='http://www.woaihuahua.com/uploads/allimg/160304/10-16030414045B02.jpg'
                title=''
                content='红军长征军事画《过普渡河（红二、六军团）》 邵亚川作'
              />
              <CardHigh
                path='http://www.woaihuahua.com/uploads/allimg/160304/10-160304140514100.jpg'
                title=''
                content='红军长征军事画《三大主力会师》蔡亮、张自嶷1977年作 中国美术馆藏'
              />
              <CardHigh
                path='http://epaper.gmw.cn/gmrb/images/2016-10/23/12/res08_attpic_brief.jpg'
                title=''
                content='娄山关（油画）全山石'
              />
              <CardHigh
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
                path='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574424968557&di=cdc5e4437719ccedf2bdc07a089aab47&imgtype=0&src=http%3A%2F%2Fwww.cnarts.net%2Fuploadimages%2Fcweb%2Fnews%2F2015-01%2F2015-01-26%2F2015-01-26_14014199.jpg'
                title=''
                content='长征胜利七十周年'
              />
              <CardLow
                path='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574425181687&di=71b953ef19074b3bd554aa9888027d5c&imgtype=0&src=http%3A%2F%2Fp1.ifengimg.com%2Fcmpp%2F2016%2F10%2F15%2F15%2Fea945000-0756-4443-8c28-8f434dfdfe7c_size336_w500_h302.png'
                title=''
                content='长征胜利八十周年'
              />
              <CardLow
                path='https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1551194183,2162157236&fm=26&gp=0.jpg'
                title=''
                content='遵义会议五十周年'
              />
              <CardLow
                path='https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1053700472,431281535&fm=26&gp=0.jpg'
                title=''
                content='娄山关大捷'
              />
              <CardLow
                path='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574425449539&di=b78c1e9e28130c1c5587323a283c97bf&imgtype=0&src=http%3A%2F%2Fimage.bjzxcp.com%2Fimages%2Fupload%2F2016%2F10%2F1017%2F1476685480199436.png'
                title=''
                content='过雪山'
              />
              <CardLow
                path='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574425473726&di=cea25e69feb581b3f1d5ebeccb613188&imgtype=0&src=http%3A%2F%2Fwww.zhybb.com%2Fbyc%2Fimages%2Fstm220%2FCUCN%2FA6025%2FCUCN-A6025S-04.jpg'
                title=''
                content='过草地'
              />
              {/* <CardLow
                path='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574425497842&di=481115f85b470dbee8b0eb1ac7371d29&imgtype=0&src=http%3A%2F%2Fwww.zhybb.com%2Fimages%2Fstm220%2FCUCN%2FB2014%2FCUCN-B2014S-04.jpg'
                title=''
                content='会宁会师'
              /> */}
              <CardLow
                path='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574425537589&di=7a0abfa545f5c0cfa1d9f3c9b4217bae&imgtype=0&src=http%3A%2F%2Fztd00.photos.bdimg.com%2Fztd%2Fw%3D700%3Bq%3D50%2Fsign%3D4628a612d900baa1ba2c45bb772bc82f%2F08f790529822720ed5e6890473cb0a46f21fab20.jpg'
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
