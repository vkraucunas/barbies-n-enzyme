import React from 'react';
import Barbies from '../../components/Barbies'

const BarbieInfo = [
  {
    id: "8",
    name: "Barbie AF",
    doll_type: "Barbie",
    est_value: "$50",
    photo_1: "https://media1.tenor.co/images/572cd9ee8ce078a5e04fb7bc493f24be/tenor.gif?itemid=5469934",
    year_produced: "1998",
    condition_id: "3",
  },
  {
    id: "3",
    name: "Barbie AF",
    doll_type: "Barbie",
    est_value: "$50",
    photo_1: "https://media1.tenor.co/images/572cd9ee8ce078a5e04fb7bc493f24be/tenor.gif?itemid=5469934",
    year_produced: "1998",
    condition_id: "3",
  },
  {
    id: "5",
    name: "Barbie AF",
    doll_type: "Barbie",
    est_value: "$50",
    photo_1: "https://media1.tenor.co/images/572cd9ee8ce078a5e04fb7bc493f24be/tenor.gif?itemid=5469934",
    year_produced: "1998",
    condition_id: "3",
  },
  {
    id: "2",
    name: "Barbie AF",
    doll_type: "Barbie",
    est_value: "$50",
    photo_1: "https://media1.tenor.co/images/572cd9ee8ce078a5e04fb7bc493f24be/tenor.gif?itemid=5469934",
    year_produced: "1998",
    condition_id: "3",
  },
  {
    id: "4",
    name: "Barbie AF",
    doll_type: "Barbie",
    est_value: "$50",
    photo_1: "https://media1.tenor.co/images/572cd9ee8ce078a5e04fb7bc493f24be/tenor.gif?itemid=5469934",
    year_produced: "1998",
    condition_id: "3",
  },
  {
    id: "6",
    name: "Barbie AF",
    doll_type: "Barbie",
    est_value: "$50",
    photo_1: "https://media1.tenor.co/images/572cd9ee8ce078a5e04fb7bc493f24be/tenor.gif?itemid=5469934",
    year_produced: "1998",
    condition_id: "3",
  }
]
const BarbiesDisplay = (props) =>{
  return (
    <div>
      <Barbies barbies={BarbieInfo} />
    </div>
  )
}

export default BarbiesDisplay
