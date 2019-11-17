import { Component } from '@tarojs/taro';
import {Image } from '@tarojs/components';
import '../Number.scss';
import four from '../../../pictures/iconphoto/number-4.png';
import line from '../../../pictures/iconphoto/line.png';
import blueaircraft from '../../../pictures/iconphoto/blue-aircraft.png'

class Four extends Component {
  render() {
    return (
      <view>
        <Image src={four}></Image>
        <Image className='line' src={line}></Image>
        <Image className='blue' src={blueaircraft}></Image>
      </view>
    );
  }
}


export default Four;