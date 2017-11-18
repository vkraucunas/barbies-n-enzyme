import React from 'react';
import classNames from 'classnames/bind'
import s from './index.styl'
import {Link} from 'react-router-dom'
import Card from 'material-ui/Card'
import Chip from 'material-ui/Chip'

const cx = classNames.bind(s)

const BarbieCard = (props) => {
  let {
    id,
    name,
    doll_type,
    est_value,
    photo_1,
    year_produced,
    condition_id
  } = props

  return (
    <Link to={`/barbies/${id}`}>
      <Card>
        <img src={photo_1} alt={name} />
        <h3>{name}</h3>
        <p>{est_value}</p>
        <Chip>{year_produced}</Chip>
        <Chip>{condition_id}</Chip>
      </Card>
    </Link>
  )

}
