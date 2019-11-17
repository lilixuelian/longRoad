import { Component } from '@tarojs/taro';
import { Image } from '@tarojs/components';
import '../Number.scss';
import nine from '../../../pictures/iconphoto/number-9.png';

class Nine extends Component {
  render() {
    return (
      <Image src={nine}></Image>
    );
  }
}


export default Nine;