import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import './People.scss';

class People extends Component {

  turnto(){
    Taro.navigateTo({
      url:this.props.page
    })
  }

  render() {
    return (
      <View className='people' onClick={this.turnto}>
        <Image
          src={this.props.path}
        />
        <View className='name'>
          {this.props.name}
        </View>
      </View>
    );
  }
}

People.defaultProps = {
  path: '',
  name: ''
};

export default People;