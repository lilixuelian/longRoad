import { Component } from '@tarojs/taro';
import { Image } from '@tarojs/components';
import '../Number.scss';
import nine from '../../../pictures/iconphoto/number-9.png';
import line from '../../../pictures/iconphoto/line.png';
import blueaircraft from '../../../pictures/iconphoto/blue-aircraft.png'

class Nine extends Component {
  render() {
    return (
      <view>
        <Image src={nine}></Image>
        <Image className='line' src={line}></Image>
        <Image className='blue' src={blueaircraft}></Image>
      </view>
    );
  }
}


export default Nine;