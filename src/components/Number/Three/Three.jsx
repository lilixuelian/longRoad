import  { Component } from '@tarojs/taro';
import { Image } from '@tarojs/components';
import '../Number.scss';
import three from '../../../pictures/iconphoto/number-3.png';
import line from '../../../pictures/iconphoto/line.png';
import blueaircraft from '../../../pictures/iconphoto/blue-aircraft.png'

class Three extends Component {
  render() {
    return (
      <view>
        <Image src={three}></Image>
        <Image className='line' src={line}></Image>
        <Image className='blue' src={blueaircraft}></Image>
      </view>
    );
  }
}


export default Three;