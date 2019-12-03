import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import './Num.scss';
import zero from '../../../pictures/iconphoto/b0.png';
import one from '../../../pictures/iconphoto/b1.png';
import two from '../../../pictures/iconphoto/b2.png';
import three from '../../../pictures/iconphoto/b3.png';
import four from '../../../pictures/iconphoto/b4.png';
import five from '../../../pictures/iconphoto/b5.png';
import six from '../../../pictures/iconphoto/b6.png';
import seven from '../../../pictures/iconphoto/b7.png';


class Num extends Component {

  state={
    urladress:zero
  }

  render() {
    switch(Number(this.props.num)){
      case 1:
        this.setState({urladress:one});
        break;
      case 2:
        this.setState({urladress:two});
        break;
      case 3:
        this.setState({urladress:three});
        break;
      case 4:
        this.setState({urladress:four});
        break;
      case 5:
        this.setState({urladress:five});
        break;
      case 6:
        this.setState({urladress:six});
        break;
      case 7:
        this.setState({urladress:seven});
        break;
    }
    return (
      <Image src={urladress}></Image>
    );
  }
}

Num.defaultProps = {
  num:0
};

export default Num;
