import { Component } from '@tarojs/taro';
import {Image } from '@tarojs/components';
import '../Number.scss';
import seven from '../../../pictures/iconphoto/number-7.png';
import line from '../../../pictures/iconphoto/line.png';
import blueaircraft from '../../../pictures/iconphoto/blue-aircraft.png'

class Seven extends Component {
  render() {
    return (
      <view>
        <Image src={seven}></Image>
        <Image className='line' src={line}></Image>
        <Image className='blue' src={blueaircraft}></Image>
      </view>
    );
  }
}


export default Seven;