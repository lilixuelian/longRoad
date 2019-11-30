import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './questionStart.scss'

import { AtProgress, AtMessage } from 'taro-ui'

export default class Question1 extends Component {

  config = {
    navigationBarTitleText: '答题'
  }

  state = {
    startindex: 0,
    prostatus: 'progress',
    question: [
      {
        content: '中国工农红军长征的三大主力是（）',
        A: '中央红军、红二四方面军',
        B: '红一二三方面军',
        C: '红二十五、二十七军和红十五军团',
        D: '红二六军团、四方面军',
        answeer: 'A'
      },
      {
        content: '红军长征的原因（）',
        A: '日本入侵',
        B: '北上抗日',
        C: '伪满洲国建立',
        D: '第五次反围剿失败',
        answeer: 'B'
      },
      {
        content: '红军在（）跳出敌人包围',
        A: '赤水河',
        B: '金沙江',
        C: '大渡河',
        D: '夹金山',
        answeer: 'B'
      },
      {
        content: '红军长征结束标志（）',
        A: '会宁会师',
        B: '陕北会师',
        C: '吴起会师',
        D: '懋功会师',
        answeer: 'A'
      },
      {
        content: '生死攸关的转折点是（）',
        A: '两河口会议',
        B: '巴西会议',
        C: '俄界会议',
        D: '遵义会议',
        answeer: 'D'
      },
      {
        content: '遵义会议解决了（）问题',
        A: '政治和军事',
        B: '政治和思想',
        C: '军事和组织',
        D: '军事和作风',
        answeer: 'C'
      },
      {
        content: '指挥反第四次围剿的是（）',
        A: '周恩来、朱德',
        B: '毛泽东、周恩来',
        C: '毛泽东、朱德',
        D: '朱德、陈毅',
        answeer: 'A'
      },
      {
        content: '不是遵义会议内容的是（）',
        A: '纠正了左倾错误',
        B: '肯定毛泽东军事主张',
        C: '选举毛泽东为中共中央主席',
        D: '取消博古、李德最高指挥权',
        answeer: 'C'
      },
      {
        content: '遵义会议标志中共由幼稚走向成熟的原因是（）',
        A: '消除共产国际的消极影响',
        B: '确立了正确的指导思想',
        C: '中共由被动向主动转变',
        D: '自主处理中共革命问题',
        answeer: 'D'
      },
      {
        content: '红军由被动变主动的第一场军事活动（）',
        A: '强渡乌江',
        B: '巧渡金沙江',
        C: '四渡赤水',
        D: '强渡大渡河',
        answeer: 'B'
      }
    ]
  }

  check(s) {
    let indexnew = this.state.startindex;
    if (s == this.state.question[this.state.startindex].answeer) {
      Taro.atMessage({
        'message': '答案正确',
        'type': 'success',
        'duration':'500'
      })
      if (this.state.question[this.state.startindex + 1]) {
        this.setState({
          startindex: indexnew + 1
        })
      }
      else {
        Taro.atMessage({
          'message': '您已全部完成,将在三秒后自动退出',
          'type': 'info',
        })
        setTimeout(() => { Taro.switchTab({
          url:'../pointsGather/pointsGather'
        }) }, 3000);
      }
    }
    else {
      Taro.atMessage({
        'message': '答案错误',
        'type': 'error',
        'duration':1000
      })
    }
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() {
    this.setState({
      startindex: 0
    })
  }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='question1'>
        <View style='height:8vh;'></View>
        <View className='main'>
          <View className='contentmain'>
            <View className='at-article__p'>
              <Text>
                {this.state.question[this.state.startindex].content}
              </Text>
            </View>
          </View>
          <View className='buttonbox'>
            <AtMessage />
            <Button onClick={this.check.bind(this, 'A')}>{this.state.question[this.state.startindex].A}</Button>
            <Button onClick={this.check.bind(this, 'B')}>{this.state.question[this.state.startindex].B}</Button>
            <Button onClick={this.check.bind(this, 'C')}>{this.state.question[this.state.startindex].C}</Button>
            <Button onClick={this.check.bind(this, 'D')}>{this.state.question[this.state.startindex].D}</Button>
          </View>
        </View>
        <View style='height:4vh;'></View>
        <View>
          <AtProgress
            percent={this.state.startindex}
            color='#f8ac4a'
            status={this.state.prostatus}
            strokeWidth={12}
          />
        </View>
      </View>
    )
  }
}
