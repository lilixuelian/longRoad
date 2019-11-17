import { Component } from '@tarojs/taro';
import {Image } from '@tarojs/components';
import '../Number.scss';
import four from '../../../pictures/iconphoto/number-4.png';

class Four extends Component {
  render() {
    return (
      <Image src={four}></Image>
    );
  }
}


export default Four;