import React from 'react';
import {Link} from 'react-router-dom'
import {Card, CardMedia} from 'material-ui/Card';
import Divider from 'material-ui/Divider'
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'

const styles = {
  coreDetailsBlock: {
    display: "flex",
    justifyContent: 'space-between',
    flexWrap: "wrap"
  },
  columnStyles: {
    width: "40%",
    minWidth: "300px",
  },
  imgCard: {
    maxWidth: "250px"
  }
}

const CoreDetails = ({...props}) => {
  let {
    id,
    name,
    est_value,
    est_date,
    photo_1,
    production_year,
    personality,
    notes,
    condition
  } = props
  return (
      <div className="coreDetails" style={styles.coreDetailsBlock}>
        <h2>{name}</h2>
        <div style={styles.coreDetailsBlock}>
          <div className="rtColumn" style={styles.columnStyles}>
            <p><strong>Production Year:</strong> {production_year}</p>
            <p><strong>Doll Type:</strong> {personality}</p>
            <p><strong>Condition:</strong> {condition}</p>
            <p><strong>Estimated Value:</strong> {est_value} <small><em>(Estimated {est_date} ago)</em></small></p>
            <Divider />
            <p><strong>Notes from Fran</strong></p>
            <p><em>{notes}</em></p>
          </div>
          <div className="leftColumn" style={styles.columnStyles}>
            <Card
              className="CoreDetails"
              style={styles}
              >
              <CardMedia style={styles.imageCard}>
                <img src={photo_1} alt={name}  />
              </CardMedia>
            </Card>
          </div>
        </div>
      </div>
    );
}
const date = distanceInWordsToNow(new Date("2017-02-31"))
CoreDetails.defaultProps = {
  name: "Barbie AF",
  est_value: "$50",
  personality: "Barbie",
  condition: "NM",
  production_year: "1994",
  notes: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
  photo_1: "/barbie-avatar.png",
  est_date: date,
}



export default CoreDetails
