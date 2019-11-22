import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import './Article.scss';

class Article extends Component {
  turnto(){
    Taro.navigateTo({
      url:this.props.page
    })
  }
  
  render() {
    return (
      <View className='article' onClick={this.turnto}>
          <View>
            <Image className='avatar' src={this.props.path}></Image>
            <View className='wordsInformation'>
              <View className='name'>{this.props.name}</View>
              <View className='time'>{this.props.time}</View>
            </View>
          </View>
          <View>
            <View className='title'>{this.props.title}</View>
            <View className='content'>{this.props.content}</View>
          </View>
      </View>
    );
  }
}

Article.defaultProps = {
  path:'',
  name:'',
  time:'',
  title:'',
  content:''
};

export default Article;
