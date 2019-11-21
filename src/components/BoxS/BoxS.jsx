import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import './BoxS.scss';

class BoxS extends Component {

  show(){
    // const {path}=this.props.path;
    // console.log(this.props.path);
    // console.log(this.props.contentmore);

  }

  render() {
    return (
      <View className='boxs' onClick={this.show.bind(this,this.props.path,this.props.contentmore)}>
        <Image
          src={this.props.path}
        />
        <View className='contentBox'>
          <View className='contentbox'>
          <View className='title'>{this.props.title}</View>
          <View className='content'>{this.props.content}</View>
          </View>
        </View>
      </View>
    );
  }
}

BoxS.defaultProps = {
    path:'',
    title:'',
    content:'',
    contentmore:''
};

export default BoxS;
