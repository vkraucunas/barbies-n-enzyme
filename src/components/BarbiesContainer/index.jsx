import React, {Component} from 'react';
import BarbieCard from '../BarbieCard';


const BarbiesStyles = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-around'
}

class Barbies extends Component {

  constructor(props) {
    super(props)

    this.state = {}
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ barbies: nextProps.barbies });
  }

  render() {
    let {barbies} = this.state;
    return (
      <div style={BarbiesStyles}>
        {barbies && barbies.map((barbieProps) => <BarbieCard key={barbieProps.id} {...barbieProps} />)}
      </div>
    )
  }
}


export default Barbies
