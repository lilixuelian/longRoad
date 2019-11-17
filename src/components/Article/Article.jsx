import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import './Article.scss';

class Article extends Component {
  render() {
    return (
      <View className='article'>
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
    path:'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
    name:'毛泽东',
    time:'1934年12月',
    title:'七律·长征',
    content:'红军不怕远征难，万水千山只等闲。五岭逶迤腾细浪，乌蒙磅礴走泥丸。金沙水拍云崖暖，大渡桥横铁索寒。更喜岷山千里雪，三军过后尽开颜。 '
};

export default Article;
