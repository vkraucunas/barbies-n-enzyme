import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {getDolls} from '../../redux/actions'
import BarbiesContainer from '../../components/BarbiesContainer'

class BarbiesDisplay extends Component {

  constructor(props) {
    super(props)

    this.state = {
      dolls: null
    }
  }

  componentDidMount() {
    this.props.getDolls()
  }


  render() {
    return (
      <div>
        <BarbiesContainer barbies={this.props.dolls} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dolls: state.dolls
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getDolls
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BarbiesDisplay)
