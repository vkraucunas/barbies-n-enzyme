import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';

import {getSingleDoll} from '../../redux/actions'

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

class BarbieDetail extends Component {

  componentDidMount() {
    this.props.getSingleDoll(this.props.match.params.id)
  }

  render() {
    const {activeDoll} = this.props
    return (
      <div style={styles.detailBlock}>
        <Link to={`/barbies/${activeDoll.id}/edit`} style={styles.link}>
          <RaisedButton backgroundColor="#FD94CA" style={styles.button}>Update Doll</RaisedButton>
        </Link>
        <CoreDetails {...activeDoll} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getSingleDoll
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BarbieDetail)
