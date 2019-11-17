import { Component } from '@tarojs/taro';
import { Image } from '@tarojs/components';
import '../Number.scss';
import six from '../../../pictures/iconphoto/number-6.png';
import line from '../../../pictures/iconphoto/line.png';
import blueaircraft from '../../../pictures/iconphoto/blue-aircraft.png'

class Six extends Component {
  render() {
    return (
      <view>
        <Image src={six}></Image>
        <Image className='line' src={line}></Image>
        <Image className='blue' src={blueaircraft}></Image>
      </view>
    );
  }
}


export default Six;