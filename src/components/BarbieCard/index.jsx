import React from 'react';
import classNames from 'classnames/bind'
import s from './index.styl'
import {Link} from 'react-router-dom'
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import Chip from 'material-ui/Chip'

const cx = classNames.bind(s)

const BarbieCardStyle = {
  minWidth: '40%',
  margin: '20px'
}

const ChipStyles = {
  display: 'inline-block !important'
}

class BarbieCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };

  render() {
    let {
      id,
      name,
      doll_type,
      est_value,
      photo_1,
      year_produced,
      condition_id
    } = this.props
    return (
      <Link to={`/barbies/${id}`}>
        <Card
          expanded={this.state.expanded}
          onExpandChange={this.handleExpandChange}
          className="barbieCard"
          style={BarbieCardStyle}
          >
          <CardMedia
            expandable={false}
            overlay={<CardTitle title={name} subtitle={`Estimated Value: ${est_value}`} />}
          >
            <img src={photo_1} alt={name} />
          </CardMedia>
          <CardMedia actAsExpander={true} showExpandableButton={true} expandable={true}>
            <Chip styles={ChipStyles}>{year_produced}</Chip>
            <Chip styles={ChipStyles}>{condition_id}</Chip>
          </CardMedia>
        </Card>
      </Link>
    );
  }
}

export default BarbieCard
