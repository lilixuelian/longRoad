import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import './Card.scss';

class Card extends Component {
  render() {
    return (
      <View className='box'>
        <Image
          className='image'
          src={this.props.path}
        />
        <View className='contentBox'>
          <View className='lineLeft'></View>
          <View className='title'>{this.props.title}</View>
          <View className='lineRight'></View>
        </View>
        <View className='content'>{this.props.content}</View>
      </View>
    );
  }
}

Card.defaultProps = {
  path: '',
  title: '',
  content:''
};

export default Card;
