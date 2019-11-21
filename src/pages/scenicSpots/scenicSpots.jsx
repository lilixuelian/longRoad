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
          path='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574316943732&di=b65c0f83ed246a59766f554e1da0a7fd&imgtype=0&src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2F100a0a0000004hiidBF27.jpg'
          title='瑞金共和国摇篮景区'
          content='江西省瑞金市沙洲坝镇金都大道'
          contentmore='瑞金共和国摇篮景区位于江西省瑞金市沙洲坝镇金都大道，占地面积4550余亩，由叶坪景区、红井景区、二苏大景区、中华苏维埃纪念园组成。
          瑞金共和国摇篮景区，既保留“形体”的简朴，又展现出内涵的“身价”，其中，叶坪景区包括毛泽东和朱德的旧居、临时中央政府旧址、红军广场、红军检阅台、红军烈士纪念亭、博生堡、公略亭等。沙洲坝景区包括中央政府大礼堂旧址、中华全国总工会旧址、中国工农红军总政治部旧址、红井、列宁小学旧址等。二苏大景区包括中国共产党中央局旧址、中华苏维埃共和国临时中央政府大礼堂旧址等。
          瑞金共和国摇篮景区是中宣部首批公布的全国爱国主义教育示范基地，也是中国红色旅游经典景区之一、中国旅游观光、培育爱国情感和民族精神的重要基地，是赣闽边际红色旅游集散中心，于2015年7月被列为国家5A级旅游景区。'
        />
        <Box
          path='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574316485204&di=8ce0c5768778d05b14267b41a6fdb5da&imgtype=0&src=http%3A%2F%2F511.img.pp.sohu.com.cn%2Fimages%2Fblog%2F2010%2F11%2F15%2F8%2F4%2Fu57557712_12d032692a4g213.jpg'
          title='湘江烈士纪念碑园'
          content='广西兴安县南狮子山'
          contentmore='位于广西兴安县南狮子山，碑园占地120亩，气势恢宏，800立方米的红军群雕堪称全国纪念性群雕之最，园区还建有红军长征突破湘江纪念馆。灵湖路、双灵路将红军碑园与灵渠紧密相连，构成兴安最重要的灵渠、乐满地、红军碑园旅游风景区。'
        />
        <Box
          path='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574316912851&di=5e92bc6263d581a6184010dae5a02bfb&imgtype=0&src=http%3A%2F%2Fimg11.soufunimg.com%2Fopen%2F2018_06%2F07%2FM20%2F0D%2F7F%2FChCE4VsZT0SIEotDAADLgIEgsgwABCpRwDbH2EAAMuY771.jpg'
          title='遵义会议会址'
          content='贵州省遵义市老城红旗路80号'
          contentmore='遵义会议会址位于贵州省遵义市老城红旗路80号。1955年，在遵义会议会址建立了遵义会议纪念馆；1964年，毛泽东同志为纪念馆题写了“遵义会议会址”六个大字。
          会址是幢砖木结构、通体用灰砖砌成的两层楼房，建于二十世纪三十年代，原是贵州军阀、黔军二十五军第二师师长柏辉章的私人官邸。楼房座北朝南，平面呈曲尺形，一楼有走廊，楼层四面有柱廊，面阔25.75米，进深16.95米，高12米，占地面积528平方米。'
        />
        {/* 
        <Box
          path=
          title=
          content=
          contentmore=
        />

        <Box
          path=
          title=
          content=
          contentmore=
        />
        <Box
          path=
          title=
          content=
          contentmore=
        />
        <Box
          path=
          title=
          content=
          contentmore=
        />
        <Box
          path=
          title=
          content=
          contentmore=
        /> */}
      </View>
    )
  }
}
