import React from 'react';
import BarbieCard from '../../components/BarbieCard'

const BarbiesDisplay = (props) =>{
  return (
    <div>
      <BarbieCard
        id="8"
        name="Barbie AF"
        doll_type="Barbie"
        est_value="$50"
        photo_1="http://i.ebayimg.com/00/s/Mzk2WDMwMA==/z/XaIAAMXQNo5Ta4N0/$_32.JPG"
        year_produced="1998"
        condition_id="3"
        />
    </div>
  )
}

export default BarbiesDisplay
