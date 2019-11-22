import Taro, { Component } from '@tarojs/taro';
import { View,  Audio } from '@tarojs/components';
import './MusicCard.scss';






class Card extends Component {

  audioTimeUpdated() {
    this.duration = e.detail.duration;
  }

  render() {
    return (
      <View className='box'>
        <View className='audio'>
        <Audio src={this.props.src} poster={this.props.poster} name={this.props.name} author={this.props.author} controls></Audio>
        </View>
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
  title: '',
  content:'',
  src: '',
  poster: '',
  name: '',
  author: '',

};

export default Card;
