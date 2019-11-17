import { Component } from '@tarojs/taro';
import { Image } from '@tarojs/components';
import '../Number.scss';
import one from '../../../pictures/iconphoto/number-1.png';

class One extends Component {
  render() {
    return (
      <Image src={one}></Image>
    );
  }
}


export default One;