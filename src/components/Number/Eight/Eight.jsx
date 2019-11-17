import { Component } from '@tarojs/taro';
import {Image } from '@tarojs/components';
import '../Number.scss';
import eight from '../../../pictures/iconphoto/number-8.png';
import line from '../../../pictures/iconphoto/line.png';
import blueaircraft from '../../../pictures/iconphoto/blue-aircraft.png'

class Eight extends Component {
  render() {
    return (
      <view>
        <Image src={eight}></Image>
        <Image className='line' src={line}></Image>
        <Image className='blue' src={blueaircraft}></Image>
      </view>
    );
  }
}


export default Eight;
