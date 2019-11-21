import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './famousArticles.scss'
import Article from '../../components/Article/Article'

export default class Famousarticles extends Component {

  config = {
    navigationBarTitleText: '著名文章'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='famousArticles'>
        <Article 
          path='https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=a15086bc31adcbef01347900949449e0/aec379310a55b3199a363d0d43a98226cefc17fe.jpg'
          name='毛泽东'
          time='1934年12月'
          title='七律·长征'
          content='红军不怕远征难，万水千山只等闲。五岭逶迤腾细浪，乌蒙磅礴走泥丸。金沙水拍云崖暖，大渡桥横铁索寒。更喜岷山千里雪，三军过后尽开颜。'
        />
        <Article 
          path='https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=a15086bc31adcbef01347900949449e0/aec379310a55b3199a363d0d43a98226cefc17fe.jpg'
          name='毛泽东'
          time='1934-1935'
          title='十六字令三首'
          content='【其一】山，快马加鞭未下鞍。惊回首，离天三尺三。【其二】山，倒海翻江卷巨澜。奔腾急，万马战犹酣。【其三】山，刺破青天锷未残。天欲堕，赖以拄其间。'
        />
        <Article 
          path='https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=a15086bc31adcbef01347900949449e0/aec379310a55b3199a363d0d43a98226cefc17fe.jpg'
          name='毛泽东'
          time='1935'
          title='忆秦娥·娄山关'
          content='西风烈，长空雁叫霜晨月。霜晨月，马蹄声碎，喇叭声咽。雄关漫道真如铁，而今迈步从头越。从头越，苍山如海，残阳如血。'
        />
        <Article 
          path='https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=a15086bc31adcbef01347900949449e0/aec379310a55b3199a363d0d43a98226cefc17fe.jpg'
          name='毛泽东'
          time='1935年冬'
          title='念奴娇·昆仑'
          content='横空出世，莽昆仑，阅尽人间春色。飞起玉龙三百万，搅得周天寒彻。夏日消溶，江河横溢，人或为鱼鳖。千秋功罪，谁人曾与评说？而今我谓昆仑：不要这高，不要这多雪。安得倚天抽宝剑，把汝裁为三截？一截遗欧，一截赠美，一截还东国。太平世界，环球同此凉热。'
        />
        <Article 
          path='https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=a15086bc31adcbef01347900949449e0/aec379310a55b3199a363d0d43a98226cefc17fe.jpg'
          name='毛泽东'
          time='1935'
          title='清平乐·六盘山'
          content='天高云淡，望断南飞雁。不到长城非好汉，屈指行程二万。六盘山上高峰，红旗漫卷西风。今日长缨在手，何时缚住苍龙？'
        />
        <Article 
          path='https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=a15086bc31adcbef01347900949449e0/aec379310a55b3199a363d0d43a98226cefc17fe.jpg'
          name='毛泽东'
          time='1935.10.21'
          title='六言诗·给彭德怀同志'
          content='山高路远坑深，大军纵横驰奔。谁敢横刀立马？唯我彭大将军。 '
        />
        <Article 
          path='https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=a15086bc31adcbef01347900949449e0/aec379310a55b3199a363d0d43a98226cefc17fe.jpg'
          name='毛泽东'
          time='1936'
          title='沁园春·雪'
          content='北国风光，千里冰封，万里雪飘。望长城内外，惟余莽莽；大河上下，顿失滔滔。山舞银蛇，原驰蜡象，欲与天公试比高。须晴日，看红装素裹，分外妖娆。江山如此多娇，引无数英雄竞折腰。惜秦皇汉武，略输文采；唐宗宋祖，稍逊风骚。一代天骄，成吉思汗，只识弯弓射大雕。俱往矣，数风流人物，还看今朝。'
        />
        <Article 
          path='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574332434064&di=3bb46c472ea4a913138ea541d7282503&imgtype=0&src=http%3A%2F%2Fimg.11665.com%2Fimg04_p%2Fi4%2FT1EdT6XmVgXXXM8XM9_102310.jpg'
          name='人教社小学语文室'
          time=''
          title='吃水不忘挖井人'
          content='瑞金城外有个村子叫沙洲坝。毛主席在江西领导革命的时候，在那儿住过。
          一天，毛主席看见一个老乡挑着浑浊的水往家里走，就问：“老乡，这水挑来做什么用呀？”老乡回答说：“吃呀！”毛主席疑惑地问：“水这么脏，能吃吗？”老乡苦笑着说：“没法子，再脏的水也得吃呀！”毛主席又问：“是从哪里挑的？”老乡回答：“从塘里挑的。”毛主席请老乡带他去看看。走了一阵，只见一个不大的水塘，杂草丛生，池水污浊。全村人洗衣、洗菜、吃水全在这里。毛主席关切地问：“能不能到别处挑水吃？”老乡摇摇头，说：“我们沙洲坝就是缺水呀！挑担水要走好几里路。”毛主席皱了皱眉头，若有所思地走了。
          第二天，毛主席找来村里人一起商量挖水井的事。大家一起勘察水源，选择井位。当井位确定后，毛主席挽起衣袖，卷起裤腿，带头挖了起来。于是，大伙挖的挖，铲的铲，干得热火朝天。
          在挖井的日子里，毛主席和临时中央政府的其他领导人，一有空就到工地参加劳动。经过十几天的奋战，水井挖成了，沙洲坝的人民终于喝上了清澈甘甜的井水。群众激动地说：“我们从来没有喝过这么甜的水，毛主席真是我们的大恩人哪！”
          解放以后，沙洲坝人民在井旁立了一块石碑，上面刻着：“吃水不忘挖井人，时刻想念毛主席！”'
        />
        <Article 
          path='https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=c287d3353badcbef01347900949449e0/aec379310a55b319f9e1688449a98226cffc1722.jpg'
          name='王愿坚'
          time=''
          title='草地夜行'
          content='茫茫的草海，一眼望不到边。大队人马已经过去了，留下一条踩得稀烂的路，一直伸向远方。　 
          干粮早就吃光了，皮带也煮着吃了。我空着肚子，拖着两条僵硬的腿，一步一挨地向前走着。背上的枪支和子弹就像一座山似的，压得我喘不过气来。唉！就是在这稀泥地上躺一会儿也好啊！ 
          迎面走来一个同志，冲着我大声嚷：“小鬼，你这算什么行军啊？照这样，三年也走不到陕北！” 
          他这样小看人，真把我气坏了。我粗声粗气地回答：“别把人看扁了！从大别山走到这儿，少说也走了万儿八千里路。瞧！枪不是还在我的肩膀上吗？” 
          他看了看我，笑了起来，就和我并肩朝前走。他比我高两头，宽宽的肩膀，魁梧的身材，只是脸又黄又瘦，两只眼睛深深地陷了下去。 
          “小同志，你的老家在哪儿？”他问我。 
          “金寨斑竹园！听说过吗？” 
          “啊，斑竹园！有名的金寨大暴动，就是从你们那儿搞起来的。我在那儿卖过帽子。” 
          一点不错，暴动前，我们村里来过几个卖帽子的人。我记得清清楚楚，爸爸还给我买了一顶。回家来掀开帽里子一看，里面有张小纸条，写着“打倒土豪劣绅”。真想不到，当年卖帽子的同志竟在这里碰上了。 
          我立刻对他产生了敬佩的感情，就亲热地问他：“同志，你在哪部分工作？我怎么从来没见过你呀？”“我吗？在军部。现在出来找你们这些掉队的小鬼。”他一边说，一边摘下我的枪，连空干粮袋也摘了去。
          “咱们得快点走呀！你看，太阳快落了。天黑以前咱们必须赶上部队。这草地到处是深潭，掉下去可就不能再革命了。” 
          听了他的话，我快走几步，紧紧地跟着他，但是不一会儿，我又落了一大段。 
          他焦急地看看天，又看看我，说：“来吧，我背你走！”我说什么也不同意。这一下他可火了：“别磨蹭了！你想叫咱们俩都丧命吗？”他不容分说，背起我就往前走。 
          天边的最后一丝光亮也被黑暗吞没了。满天堆起了乌云，不一会儿下起大雨来。我一再请求他放下我，怎么说他也不肯，仍旧一步一滑地背着我向前走。 
          突然，他的身子猛地往下一沉。“小鬼，快离开我！”他急忙说，“我掉进泥潭里了。” 
          我心里一惊，不知怎么办好，只觉得自己也随着他往下陷。这时候，他用力把我往上一顶，一下子把我甩在一边，大声说：“快离开我，咱们两个不能都牺牲！……要……要记住革命！……” 
          我使劲伸手去拉他，可是什么也没有抓住。他陷下去了已经没顶了。 
          我的心疼得像刀绞一样，眼泪不住地往下流。多么坚强的同志！为了我这样的小鬼，为了革命，他被这可恶的草地夺去了生命！ 
          风，呼呼地刮着。雨，哗哗地下着。黑暗笼罩着大地。“要记住革命！”——我想起他牺牲前说的话。对，要记住革命！我抬起头来，透过无边的风雨，透过无边的黑暗，我仿佛看见了一条光明大路，这条大路一直通向遥远的陕北。我鼓起勇气，迈开大步，向着部队前进的方向走去。'
        />
        <Article 
          path='https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=9b811ab80bf431adbcd2443f730dcb92/f636afc379310a559a2f21deb04543a982261094.jpg'
          name=''
          time=''
          title=''
          content=''
        />
      </View>
    )
  }
}
