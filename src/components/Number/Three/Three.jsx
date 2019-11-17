import  { Component } from '@tarojs/taro';
import { Image } from '@tarojs/components';
import '../Number.scss';
import three from '../../../pictures/iconphoto/number-3.png';

class Three extends Component {
  render() {
    return (
      <Image src={three}></Image>
    );
  }
}


export default Three;