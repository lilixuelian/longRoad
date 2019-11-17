import { Component } from '@tarojs/taro';
import {Image } from '@tarojs/components';
import '../Number.scss';
import two from '../../../pictures/iconphoto/number-2.png';

class Two extends Component {
  render() {
    return (
      <Image src={two}></Image>
    );
  }
}


export default Two;