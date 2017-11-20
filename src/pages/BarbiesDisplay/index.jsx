import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {getDolls} from '../../redux/actions'
import BarbiesContainer from '../../components/BarbiesContainer'

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
    if (this.props.dolls) {
      console.log('====================================');
      console.log(this.props.dolls);
      console.log('====================================');
      return (
        <div>
          <BarbiesContainer barbies={this.props.dolls} />
        </div>
      )
    }
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
