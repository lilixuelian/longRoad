import { Component } from '@tarojs/taro';
import {Image } from '@tarojs/components';
import '../Number.scss';
import five from '../../../pictures/iconphoto/number-5.png';

class Five extends Component {
  render() {
    return (
      <Image src={five}></Image>
    );
  }
}


export default Five;
