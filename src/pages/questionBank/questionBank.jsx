import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import './questionBank.scss'

export default class Questionbank extends Component {

  config = {
    navigationBarTitleText: '题库答题'
  }


  start(){
    Taro.navigateTo({
      url: '../questionStart/questionStart'
    })
  }

  componentWillMount() {
  }

  componentDidMount() {
    //setTimeout(()=>{Taro.navigateTo({url:'../question/question1/question1'})},1000);
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  show() {
    console.log(this.e);
  }

  render() {
    return (
      <View className='questionBank'>
        <View style='height:40vh;'></View>
        <Button style='background-color:#f56d5a; color:white; width:50vw;opacity:{this.state.opacity}' onClick={this.start.bind(this)}>开始答题</Button>
      </View>
    )
  }
}
