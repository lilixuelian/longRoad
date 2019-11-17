import { Component } from '@tarojs/taro';
import {Image } from '@tarojs/components';
import '../Number.scss';
import eight from '../../../pictures/iconphoto/number-8.png';

class Eight extends Component {
  render() {
    return (
      <Image src={eight}></Image>
    );
  }
}


export default Eight;
