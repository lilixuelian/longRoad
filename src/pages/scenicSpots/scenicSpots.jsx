import Taro, { Component } from '@tarojs/taro'
import { View, Image, Button } from '@tarojs/components'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from "taro-ui"

import './scenicSpots.scss'
import BoxS from '../../components/BoxS/BoxS'


export default class Scenicspots extends Component {


  constructor(props) {
    super(props);
    this.state = {
      isOpened1: false,
      isOpened2: false,
      isOpened3: false,
      isOpened4: false,
      isOpened5: false,
      isOpened6: false,
      isOpened7: false,
      isOpened8: false,
      isOpened9: false,
      isOpened10: false,
      isOpened11: false,
      isOpened12: false,
      isOpened13: false,
      isOpened14: false,
      isOpened15: false,
      isOpened16: false,
      isOpened17: false,
      isOpened18: false,
      isOpened19: false,
      isOpened20: false,
      isOpened21: false,
      isOpened22: false,
    };
  }

  config = {
    navigationBarTitleText: '推荐景点'
  }

  handleConfirm1(){
    this.setState({
      isOpened1: false
    });
  }
  handleOpen1(){
    this.setState({
      isOpened1: true
    });
  }
  handleConfirm2(){
    this.setState({
      isOpened2: false
    });
  }
  handleOpen2(){
    this.setState({
      isOpened2: true
    });
  }
  handleConfirm3(){
    this.setState({
      isOpened3: false
    });
  }
  handleOpen3(){
    this.setState({
      isOpened3: true
    });
  }
  handleConfirm4(){
    this.setState({
      isOpened4: false
    });
  }
  handleOpen4(){
    this.setState({
      isOpened4: true
    });
  }
  handleConfirm5(){
    this.setState({
      isOpened5: false
    });
  }
  handleOpen5(){
    this.setState({
      isOpened5: true
    });
  }
  handleConfirm6(){
    this.setState({
      isOpened6: false
    });
  }
  handleOpen6(){
    this.setState({
      isOpened6: true
    });
  }
  handleConfirm7(){
    this.setState({
      isOpened7: false
    });
  }
  handleOpen7(){
    this.setState({
      isOpened7: true
    });
  }
  handleConfirm8(){
    this.setState({
      isOpened8: false
    });
  }
  handleOpen8(){
    this.setState({
      isOpened8: true
    });
  }
  handleConfirm9(){
    this.setState({
      isOpened9: false
    });
  }
  handleOpen9(){
    this.setState({
      isOpened9: true
    });
  }
  handleConfirm10(){
    this.setState({
      isOpened10: false
    });
  }
  handleOpen10(){
    this.setState({
      isOpened10: true
    });
  }
  handleConfirm11(){
    this.setState({
      isOpened11: false
    });
  }
  handleOpen11(){
    this.setState({
      isOpened11: true
    });
  }
  handleConfirm12(){
    this.setState({
      isOpened12: false
    });
  }
  handleOpen12(){
    this.setState({
      isOpened12: true
    });
  }
  handleConfirm13(){
    this.setState({
      isOpened13: false
    });
  }
  handleOpen13(){
    this.setState({
      isOpened13: true
    });
  }
  handleConfirm14(){
    this.setState({
      isOpened14: false
    });
  }
  handleOpen14(){
    this.setState({
      isOpened14: true
    });
  }
  handleConfirm15(){
    this.setState({
      isOpened15: false
    });
  }
  handleOpen15(){
    this.setState({
      isOpened15: true
    });
  }
  handleConfirm16(){
    this.setState({
      isOpened16: false
    });
  }
  handleOpen16(){
    this.setState({
      isOpened16: true
    });
  }
  handleConfirm17(){
    this.setState({
      isOpened17: false
    });
  }
  handleOpen17(){
    this.setState({
      isOpened17: true
    });
  }
  handleConfirm18(){
    this.setState({
      isOpened18: false
    });
  }
  handleOpen18(){
    this.setState({
      isOpened18: true
    });
  }
  handleConfirm19(){
    this.setState({
      isOpened19: false
    });
  }
  handleOpen19(){
    this.setState({
      isOpened19: true
    });
  }
  handleConfirm20(){
    this.setState({
      isOpened20: false
    });
  }
  handleOpen20(){
    this.setState({
      isOpened20: true
    });
  }
  handleConfirm21(){
    this.setState({
      isOpened21: false
    });
  }
  handleOpen21(){
    this.setState({
      isOpened21: true
    });
  }
  handleConfirm22(){
    this.setState({
      isOpened21: false
    });
  }
  handleOpen22(){
    this.setState({
      isOpened21: true
    });
  }


