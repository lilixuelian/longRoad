import { Component } from '@tarojs/taro';
import {Image } from '@tarojs/components';
import '../Number.scss';
import two from '../../../pictures/iconphoto/number-2.png';
import line from '../../../pictures/iconphoto/line.png';
import blueaircraft from '../../../pictures/iconphoto/blue-aircraft.png'

class Two extends Component {
  render() {
    return (
      <view>
        <Image src={two}></Image>
        <Image className='line' src={line}></Image>
        <Image className='blue' src={blueaircraft}></Image>
      </view>
    );
  }
}


export default Two;