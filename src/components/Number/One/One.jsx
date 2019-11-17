import { Component } from '@tarojs/taro';
import { Image } from '@tarojs/components';
import '../Number.scss';
import one from '../../../pictures/iconphoto/number-1.png';
import line from '../../../pictures/iconphoto/line.png';
import blueaircraft from '../../../pictures/iconphoto/blue-aircraft.png'

class One extends Component {
  render() {
    return (
      <view>
        <Image src={one}></Image>
        <Image className='line' src={line}></Image>
        <Image className='blue' src={blueaircraft}></Image>
      </view>
    );
  }
}


export default One;