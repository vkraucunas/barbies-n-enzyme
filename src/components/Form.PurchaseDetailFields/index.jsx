import React, {Component} from 'react';
import TextField from 'material-ui/TextField'

class PurchaseDetailsFields extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formData: {}
    }
  }


  componentWillReceiveProps(nextProps) {
    this.setState({ formData: nextProps });
  }

  render() {
    let {est_value, seller, purchase_price} = this.state.formData

    return (
      <div className="requiredFields">
        <TextField
          name="est_value"
          value={est_value}
          floatingLabelText="Estimated Value"
          type="number"
        />
        <TextField
          name="purchase_price"
          value={purchase_price}
          floatingLabelText="Purchase Price"
          type="number"
        />
        <TextField
          name="seller"
          value={seller}
          floatingLabelText="Seller"
        />

      </div>
    )
  }
}



export default PurchaseDetailsFields
