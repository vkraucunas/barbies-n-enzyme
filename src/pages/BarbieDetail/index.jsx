import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom'

import CoreDetails from '../../components/CoreDetails'

const styles = {
  detailBlock: {
    width: '100%',
    display: "flex",
    flexDirection: "column"
  },
  link: {
    marginLeft: "auto",
  },
  button: {
    width: "150px",
  }
}

export default function ({props}) {
  const id = "1"
  return (
    <div style={styles.detailBlock}>
      <Link to={`/barbies/${id}/edit`} style={styles.link}>
        <RaisedButton backgroundColor="#FD94CA" style={styles.button}>Update Doll</RaisedButton>
      </Link>
      <CoreDetails />
    </div>
  )
}
