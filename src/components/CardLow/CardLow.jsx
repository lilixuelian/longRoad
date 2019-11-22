import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import './CardLow.scss';

class CardLow extends Component {
  render() {
    return (
      <View className='box'>
        <Image
          className='image'
          src={this.props.path}
        />
        <View className='contentBox'>
          <View className='lineLeft'></View>
          <View className='title'>{this.props.content}</View>
          <View className='lineRight'></View>
        </View>
      </View>
    );
  }
}

CardLow.defaultProps = {
  path: '',
  title: '',
  content:''
};

export default CardLow;
