import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import './CardZhai.scss';

class CardZhai extends Component {
  render() {
    return (
      <View className='box'>
        <Image
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

CardZhai.defaultProps = {
  path: '',
  title: '',
  content:''
};

export default CardZhai;
