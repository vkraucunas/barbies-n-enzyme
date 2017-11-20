import React from 'react';
import {Link} from 'react-router-dom'
import {Card, CardMedia, CardTitle} from 'material-ui/Card';

const BarbieCardStyle = {
  minWidth: '40%',
  margin: '20px'
}

class BarbieCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  render() {
    let {
      id,
      name,
      est_value,
      photo_1,
    } = this.props
    return (
      <Link to={`/barbies/${id}`}>
        <Card
          className="barbieCard"
          style={BarbieCardStyle}
          >
          <CardMedia
            expandable={false}
            overlay={<CardTitle title={name} subtitle={est_value && `Estimated Value: ${est_value}`} />}
          >
            <img src={photo_1} alt={name} />
          </CardMedia>
        </Card>
      </Link>
    );
  }
}



export default BarbieCard
