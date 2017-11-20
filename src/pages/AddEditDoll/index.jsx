import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
import Divider from 'material-ui/Divider'

import {getSingleDoll, updateDoll, addDoll} from '../../redux/actions'


import RequiredFields from '../../components/Form.RequiredFields'
import DetailFields from '../../components/Form.DetailFields'
import PurchaseDetailFields from '../../components/Form.PurchaseDetailFields'
import PhotoFields from '../../components/Form.PhotoFields'

const styles = {
  FormBlock: {
    margin: '64px'
  },
  Divider: {
    margin: '64px'
  }
}

class AddEditDoll extends Component {
  constructor(props) {
    super(props)
    let isUpdate = !!props.match.params.id
    this.state = {
      formData: props.activeDoll,
      isUpdate: isUpdate

    }
  }

  componentDidMount() {
    const {isUpdate} = this.state
    const id = this.props.match.params.id
    isUpdate && this.props.getSingleDoll(id)
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    let {isUpdate} = this.state
    console.log('====================================');
    console.log("props are:", this.props.activeDoll);
    console.log('====================================');
    let {
      name,
      condition,
      personality,
      classification,
      production_year,
      upc,
      reproduction,
      notes,
      metadata,
      photo_1,
      photo_2,
      photo_3
    } = this.props.activeDoll
    let requiredInfo = {
      name,
      condition,
      personality
    }
    let additionalInfo = {
      classification,
      production_year,
      upc,
      reproduction,
      notes
    }
    let photoInfo = {
      photo_1,
      photo_2,
      photo_3
    }


    return (
      <div>
        <h1>{isUpdate ? `Update ${name}` : "Add New Doll"}</h1>
        <form onSubmit={(e) =>{
          e.preventDefault()
          console.log("huzzah")
          }}>
          <p><em>These fields are required to add a doll</em></p>
          <RequiredFields {...requiredInfo}/>
          <Divider style={styles.Divider} />
          <p><em>Additional Information</em></p>
          <DetailFields {...additionalInfo} />
          <Divider style={styles.Divider} />
          <PurchaseDetailFields {...metadata} />
          <PhotoFields {...photoInfo} />
          <RaisedButton>Submit</RaisedButton>
          {/* <Link to={id ? `/barbies/${id}` : `/barbies`}> */}
          <Link to="/barbies">
            <RaisedButton>Cancel</RaisedButton>
          </Link>
        </form>
      </div>
    )
  }
}

AddEditDoll.defaultProps = {
  formData: {}
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getSingleDoll,
  addDoll,
  updateDoll
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AddEditDoll)
