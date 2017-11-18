import React from 'react';
import classNames from 'classnames/bind'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './index.styl'
import {Link} from 'react-router-dom'
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Chip from 'material-ui/Chip'

const cx = classNames.bind(s)


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
          className={s.barbieCard}>
          <CardHeader
            title="Doll Card"
            actAsExpander={true}
          />
          <CardMedia
            showExpandableButton={true}
            expandable={false}
            overlay={<CardTitle title={name} subtitle={`Estimated Value: ${est_value}`} />}
          >
            <img src={photo_1} alt="" />
          </CardMedia>
          <CardTitle title="Card title" subtitle="Card subtitle" expandable={true} />
          <CardText expandable={true}>
            <Chip>{year_produced}</Chip>
            <Chip>{condition_id}</Chip>
          </CardText>
        </Card>
      </Link>
    );
  }
}

export default BarbieCard
