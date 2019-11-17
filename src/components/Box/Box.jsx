import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import './Box.scss';

class Box extends Component {
  render() {
    return (
      <View className='box'>
        <Image
          src={this.props.path}
        />
        <View className='contentBox'>
          <View className='title'>{this.props.title}</View>
          <View className='content'>{this.props.content}</View>
        </View>
      </View>
    );
  }
}

Box.defaultProps = {
    path:'',
    title:'',
    content:''
};

export default Box;
