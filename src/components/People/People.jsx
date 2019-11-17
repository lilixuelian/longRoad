import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import './People.scss';

class People extends Component {
  render() {
    return (
      <View className='people'>
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