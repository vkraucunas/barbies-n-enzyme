import React from 'react';
import BarbieCard from '../BarbieCard';


const BarbiesStyles = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-around'
}

const Barbies = (props) => {
  let {barbies} = props;
  return (
    <div style={BarbiesStyles}>
      {barbies.map((barbieProps) => <BarbieCard key={barbieProps.id} {...barbieProps} />)}
    </div>
  )
}


export default Barbies
