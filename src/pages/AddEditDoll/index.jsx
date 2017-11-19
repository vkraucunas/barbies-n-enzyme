import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import Divider from 'material-ui/Divider'

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
    this.state = {
      formData: props.dollData,
      value: 1
    }
  }

  handleChange = (event, index, value) => this.setState({value});



  render() {
    return (
      <div>
        <h1>Add Edit Doll</h1>
        <form action="" onSubmit={(e) =>{
          e.preventDefault()
          console.log("huzzah")
          }}>
          <p><em>These fields are required to add a doll</em></p>
          <RequiredFields />
          <Divider style={styles.Divider} />
          <p><em>Additional Information</em></p>
          <DetailFields />
          <Divider style={styles.Divider} />
          <PurchaseDetailFields />
          <PhotoFields />
          <RaisedButton>Submit</RaisedButton>
        </form>
      </div>
    )
  }
}

AddEditDoll.defaultProps = {
  formData: {}
}

export default AddEditDoll