  render () {
    let i1=this.state.isOpened1
    let i2=this.state.isOpened2
    let i3=this.state.isOpened3
    let i4=this.state.isOpened4
    let i5=this.state.isOpened5
    let i6=this.state.isOpened6
    let i7=this.state.isOpened7
    let i8=this.state.isOpened8
    let i9=this.state.isOpened9
    let i10=this.state.isOpened10
    let i11=this.state.isOpened11
    let i12=this.state.isOpened12
    let i13=this.state.isOpened13
    let i14=this.state.isOpened14
    let i15=this.state.isOpened15
    let i16=this.state.isOpened16
    let i17=this.state.isOpened17
    let i18=this.state.isOpened18
    let i19=this.state.isOpened19
    let i20=this.state.isOpened20
    let i21=this.state.isOpened21
    let i22=this.state.isOpened22

    return (
      <View className='scenicSpots'>
        <View onClick={this.handleOpen1.bind(this)}>
        <BoxS
          path='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574316943732&di=b65c0f83ed246a59766f554e1da0a7fd&imgtype=0&src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2F100a0a0000004hiidBF27.jpg'
          title='瑞金共和国摇篮景区'
          content='江西省瑞金市沙洲坝镇金都大道'
          contentmore='瑞金共和国摇篮景区位于江西省瑞金市沙洲坝镇金都大道，占地面积4550余亩，由叶坪景区、红井景区、二苏大景区、中华苏维埃纪念园组成。
          瑞金共和国摇篮景区，既保留“形体”的简朴，又展现出内涵的“身价”，其中，叶坪景区包括毛泽东和朱德的旧居、临时中央政府旧址、红军广场、红军检阅台、红军烈士纪念亭、博生堡、公略亭等。沙洲坝景区包括中央政府大礼堂旧址、中华全国总工会旧址、中国工农红军总政治部旧址、红井、列宁小学旧址等。二苏大景区包括中国共产党中央局旧址、中华苏维埃共和国临时中央政府大礼堂旧址等。
          瑞金共和国摇篮景区是中宣部首批公布的全国爱国主义教育示范基地，也是中国红色旅游经典景区之一、中国旅游观光、培育爱国情感和民族精神的重要基地，是赣闽边际红色旅游集散中心，于2015年7月被列为国家5A级旅游景区。'
        />
        </View>
        <AtModal isOpened={i1}>
           <AtModalHeader>瑞金共和国摇篮景区</AtModalHeader>
           <AtModalContent>
             <Image src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574316943732&di=b65c0f83ed246a59766f554e1da0a7fd&imgtype=0&src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2F100a0a0000004hiidBF27.jpg' style='margin-left: 150rpx'></Image>
             <View style='bottom: 30rpx'>瑞金共和国摇篮景区位于江西省瑞金市沙洲坝镇金都大道，占地面积4550余亩，由叶坪景区、红井景区、二苏大景区、中华苏维埃纪念园组成。
          瑞金共和国摇篮景区，既保留“形体”的简朴，又展现出内涵的“身价”，其中，叶坪景区包括毛泽东和朱德的旧居、临时中央政府旧址、红军广场、红军检阅台、红军烈士纪念亭、博生堡、公略亭等。沙洲坝景区包括中央政府大礼堂旧址、中华全国总工会旧址、中国工农红军总政治部旧址、红井、列宁小学旧址等。二苏大景区包括中国共产党中央局旧址、中华苏维埃共和国临时中央政府大礼堂旧址等。瑞金共和国摇篮景区是中宣部首批公布的全国爱国主义教育示范基地，也是中国红色旅游经典景区之一、中国旅游观光、培育爱国情感和民族精神的重要基地，是赣闽边际红色旅游集散中心，于2015年7月被列为国家5A级旅游景区。</View>
          <View style='height: 30rpx'></View>
           </AtModalContent>
        <AtModalAction><Button onClick={this.handleConfirm1.bind(this)}>确定</Button> </AtModalAction>
        </AtModal>
        <View onClick={this.handleOpen2.bind(this)}>
        <BoxS
          path='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574316485204&di=8ce0c5768778d05b14267b41a6fdb5da&imgtype=0&src=http%3A%2F%2F511.img.pp.sohu.com.cn%2Fimages%2Fblog%2F2010%2F11%2F15%2F8%2F4%2Fu57557712_12d032692a4g213.jpg'
          title='湘江烈士纪念碑园'
          content='广西兴安县南狮子山'
          contentmore='位于广西兴安县南狮子山，碑园占地120亩，气势恢宏，800立方米的红军群雕堪称全国纪念性群雕之最，园区还建有红军长征突破湘江纪念馆。灵湖路、双灵路将红军碑园与灵渠紧密相连，构成兴安最重要的灵渠、乐满地、红军碑园旅游风景区。'
        />
        </View>
        <AtModal isOpened={i2}>
           <AtModalHeader>湘江烈士纪念碑园</AtModalHeader>
           <AtModalContent>
             <Image src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574316943732&di=b65c0f83ed246a59766f554e1da0a7fd&imgtype=0&src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2F100a0a0000004hiidBF27.jpg' style='margin-left: 150rpx'></Image>
             <View style='bottom: 30rpx'>位于广西兴安县南狮子山，碑园占地120亩，气势恢宏，800立方米的红军群雕堪称全国纪念性群雕之最，园区还建有红军长征突破湘江纪念馆。灵湖路、双灵路将红军碑园与灵渠紧密相连，构成兴安最重要的灵渠、乐满地、红军碑园旅游风景区。</View>
          <View style='height: 30rpx'></View>
           </AtModalContent>
        <AtModalAction><Button onClick={this.handleConfirm2.bind(this)}>确定</Button> </AtModalAction>
        </AtModal>
        <View onClick={this.handleOpen3.bind(this)}>
        <BoxS
          path='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574316912851&di=5e92bc6263d581a6184010dae5a02bfb&imgtype=0&src=http%3A%2F%2Fimg11.soufunimg.com%2Fopen%2F2018_06%2F07%2FM20%2F0D%2F7F%2FChCE4VsZT0SIEotDAADLgIEgsgwABCpRwDbH2EAAMuY771.jpg'
          title='遵义会议会址'
          content='贵州省遵义市老城红旗路80号'
        />
        </View>
        <AtModal isOpened={i3}>
           <AtModalHeader>遵义会议会址</AtModalHeader>
           <AtModalContent>
             <Image src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574316912851&di=5e92bc6263d581a6184010dae5a02bfb&imgtype=0&src=http%3A%2F%2Fimg11.soufunimg.com%2Fopen%2F2018_06%2F07%2FM20%2F0D%2F7F%2FChCE4VsZT0SIEotDAADLgIEgsgwABCpRwDbH2EAAMuY771.jpg' style='margin-left: 150rpx'></Image>
             <View style='bottom: 30rpx'>遵义会议会址位于贵州省遵义市老城红旗路80号。1955年，在遵义会议会址建立了遵义会议纪念馆；1964年，毛泽东同志为纪念馆题写了“遵义会议会址”六个大字。
          会址是幢砖木结构、通体用灰砖砌成的两层楼房，建于二十世纪三十年代，原是贵州军阀、黔军二十五军第二师师长柏辉章的私人官邸。楼房座北朝南，平面呈曲尺形，一楼有走廊，楼层四面有柱廊，面阔25.75米，进深16.95米，高12米，占地面积528平方米。</View>
          <View style='height: 30rpx'></View>
           </AtModalContent>
        <AtModalAction><Button onClick={this.handleConfirm3.bind(this)}>确定</Button> </AtModalAction>
        </AtModal>
        <View onClick={this.handleOpen4.bind(this)}>
        <BoxS
          path='http://img4.imgtn.bdimg.com/it/u=2920902330,261551980&fm=26&gp=0.jpg'
          title='四渡赤水纪念馆'
          content='贵州省习水县土城镇'
        />
        </View>
        <AtModal isOpened={i4}>
           <AtModalHeader>四渡赤水纪念馆</AtModalHeader>
           <AtModalContent>
             <Image src='http://img4.imgtn.bdimg.com/it/u=2920902330,261551980&fm=26&gp=0.jpg' style='margin-left: 150rpx'></Image>
             <View style='bottom: 30rpx'>四渡赤水纪念馆包括四渡赤水纪念馆主馆、中国女红军纪念馆、红军医院纪念馆、红九军团陈列馆、赤水河航运历史展览馆、赤水河盐文化陈列馆、土城古镇博物馆等馆群，以及毛泽东、周恩来住居，朱德住居，红军总司令部驻地，红军总参谋部驻地，红三军团司令部驻地，土城老街红军驻地，青杠坡战斗遗址，女红军街，土城渡口纪念碑和二郎滩、淋滩渡口等十多处全国重点文物保护单位。四渡赤水之战，是红军长征中最精彩绝伦的军事行动。毛泽东称此役是他平生得意之笔。</View>
          <View style='height: 30rpx'></View>
           </AtModalContent>
        <AtModalAction><Button onClick={this.handleConfirm4.bind(this)}>确定</Button> </AtModalAction>
       </AtModal>
       <View onClick={this.handleOpen5.bind(this)}>
       <BoxS
         path='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574335861417&di=fa90e953c5cd539f61ac80bd3845182f&imgtype=0&src=http%3A%2F%2Fnews.yntv.cn%2Fcontent%2F18%2F201608%2F11%2FP_1336432_8__915031995.jpg'
         title='扎西会议纪念馆'
         content='云南省威信县扎西镇'
       />
        </View>
        <AtModal isOpened={i5}>
           <AtModalHeader>扎西会议纪念馆</AtModalHeader>
           <AtModalContent>
             <Image src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574335861417&di=fa90e953c5cd539f61ac80bd3845182f&imgtype=0&src=http%3A%2F%2Fnews.yntv.cn%2Fcontent%2F18%2F201608%2F11%2FP_1336432_8__915031995.jpg' style='margin-left: 150rpx'></Image>
             <View style='bottom: 30rpx'>纪念馆位于云南省威信县扎西镇东北隅，于1977年12月落成并正式对外开放。纪念馆含扎西会议会址主体陈列和扎西陈列馆辅助陈列两个部分。纪念馆藏有红军留下的枪支弹药、医疗器械、文献资料、生活用品等珍贵文物300余件。
          扎西会议陈列馆倚山而建，气势恢弘，可鸟瞰扎西全景，有上下两层四个展室，展厅面积2590平方米。陈列展览内容自建馆以来，先后进行了四次补充和修改，最后一次是在1996年5月。陈列展线长180米，共展出各种图片170多幅，红 军遗物70多件，较全面地反映和介绍了红军长征集结扎西、扎西会议、红 军川滇黔边区游击队和云南游击支队的革命斗争历史与活动情况。扎西会议会址原为江西会馆（又称江西庙）和湖广会馆（又称禹王宫），是当地常见的木结构建筑，古色古香，典雅庄重。
          1935年1月下旬，中央红军分兵三路从遵义向川南进发。途中，土城战斗失利，损失很重。红军一渡赤水后，在四川泸州、宜宾一带北渡长江，严重受阻，被迫改向集结扎西，研究新的对策。2月5日至10日，中央政治局先后在水田花房子、大词滩、扎西镇连续召开会议。因为扎西是会议结束的地点，所以，史称这次会议为“扎西会议”。 扎西会议根据敌情变化确定了中央红军新的战略行动方针，讨论通过了《中共中央关于反对敌人五次“围剿”的总结决议》，并决定《决议大纲》在红军中传达贯彻；研究部署了红军的精简缩编问题；作出了回师黔北，重占遵义的重大决策；作出了成立中共川南特委和组建中国工农红军川南游击队的决定。扎西会议使毛泽东的军事主张得到全军的认可和贯彻执行，会后即取得了红军长征以来的第一次大胜利——遵义大捷，极大地鼓舞了红军士气，为红军继续长征并战胜困难，取得胜利奠定了坚实基础。</View>
          <View style='height: 30rpx'></View>
           </AtModalContent>
        <AtModalAction><Button onClick={this.handleConfirm5.bind(this)}>确定</Button> </AtModalAction>
       </AtModal>
       <View onClick={this.handleOpen6.bind(this)}>
       <BoxS
         path='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574930778&di=f43e018263763ef0c3dbdba09d307acf&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.jjjc.yn.gov.cn%2Fupload%2F2016-09%2F30%2F595ad88178fda1d21ba7af5ff9b19a40_thumb.jpg'
         title='石鼓渡口'
         content='云南省威信县扎西镇'
       />
        </View>
        <AtModal isOpened={i6}>
           <AtModalHeader>石鼓渡口</AtModalHeader>
           <AtModalContent>
             <Image src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574930778&di=f43e018263763ef0c3dbdba09d307acf&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.jjjc.yn.gov.cn%2Fupload%2F2016-09%2F30%2F595ad88178fda1d21ba7af5ff9b19a40_thumb.jpg' style='margin-left: 150rpx'></Image>
             <View style='bottom: 30rpx'>云南省丽江市玉龙县石鼓镇的石鼓渡口，是当年红军渡金沙江经过的地方，位于县境西部，东邻九河、龙蟠两乡，南接石头乡，西与仁和、黎明两乡相连，北与金庄乡为界，总面积344平方公里。 石鼓镇距丽江县城70公里。在金沙江流转角处的小山岗上建有一面汉白玉雕成的鼓状石碑，石鼓因此得名。石鼓渡口江面宽阔，水势平缓，适于摆渡，历来为兵家必争之地。
          1936年4月，中国工农红军二方面军在贺龙、任弼时、肖克率领下，从这里渡江。据《铁流两万里——贺龙在长征中》记载，4月25日，贺龙等到达丽江，司令部设在狮子山东麓翠文街，后又转移到江边的石鼓镇。
          1936年4月25日黄昏，红二、六军团渡江先锋团——四师十二团，由团长黄新廷带领十几名战士，于木瓜寨驾起在海洛塘搞到的小船首渡成功，接着，大队人马点燃火炬开始夜渡。渡过江的红军在沿岸继续找船，总共得到七条船，二十八名水手，还请木匠扎了一些筏子，于是，在东起石鼓西至巨甸的一百多里江面上，二、六军团全面展开了渡江作业。经过四天三夜不停地摆渡，到28日晨，二、六军团一万八千人全部渡过金沙江，将敌人远远甩在了身后。</View>
          <View style='height: 30rpx'></View>
           </AtModalContent>
        <AtModalAction><Button onClick={this.handleConfirm6.bind(this)}>确定</Button> </AtModalAction>
       </AtModal>

       <View onClick={this.handleOpen7.bind(this)}>
       <BoxS
         path='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574336087953&di=71ec637d4e718e2d41e0ab5733db8da2&imgtype=0&src=http%3A%2F%2Fpic.baa.bitautotech.com%2Fimg%2Fv2pic.baa.bitautotech.com%2Fusergroup%2F2017%2F3%2F30%2F93fe8a09cef846698599e68fab9207d0_990_0_max_jpg.jpg'
         title='红军长征柯渡纪念馆'
         content='云南省威信县扎西镇'
       />
        </View>
        <AtModal isOpened={i7}>
           <AtModalHeader>红军长征柯渡纪念馆</AtModalHeader>
           <AtModalContent>
             <Image src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574336087953&di=71ec637d4e718e2d41e0ab5733db8da2&imgtype=0&src=http%3A%2F%2Fpic.baa.bitautotech.com%2Fimg%2Fv2pic.baa.bitautotech.com%2Fusergroup%2F2017%2F3%2F30%2F93fe8a09cef846698599e68fab9207d0_990_0_max_jpg.jpg' style='margin-left: 150rpx'></Image>
             <View style='bottom: 30rpx'>云南省丽江市玉龙县石鼓镇的石鼓渡口，是当年红军渡金沙江经过的地方，位于县境西部，东邻九河、龙蟠两乡，南接石头乡，西与仁和、黎明两乡相连，北与金庄乡为界，总面积344平方公里。 石鼓镇距丽江县城70公里。在金沙江流转角处的小山岗上建有一面汉白玉雕成的鼓状石碑，石鼓因此得名。石鼓渡口江面宽阔，水势平缓，适于摆渡，历来为兵家必争之地。
          1936年4月，中国工农红军二方面军在贺龙、任弼时、肖克率领下，从这里渡江。据《铁流两万里——贺龙在长征中》记载，4月25日，贺龙等到达丽江，司令部设在狮子山东麓翠文街，后又转移到江边的石鼓镇。
          1936年4月25日黄昏，红二、六军团渡江先锋团——四师十二团，由团长黄新廷带领十几名战士，于木瓜寨驾起在海洛塘搞到的小船首渡成功，接着，大队人马点燃火炬开始夜渡。渡过江的红军在沿岸继续找船，总共得到七条船，二十八名水手，还请木匠扎了一些筏子，于是，在东起石鼓西至巨甸的一百多里江面上，二、六军团全面展开了渡江作业。经过四天三夜不停地摆渡，到28日晨，二、六军团一万八千人全部渡过金沙江，将敌人远远甩在了身后。</View>
          <View style='height: 30rpx'></View>
           </AtModalContent>
        <AtModalAction><Button onClick={this.handleConfirm7.bind(this)}>确定</Button> </AtModalAction>
       </AtModal>

       <View onClick={this.handleOpen8.bind(this)}>
       <BoxS
         path='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574424663228&di=f222c7ab52511a90873efa68044a186f&imgtype=0&src=http%3A%2F%2Fc2-q.mafengwo.net%2Fs10%2FM00%2F70%2FC7%2FwKgBZ1kJhwiAKUe7AAL38hYDCvM30.jpeg%3FimageView2%2F2%2Fw%2F680%2Fq%2F90'
         title='皎平渡大桥'
         content='云南昆明禄劝县皎西乡皎平渡渡口'
       />
        </View>
        <AtModal isOpened={i8}>
           <AtModalHeader>皎平渡大桥</AtModalHeader>
           <AtModalContent>
             <Image src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574424663228&di=f222c7ab52511a90873efa68044a186f&imgtype=0&src=http%3A%2F%2Fc2-q.mafengwo.net%2Fs10%2FM00%2F70%2FC7%2FwKgBZ1kJhwiAKUe7AAL38hYDCvM30.jpeg%3FimageView2%2F2%2Fw%2F680%2Fq%2F90' style='margin-left: 150rpx'></Image>
             <View style='bottom: 30rpx'>金沙江位于云南昆明禄劝县皎西乡皎平渡渡口。金沙江位于长江的上游。它穿行在川滇边界的深山狭谷间，江面宽阔，水急浪大。如果红军过不去，就会被敌人压进深山狭谷，遭致全军覆灭的危险。于1935年5月3日晚至9日，从皎平渡口巧渡金沙江，彻底摆脱了国民党几十万大军的围追堵截。3万名红军胜利甩脱了几十万国民党军队的围追堵截，真正地跳出了敌人的包围圈，自此皎平渡写入了中国革命的历史。在金沙江边举头遥望，可以看到对岸蜿蜒的山脊地形成一个仰卧的毛主席头像，其五官比例惟妙惟肖，神态安详，让人惊叹大自然的鬼斧神工，也成为金沙江畔一道奇特的风景线。1992年，连接川滇两省的皎平渡大桥落成，聂荣臻元帅亲自为《红军巧渡金沙江纪念碑》题写碑名，宋任穷(当年红军干部团政委)题写了碑文，详尽地记载了红军的渡江经历和渡江后两次激战的经过，成为向子孙后代进行革命传统教育的重要内容，皎平渡口及山洞遗址也成为省级文物保护单位。</View>
          <View style='height: 30rpx'></View>
           </AtModalContent>
        <AtModalAction><Button onClick={this.handleConfirm8.bind(this)}>确定</Button> </AtModalAction>
       </AtModal>
       <View onClick={this.handleOpen9.bind(this)}>
       <BoxS
         path='https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=70713217,1665610114&fm=26&gp=0.jpg'
         title='安顺场'
         content='四川省石棉县安顺场地区'
       />
        </View>
        <AtModal isOpened={i9}>
           <AtModalHeader>安顺场</AtModalHeader>
           <AtModalContent>
             <Image src='https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=70713217,1665610114&fm=26&gp=0.jpg' style='margin-left: 150rpx'></Image>
             <View style='bottom: 30rpx'>金沙江位于云南昆明禄劝县皎西乡皎平渡渡口。金沙江位于长江的上游。它穿行在川滇边界的深山狭谷间，江面宽阔，水急浪大。如果红军过不去，就会被敌人压进深山狭谷，遭致全军覆灭的危险。于1935年5月3日晚至9日，从皎平渡口巧渡金沙江，彻底摆脱了国民党几十万大军的围追堵截。3万名红军胜利甩脱了几十万国民党军队的围追堵截，真正地跳出了敌人的包围圈，自此皎平渡写入了中国革命的历史。在金沙江边举头遥望，可以看到对岸蜿蜒的山脊地形成一个仰卧的毛主席头像，其五官比例惟妙惟肖，神态安详，让人惊叹大自然的鬼斧神工，也成为金沙江畔一道奇特的风景线。1992年，连接川滇两省的皎平渡大桥落成，聂荣臻元帅亲自为《红军巧渡金沙江纪念碑》题写碑名，宋任穷(当年红军干部团政委)题写了碑文，详尽地记载了红军的渡江经历和渡江后两次激战的经过，成为向子孙后代进行革命传统教育的重要内容，皎平渡口及山洞遗址也成为省级文物保护单位。</View>
          <View style='height: 30rpx'></View>
           </AtModalContent>
        <AtModalAction><Button onClick={this.handleConfirm9.bind(this)}>确定</Button> </AtModalAction>
       </AtModal>
       <View onClick={this.handleOpen10.bind(this)}>
        <BoxS
          path='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574336206876&di=400f99c653c2f32af650e868b1745cc0&imgtype=0&src=http%3A%2F%2Fwww.ganzixinwen.com%2Fuploads%2Ffile%2F2017%2F0330%2F20170330030646503.jpeg'
          title='强渡大渡河纪念馆'
          content='四川省雅安市石棉县'
        />
        </View>
        <AtModal isOpened={i10}>
           <AtModalHeader>强渡大渡河纪念馆</AtModalHeader>
           <AtModalContent>
             <Image src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574336206876&di=400f99c653c2f32af650e868b1745cc0&imgtype=0&src=http%3A%2F%2Fwww.ganzixinwen.com%2Fuploads%2Ffile%2F2017%2F0330%2F20170330030646503.jpeg' style='margin-left: 150rpx'></Image>
             <View style='bottom: 30rpx'>红军强渡大渡河纪念馆位于四川省雅安市石棉县大渡河西岸，纪念馆于2002年5月25日奠基，2003年12月5日全面完工。纪念馆总面积6600平方米，其中纪念馆占地2600平方米，总投资409万元。展厅以弘扬红军精神为主题，分为长征、大渡河战役、红军长征过安雅、翼王悲歌、历史评述等五个部分。
          拥有馆藏228件，其中实物类73件，图片类155幅。纪念馆建筑采用唐式风格，对称布局和院落形式，内设休息、接待、展厅、办公研修区域。配套工程包括入口广场、纪念广场、雕塑广场、红军渡口、红军宣誓场。并修建了大渡河纪念碑，江泽民同志亲自题写了碑名。</View>
          <View style='height: 30rpx'></View>
           </AtModalContent>
        <AtModalAction><Button onClick={this.handleConfirm10.bind(this)}>确定</Button> </AtModalAction>
       </AtModal>
       <View onClick={this.handleOpen11.bind(this)}>
        <BoxS
          path='https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2484394985,2410733021&fm=26&gp=0.jpg'
          title='泸定桥'
          content='四川省甘孜藏族自治州泸定县'
        />
        </View>
        <AtModal isOpened={i11}>
           <AtModalHeader>泸定桥</AtModalHeader>
           <AtModalContent>
             <Image src='https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2484394985,2410733021&fm=26&gp=0.jpg' style='margin-left: 150rpx'></Image>
             <View style='bottom: 30rpx'>泸定桥位于四川省甘孜藏族自治州泸定县泸桥镇，自清以来，为四川入藏的重要通道和军事要津。1935年5月29日，中国工农红军长征途经这里，以22位勇士为先导的突击队，冒着敌人的枪林弹雨，铁索桥上匍匐前进，一举消灭桥头守卫。“飞夺泸定桥”，打开了红军长征北上抗日的通道，谱写了中国革命史上和世界军史上“惊、险、奇、绝”的战争奇迹，使之成为中国共产党重要的历史纪念地。飞夺泸定桥是红军长征中的一场战役，发生于1935年5月29日。中央红军部队在四川省中西部强渡大渡河成功，沿大渡河左岸北上，主力由安顺场沿大渡河右岸北上，红四团官兵在天下大雨的情况下，在崎岖陡峭的山路上跑步前进，一昼夜奔袭竟达120公里，终于在5月29日凌晨6时许按时到达泸定桥西岸。创造了人类行军史的奇迹!第2连连长廖大珠等22名突击队员沿着枪林弹雨和火墙密布的铁索踩着铁链夺下桥头，并与左岸部队合围占领了泸定桥。打破了蒋介石妄图把红军变成第二个石达开的反革命迷梦，是红军长征中具有战略意义的重大胜利之一。这次胜利体现了红军无限忠于人民革命事业的大无畏精神。泸定桥参观浏览点由三部分组成：一是泸定桥。二是泸定桥革命文物博物馆，馆内以照片、资料、实物展出红军强渡大渡河、飞夺泸定桥等情况，以及当时红军领导的题词，著名书法家、画家的书法、名画。三是“红军飞夺泸定桥纪念碑”及其公园，邓小平题写的碑名，聂荣臻撰写的碑文、纪念碑及其公园，设计新颖，把纪念意义、地方风情、艺术博览、旅游观光融为一体。</View>
          <View style='height: 30rpx'></View>
           </AtModalContent>
        <AtModalAction><Button onClick={this.handleConfirm11.bind(this)}>确定</Button> </AtModalAction>
       </AtModal>
       <View onClick={this.handleOpen12.bind(this)}>
        <BoxS
          path='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574336269987&di=36a6a26e74d738a921d9d4f610e7ad05&imgtype=0&src=http%3A%2F%2Fdimg09.c-ctrip.com%2Fimages%2F10070j000000b418iC6BD_R_1024_10000_Q90.jpg'
          title='红军飞夺泸定桥纪念馆'
          content='四川省甘孜藏族自治州泸定县'
        />
        </View>
        <AtModal isOpened={i12}>
           <AtModalHeader>红军飞夺泸定桥纪念馆</AtModalHeader>
           <AtModalContent>
             <Image src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574336269987&di=36a6a26e74d738a921d9d4f610e7ad05&imgtype=0&src=http%3A%2F%2Fdimg09.c-ctrip.com%2Fimages%2F10070j000000b418iC6BD_R_1024_10000_Q90.jpg' style='margin-left: 150rpx'></Image>
             <View style='bottom: 30rpx'>红军飞夺泸定桥纪念馆坐落于泸定县城西南的红军飞夺泸定桥纪念碑公园内。纪念馆的外观造型独特，气势雄伟，融合了川西民居、藏式建筑、明清古建筑的元素，与纪念碑公园大门、红军飞夺泸定桥纪念碑形成了一条延伸的红色文化游览中轴线。纪念馆屋顶模拟天安门城楼，寓意“十三根光秃秃的铁链托起了共和国”。纪念馆于2004年12月6日破土动工，2005年5月25日竣工，2005年5月29日正式开馆。</View>
          <View style='height: 30rpx'></View>
           </AtModalContent>
        <AtModalAction><Button onClick={this.handleConfirm12.bind(this)}>确定</Button> </AtModalAction>
       </AtModal>


       <View onClick={this.handleOpen13.bind(this)}>
        <BoxS
          path='https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=367936382,2802886123&fm=26&gp=0.jpg'
          title='夹金山'
          content='四川省雅安市宝兴县'
        />
        </View>
        <AtModal isOpened={i13}>
           <AtModalHeader>夹金山</AtModalHeader>
           <AtModalContent>
             <Image src='https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=367936382,2802886123&fm=26&gp=0.jpg' style='margin-left: 150rpx'></Image>
             <View style='bottom: 30rpx'>红军过雪山是红军长征期间重要事件。红军于1935年6月8日突破敌人芦山、宝兴防线，随后翻越了长征路上第一座大雪山——夹金山。夹金山被当地老百姓叫做神仙山。他们告诉红军，鸟儿都飞不过去，人最好是别靠近它，但无畏的红军却偏偏要与命运抗争。夹金山即长征路上的大雪山，是长征路上重要的行程之一。红军以大无畏的精神在上面几次翻越，最后到达陕北，体现了红军精神万岁。红军公园将长征路上所经过的地点作为景点显示给游人，雪山是主要的景点之一。夹金山位于四川省雅安市宝兴县境内，是省级风景名胜区、国家级森林公园，是中国工农红军二万五千里长征翻越的第一座大雪山，也是雅安通往小金四姑娘山的必经之道。夹金山又名大雪山，以雪景著称。这里原始森林茂密，自然风光旖旎，雪峰晶莹，主峰海拔为4930米，是青衣江的发源地，逆流而上，两岸悬崖陡峭，谷幽峡深，湖泊明净，瀑布飞溅，野生动植物随处可见，构成一幅使人向往的自然景观。</View>
          <View style='height: 30rpx'></View>
           </AtModalContent>
        <AtModalAction><Button onClick={this.handleConfirm13.bind(this)}>确定</Button> </AtModalAction>
       </AtModal>

       <View onClick={this.handleOpen14.bind(this)}>
        <BoxS
          path='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574336425879&di=9b3e04f29dcbed01e51af1191bb023b0&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181018%2Fc2fbb2a60e2b483789ba7e68de2a4828.jpeg'
          title='红军长征翻越夹金山纪念碑'
          content='四川省雅安市宝兴县'
        />
        </View>
        <AtModal isOpened={i14}>
           <AtModalHeader>红军长征翻越夹金山纪念碑</AtModalHeader>
           <AtModalContent>
             <Image src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574336269987&di=36a6a26e74d738a921d9d4f610e7ad05&imgtype=0&src=http%3A%2F%2Fdimg09.c-ctrip.com%2Fimages%2F10070j000000b418iC6BD_R_1024_10000_Q90.jpg' style='margin-left: 150rpx'></Image>
             <View style='bottom: 30rpx'>红军长征翻越夹金山纪念碑位于四川宝兴县。1935-1936年，红军在此翻越夹金山。为纪念红军战士与中央伟大决策，当地人民政府修建纪念碑。
          纪念馆位于县城内青衣江畔，占地约5000平方米。整个纪念馆由红军广场、主题雕塑和红军长征翻越夹金山连环画护拦三大部分组成。纪念馆建筑面积1350平方米，展厅内展出了很多珍贵的红军手书和文物；红军广场占地3500平方米，主要是园林绿化和休闲广场。主题雕塑长6米，宽2.5米；连环画护拦有112块浮雕石板，是由川大艺术学院教授巫成金精心设计制作，非常壮观，让人们在广场休闲的同时，缅怀革命先烈、增强爱国意识。</View>
          <View style='height: 30rpx'></View>
           </AtModalContent>
        <AtModalAction><Button onClick={this.handleConfirm14.bind(this)}>确定</Button> </AtModalAction>
       </AtModal>

       <View onClick={this.handleOpen15.bind(this)}>
        <BoxS
          path='http://img2.imgtn.bdimg.com/it/u=2483885202,1156260704&fm=26&gp=0.jpg'
          title='懋功'
          content='四川省小金县驻地美兴镇'
        />
        </View>
        <AtModal isOpened={i15}>
           <AtModalHeader>懋功</AtModalHeader>
           <AtModalContent>
             <Image src='http://img2.imgtn.bdimg.com/it/u=2483885202,1156260704&fm=26&gp=0.jpg' style='margin-left: 150rpx'></Image>
             <View style='bottom: 30rpx'>懋功会师是指红军长征于1935年6月18日，中共中央、中央军委率领一方面红军主力到达懋功，与前来接应的红四方面军会师。红四方面军的西进部队于1935年6月8日攻克懋功。接着，以一部前出至懋功东南的达维乡。6月12日，红一方面军先头部队在北进达维途中，同红4方面军一部胜利会师。18日，中共中央、中革军委和红1方面军主力到达懋功，21日晚，红1方面军和红4方面军的部队举行联欢会，庆祝会师。小金县旧称懋功，位于四川省西北部，阿坝藏族羌族自治州南端。这个位于夹金山北麓的川西北小城，皆因它与中国革命的一段撼人心魄的历史连在一起而闻名遐迩。1935年6月红一、四方面军于长征途中在这里胜利会师，小金由此被载入了中国革命的伟大史册。</View>
          <View style='height: 30rpx'></View>
           </AtModalContent>
        <AtModalAction><Button onClick={this.handleConfirm15.bind(this)}>确定</Button> </AtModalAction>
       </AtModal>
       <View onClick={this.handleOpen16.bind(this)}>
        <BoxS
          path='http://img2.imgtn.bdimg.com/it/u=2124080642,3143444506&fm=26&gp=0.jpg'
          title='若尔盖'
          content='川西北若尔盖地区'
        />
        </View>
        <AtModal isOpened={i16}>
           <AtModalHeader>若尔盖</AtModalHeader>
           <AtModalContent>
             <Image src='http://img2.imgtn.bdimg.com/it/u=2124080642,3143444506&fm=26&gp=0.jpg' style='margin-left: 150rpx'></Image>
             <View style='bottom: 30rpx'>红军过草地之艰难，是后人难以感受到的。每年的5月至9月为草地雨季，使本已滞水泥泞的沼泽，更成漫漫泽国。红军正是在这个季节经过草地的。过草地有三怕：一怕没踩着草甸陷进泥沼，泥沼一般很深，如果拼命往上挣扎，会越陷越深，来不及抢救就会被污泥吞噬;泥水不仅不能饮用，而且破了皮的腿脚泡过，还会红肿甚至溃烂;二怕下雨;三怕过河。红军为此牺牲了好多人，红一方面军1935年6月过草地之前统计共有近2万人，过草地之后剩下1.3万人，损失6207人。红二方面军1936年7月过草地之前有1.6万人，走出草地时为1.3万人，过草地损失约3092人。红四方面军三过草地损失最大，仅以第三次过草地统计即损失近7000人。如果加上第一、二次过草地损失的人数，估计损失数翻一倍还要多。
          红军的长征在四川滞留的时间最长、经历的地区最广阔、面临的环境最艰险、进行的斗争最卓绝、付出的牺牲也最大，所有这一切，都在世称“松潘草地”的若尔盖草原得以集中体现。班佑村的红军过草地第一村，七八月份的大草地上，遍地都是各种不知名的野草野花。在红军过草地的过程中，这些野菜成了红军战士最后的选择。</View>
          <View style='height: 30rpx'></View>
           </AtModalContent>
        <AtModalAction><Button onClick={this.handleConfirm16.bind(this)}>确定</Button> </AtModalAction>
       </AtModal>
       <View onClick={this.handleOpen17.bind(this)}>
        <BoxS
          path='http://img0.imgtn.bdimg.com/it/u=4293135719,2796640445&fm=26&gp=0.jpg'
          title='腊子口国家森林公园'
          content='甘肃省甘南藏族自治州迭部县'
        />
        </View>
        <AtModal isOpened={i17}>
           <AtModalHeader>腊子口国家森林公园</AtModalHeader>
           <AtModalContent>
             <Image src='http://img0.imgtn.bdimg.com/it/u=4293135719,2796640445&fm=26&gp=0.jpg' style='margin-left: 150rpx'></Image>
             <View style='bottom: 30rpx'>腊子口这一场极其惨烈的战斗，早已被当做经典战例载入长征史册。当年攻占腊子口，与其说是用手榴弹打开的，不如说是红军指战员以血肉之躯夺取的。天险腊子口成为中国革命史上举世闻名的革命胜迹，驰名中外。突破天险腊子口后，红军主力从朱立沟(朱李沟景区)翻山越岭到达哈达铺，红军余部从牛路沟(即一线天景区)翻山到达岷县，沿途有当年红军走过的木桥和栈道。从这里可以缅怀革命先烈为了革命事业，为了建立新中国，历经千辛万苦，抛头颅、洒热血，浴血奋战的情景，也可以重走长征路，接受爱国主义教育。这一仗红军打出了军威，打开了进军甘肃的大门，为后续部队开辟了道路。英雄的红四团以自己英勇顽强的战斗，在腊子口树立了与日月同辉的历史丰碑。腊子口国家森林公园始建于1999年，2003年被评审为国家级森林公园。现有铁尺梁、一线天、梅鹿沟、老龙沟、腊子河和朱李沟六大景区，总面积486平方公里。腊子口地处甘南藏族自治州境内原始森林高山峡谷地带，是红军长征腊子口战役发生地。沉积着丰厚的绿色森林生态、自然山水文化、长征红色文化、地域民族文化和宗教文化等旅游资源。</View>
          <View style='height: 30rpx'></View>
           </AtModalContent>
        <AtModalAction><Button onClick={this.handleConfirm17.bind(this)}>确定</Button> </AtModalAction>
       </AtModal>
       <View onClick={this.handleOpen18.bind(this)}>
        <BoxS
          path='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574336535271&di=91320c79736122070dd3dcacb69c2f87&imgtype=0&src=http%3A%2F%2Fw171-attachment.oss-cn-beijing.aliyuncs.com%2Fimages%2F7701%2F2017%2F12%2FYB2Nyooy52KA7oE5DD67BzOb50k0d6.jpg'
          title='腊子口国家森林公园'
          content='甘肃省宕昌县哈达铺镇'
        />
        </View>
        <AtModal isOpened={i18}>
           <AtModalHeader>哈达铺红军长征纪念馆</AtModalHeader>
           <AtModalContent>
             <Image src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574336535271&di=91320c79736122070dd3dcacb69c2f87&imgtype=0&src=http%3A%2F%2Fw171-attachment.oss-cn-beijing.aliyuncs.com%2Fimages%2F7701%2F2017%2F12%2FYB2Nyooy52KA7oE5DD67BzOb50k0d6.jpg' style='margin-left: 150rpx'></Image>
             <View style='bottom: 30rpx'>哈达铺位于岷山脚下，1935年中国工农红军二、三方面军突破国民党反动派的围追堵截，直插哈达铺，在这里制定了挥师陕北，建立革命根据地的伟大战略决策，为中国革命史写下了光辉的一页。哈达铺红军长征纪念馆筹建于1978年，1981年10月被甘肃省人民政府公布为省级重点文物保护单位。2001年6月被国务院公布为全国重点文物保护单位。2016年12月，哈达铺红军长征纪念馆被列入全国红色旅游经典景区名录。
          哈达铺红军长征纪念馆，位于甘肃省宕昌县哈达铺镇，地处国道212线的交通要道上，南距县城35公里，北距岷县县城35公里，西距迭部腊子口70公里。中国工农红军一、二、四方面军三大主力长征，都经过哈达铺。1935年9月18日，党中央率领红一方面军突破天险腊子口，占领哈达铺。20日下午，毛泽东、周恩来等中央领导到达哈达铺。从当地邮政代办所国民党报纸上获得陕北有红军和根据地的消息，做出了把红军长征的落脚点放在陕北的重大决策。9月23日，中央率陕甘支队离开哈达铺北上。1936年8月9日，红四方面军第30军通过腊子口后占领哈达铺；25日红二方面军六军进驻哈达铺。9月1日，红二方面军总指挥部及二军到达哈达铺。到10月4日，相继北上。在国务院公布全国重点文物保护单位时称“哈达铺是决定中国工农红军长征命运的重要决策地”。</View>
          <View style='height: 30rpx'></View>
           </AtModalContent>
        <AtModalAction><Button onClick={this.handleConfirm18.bind(this)}>确定</Button> </AtModalAction>
       </AtModal>
       <View onClick={this.handleOpen19.bind(this)}>
        <BoxS
          path='https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=eb63addc3ffae6cd18b9a3336eda6441/eac4b74543a98226b3b467cc8082b9014b90ebe0.jpg'
          title='吴起镇'
          content='陕西省延安市吴起县'
        />
        </View>
        <AtModal isOpened={i19}>
           <AtModalHeader>吴起镇</AtModalHeader>
           <AtModalContent>
             <Image src='https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=eb63addc3ffae6cd18b9a3336eda6441/eac4b74543a98226b3b467cc8082b9014b90ebe0.jpg' style='margin-left: 150rpx'></Image>
             <View style='bottom: 30rpx'>1935年10月19日，中共中央率领中央红军经过二万五千里长征到达吴起镇，在吴起县胜利山彻底击退了国民党追兵，标志着红军长征的结束。
          红军长征各路劲旅大会师于吴起镇。至此，中央红军胜利地完成了历时一年，纵横11个省，行程2.5万里的长征。党中央和中央红军主力终于找到了长征立足点，抵达最后的目的地，胜利地实现了历史性的战略转移。吴起镇会议批准了榜罗镇会议把红军长征落脚点放在陕北的战略决策，决定党和红军今后的战略任务是建立西北苏区，以领导全国革命，从而宣告了中央红军长征的完结，开创了党中央全国革命大本营放在陕北的新的历史时期。吴起镇位于陕西省延安市西北部，今吴起县城内，得名于战国时期的名将吴起，他曾在此驻兵戍边。吴起镇革命旧址位于延安市吴起县城内。吴起镇革命旧址包括吴起革命纪念馆、毛泽东旧居、张闻天旧居和革命烈士陵园等。</View>
          <View style='height: 30rpx'></View>
           </AtModalContent>
        <AtModalAction><Button onClick={this.handleConfirm19.bind(this)}>确定</Button> </AtModalAction>
       </AtModal>
       <View onClick={this.handleOpen20.bind(this)}>
        <BoxS
          path='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574335462324&di=dd3b3c7606f4727942cf8bb49484318e&imgtype=0&src=http%3A%2F%2Fahsz.wenming.cn%2Fzt%2F20170726%2F201707%2FW020170724425847288772.jpg'
          title='会宁红军长征胜利纪念馆'
          content='甘肃省白银市会宁县'
        />
        </View>
        <AtModal isOpened={i20}>
           <AtModalHeader>会宁红军长征胜利纪念馆</AtModalHeader>
           <AtModalContent>
             <Image src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574335462324&di=dd3b3c7606f4727942cf8bb49484318e&imgtype=0&src=http%3A%2F%2Fahsz.wenming.cn%2Fzt%2F20170726%2F201707%2FW020170724425847288772.jpg' style='margin-left: 150rpx'></Image>
             <View style='bottom: 30rpx'>新建的红军长征胜利纪念馆，占地一万平方米，由会师陈列馆和会师广场两部分组成。会师陈列馆分上、下两层，主要由序厅、展厅、管理用房三部分构成。是第一批全国中小学生研学实践教育基地。
          1936年10月8日清晨，中国工农红军第一、二、四方面军三大主力胜利会师于此，红军二万五千里长征胜利结束。当时，中央领导曾在西津门楼上开过会，故于1958年将西津楼改建为红军“会师楼”。为了弘扬红军精神，会宁人民修缮了会师楼，扩建了革命文物陈列馆，并于1986年建造了高达28．78米，共11层的纪念塔，正面雕刻着-题写的“中国工农红军第一、二、四方面军会师纪念塔”18个大字。塔内还悬有甘肃楹联学会会长安维翰撰写的对联：“会一二四方面红军，忆井岗举旗，遵义筹策，大渡桥横，金沙水拍，过草地，爬雪山，除腐恶，斩荆棘，长征途中三军明良遇，将相和，肝胆相照，风云际会；宁千万亿倒悬黔首，顾祖厉激浪，香林放彩，关川穗硕，青江风徐，去郭城，穿韩砭，越沟岔，翻坡寨，枝杨镇上全民箪壶迎，袍泽与，诗文传捷，酒看犒师。”会宁县大墩梁和慢牛坡还修建有红军长征纪念碑。</View>
          <View style='height: 30rpx'></View>
           </AtModalContent>
        <AtModalAction><Button onClick={this.handleConfirm20.bind(this)}>确定</Button> </AtModalAction>
       </AtModal>
      </View>
    )
  }
}
