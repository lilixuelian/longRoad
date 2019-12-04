import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './index.scss'

@withWeapp({
  data: {
    animationRotate: {}
  }
})

class _C extends Taro.Component {

  config = {
    navigationBarTitleText: '数字长征路'
  }

  render() {
    return (
      <View className='container' style='display: block'>
        <View className='content' style='display: block'>
          <View className='move' style='display: block'>
          <View className='content-word' style='display: block'>
            <View className='content-move' style='display: block'>
              <View className='world'>
              中央红军从<View className='red'>1934年10月10日到1936年10月22日</View>，共<View className='red'>742天</View>，合<View className='red'>2年零12天</View>。
              </View>
              <View className='world'>
              长征出发：约<View className='red'>300000人</View>；长征结束：约<View className='red'>25000人</View>。抵达终点者为出发人数<View className='red'>1/12</View>。
              </View>
              <View className='world'>
              1、红一方面军（中央红军）：出发人数<View className='red'>86789人</View>，抵达终点约<View className='red'>六七千人</View>。
              </View>
              <View className='world'>
              2、红四方面军：出发人数<View className='red'>8万多人</View>,1936年到陕北约<View className='red'>3万人</View>（含西路军）。
              </View>
                <View className='world'>
                3、红二方面军：出发人数<View className='red'>1.7万人</View>，抵达终点约<View className='red'>1万余人</View>。
                </View>
                <View className='world'>
                4、红25军：出发人数<View className='red'>2981人</View>,1935年到延安<View className='red'>3400人</View>。
                </View>
                <View className='world'>
                总行程<View className='red'>6.5万余里</View>
                </View>
                <View className='world'>
                红一方面军：<View className='red'>二万五千里</View>
                </View>
                <View className='world'>
                红二方面军：<View className='red'>二万余里</View>。
                </View>
                <View className='world'>
                红四方面军：<View className='red'>一万余里</View>。
                </View>
                <View className='world'>
                红25军：<View className='red'>近万余里</View>。
                </View>
                <View className='world'>
                长征经过省：<View className='red'>14个</View>。江西、福建、广东、广西、湖南、贵州、四川、云南、西康（原为四川一部分）、甘肃、山西等。
                </View>
                <View className='world'>
                官方统计共爬过<View className='red'>18座山</View>，有越城岭、苗岭、大娄山、乌蒙山、岷山、夹金山、邛崃山、六盘山、都庞岭、荫褚岭、骑天岭、大庾岭等；其中有<View className='red'>5座山</View>终年积雪，人迹罕至。<View className='red'>24条江河</View>，有章水、贡水、信丰水、潇水、湘江、乌江、赤水河、金沙江、大渡河、小金川、渭河等。
                </View>
                <View className='world'>
                中央红军共进行了<View className='red'>380余次</View>战斗，攻占七百多座县城，红军牺牲营以上干部多达<View className='red'>430人</View>，平均年龄不到30岁，共击溃国民党军数百个团。
                </View>
                <View className='world'>
                20 红军将士的平均年龄为<View className='red'>20岁</View>，活跃着一批年轻的将领：王稼祥，中央军事委员会副主席、红军政治部主任，<View className='red'>28 岁</View>；叶剑英，红一方面军参谋长，<View className='red'>37岁</View>；林彪，红一军团团长，<View className='red'>27岁</View>；左权，红一军团参谋长，<View className='red'>29岁</View>；陈赓，干部团团长，<View className='red'>31岁</View>；红军中还有一支特殊的队伍——少共国际师，由一群平均年龄不足<View className='red'>18岁</View>的青少年组成的红军部队。
                </View>
                <View className='world'>
                蒋介石先后调集了<View className='red'>300多万</View>重兵围追堵截，包括中央军、粤军、桂军、湘军、黔军、滇军、川军、川康军、西北军、东北军及马家军骑兵等地方军阀部队。而红军各部总兵力只有<View className='red'>30万左右</View>。
                </View>
                <View className='world'>
                每百名红军拥有<View className='red'>40条枪</View>，平均一名红军战士携带<View className='red'>6发子弹</View>。
                </View>
                <View className='world'>
                长征<View className='red'>第一支</View>先遣队——北上抗日先遣队。 <View className='red'>1934 年 7 月</View>，党中央派寻淮洲、粟裕等率红七团从瑞金出发北上。 <View className='red'>10 月</View>
                在赣东北同方志敏领导的红十军会师，组成红十军团，正式成立中国工农红军北上抗日先遣队。
                </View>
                <View className='world'>
                最早进行长征的部队——红六军团 . <View className='red'>1934 年 8 月 7 日 下午 3 时</View>，红六军团全军 <View className='red'>9700 余人</View>在任弼时等率领指挥下，告别湘赣革命根据地，从江西遂川的横石和新江口出发，踏上了西征的征途，揭开了红军长征的序幕。
                </View>
                <View className='world'>
                长征中最年轻的部队——少共国际师。 <View className='red'>1933 年 8 月 5 日</View> 成立于江西博生县（今宁都县），由周恩来亲自授旗。全师共<View className='red'>一万余人</View>，党团员占 <View className='red'>70 ％</View>，下辖三个团，归红一方面军总部直接指挥。“少共国际师”，全师平均年龄<View className='red'>18岁</View>，历任师长都是<View className='red'>20多岁</View>，师政委肖华上任时年仅<View className='red'>17岁</View>。<View className='red'>1934年3月</View>，“少共国际师”改称15师 , 长征时担负掩护和殿后任务。 
                </View>
                <View className='world'>
                最先到达陕北的长征部队—— 红二十五军。 <View className='red'>1934 年 9 月</View>，红二十五军由程子华、吴焕先、徐海东率领，从河南罗山何家冲出发开始长征。于 1935 年 9 月 18 日 到达陕北延川县永坪镇与刘志丹等领导的红二十六军胜利会师，组成红十五军团。
                </View>
                <View className='world'>
                长征中最后到达陕北的部队——红四方面军的前锋部队。 <View className='red'>1936 年 10 月</View>，红四方面军进入甘南后，张国焘擅令红四方面军前锋部队 <View className='red'>21000 多人</View>组成西路军，渡黄河西进。在河西走廊被敌包围，惨遭失败。只有<View className='red'>数百人</View>经中央营救，才于 1937 年 5 月初到达陕北。
                </View>
                <View className='world'>
                长征中冲破的敌人<View className='red'>第一道</View>封锁线——江西安远、信丰之间。 <View className='red'>1934 年 10 月下旬</View>，我红一、三军团冲破敌陈济棠部扼守的安远、信丰封锁线，渡过漳水，向湖南之汝城进发。
                </View>
                <View className='world'>
                长征中的<View className='red'>第一次</View>中央政治局会议——黎平会议。 <View className='red'>1934 年 12 月 18 日</View> ，中央政治局在黎平召开会议，会议肯定了毛泽东关于放弃与二、六军团会师的计划，改向敌人力量薄弱的贵州前进的正确主张。
                </View>
                <View className='world'>
                长征中建立的<View className='red'>第一支</View>地方革命武装——苗族游击队。 1934 年 12 月，在红一方面军帮助下，黔东南人民建立了自己的革命武装：苗族游击队。
                </View>
                <View className='world'>
                长征中建立的<View className='red'>第一个</View>红色政权——遵义县革命委员会。遵义会议结束后，在遵义东城大操场上召开的万人大会上，正式宣告成立了遵义县革命委员会。
                </View>
                <View className='world'>
                长征中取得的<View className='red'>第一次</View>大胜利——遵义战役。在毛泽东、朱德、周恩来等指挥下， 1935 年 2 月 26 日 奇袭娄山关， 27 日再占遵义，一举歼灭黔军和国民党中央军的增援部队共<View className='red'> 20 个团</View>、俘敌<View className='red'> 3000 人</View>。
                </View>
                <View className='world'>
                长征中<View className='red'>年纪最大</View>的男红军——徐特立。湖南长沙人， 1934 年他以 <View className='red'>57 岁</View>的高龄参加了中国工农红军二万五千里长征 .
                </View>
                <View className='world'>
                长征中年龄<View className='red'>最小</View>的男红军——向轩。 1926 年出生在湖南桑植县，母亲贺满姑（贺英的妹妹），贺龙是其大舅。<View className='red'>两岁</View>坐牢，<View className='red'>7岁参军</View>，<View className='red'>9岁</View>随大部队长征，曾被解放军总政治部确定为中国年龄<View className='red'>最小</View>的红军。
                </View>
                <View className='world'>
                长征中年龄<View className='red'>最大</View>的女红军——蔡畅。 1900 年生于湖南双峰县井字镇， 1934 年 1 月当选为中华苏维埃共和国执行委员会委员，同年 10 月参加二万五千里长征，当时年<View className='red'> 35 岁</View>。
                </View>
                <View className='world'>
                长征中年龄<View className='red'>最小</View>的女红军——王新兰。 1924 年出生于四川宣汉一个富裕家庭，是中共早期著名党员王维舟的侄女。 1933 年红四军入川时，王维舟领导的“川东游击队”改编为红四方面军第 33 军，王任军长。当时王新兰只有 <View className='red'>9 岁</View>，报名参加了红军，在宣传队当宣传员。 <View className='red'>11 岁</View>时随大部队长征，胜利到达陕北。
                </View>
                <View className='world'>
                长征中走出的<View className='red'>第一位（也是唯一的）</View>“开国女将”——李贞。 1908 年 2 月生于湖南浏阳县永和镇， 1926 年参加革命，次年加入中国共产党，参加过湘赣边界秋收起义。
                </View>
                <View className='world'>
                长征中参加红军的<View className='red'>第一位</View>国民党人士——周素园先生。在党的抗日民族统一战线政策的感召下，贵州省毕节地区国民党宿老周素园老先生热烈拥护我党抗日救国主张。 1936 年 2 月红军离开时，他跟随红军长征直到陕甘边。
                </View>
                <View className='world'>
                长征期间牺牲的<View className='red'>最高</View>首长——方志敏 1899 年生，江西省弋阳县人。 1934 年 11 月初，方志敏奉命率红军北上抗日先遣队北上，任红 10 军团军政委员会主席。 1935 年 1 月 27 日 在江西玉山陇首村被俘。 1935 年 8 月 6 日 在江西南昌下沙窝英勇就义，时年 36 岁
                </View>
                <View className='world'>
                长征路上牺牲的<View className='red'>第一位</View>红军师长——洪超。 1934 年 10 月 21 日 ，时任红军第四师师长的洪超在江西省信丰县新田镇百石村壮烈牺牲，年仅 <View className='red'>25 </View>岁。
                </View>
                <View className='world'>
                世界上<View className='red'>首部</View>研究长征的英文专著——《一九三五年长征》。为英国的迪克·威尔逊撰写。是一部记录中国工农红军长征的学术专著。在这部书中，迪克·威尔逊从历史性、传奇性和象征性三个方面对中国工农红军长征进行了“百科式”的解读和介绍。
                </View>
                <View className='world'>
                <View className='red'>第一部</View>向西方世界介绍红军长征的著作——《神灵之手》。为瑞士籍英国传教士勃沙特在英国出版的一部回忆录。
                </View>
                <View className='world'>
                红军翻越的<View className='red'>第一座</View>大雪山是 1935 年 5 月翻越的夹金山。此山位于四川省宝兴县西北，海拔 <View className='red'>4000 多米</View>，山上终年积雪，空气稀薄。
                </View>
                <View className='world'>
                红军翻越的<View className='red'>最后一座</View>大雪山是大鼓山，海拔 5000 余米。红军翻越最早的雪山是海拔<View className='red'> 4592 米 </View>的红桥雪山。红军翻越海拔最高的雪山是海拔<View className='red'> 5500 米 </View>党岭山。翻越雪山最多的是红二、六军团。
                </View>
                <View className='world'>
                长征出发<View className='red'>第一山</View>——瑞金云石山。 1934 年 10 月中旬，中共中央、中央军委和中央直属机关从云石山附近的梅坑出发，开始长征。 因此云石山是红军长征出发的“标志”之一。
                </View>
                <View className='world'>
                长征<View className='red'>第一渡</View>——于都河渡口。 1934 年 10 月 16 日 ，红军主力在于都河集结完毕，迈开长征<View className='red'>第一步</View>。 17 日至 20 日傍晚，中央苏区、中革军委机关及其直属部队和一、三、五、八、九军团共 8.6 万余人，渡过于都河，踏上漫漫长征路。
                </View>
                </View>
                </View>
                </View>
                </View>
                </View>
    )
  }
} //index.js

export default _C
