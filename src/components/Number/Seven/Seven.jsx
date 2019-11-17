import { Component } from '@tarojs/taro';
import {Image } from '@tarojs/components';
import '../Number.scss';
import seven from '../../../pictures/iconphoto/number-7.png';

class Seven extends Component {
  render() {
    return (
      <Image src={seven}></Image>
    );
  }
}


export default Seven;