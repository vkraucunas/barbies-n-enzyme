import React, {Component} from 'react';
import TextField from 'material-ui/TextField'

import YearSelect from '../YearSelect'

class RequiredBarbieFields extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="requiredFields">
        <TextField
          name="est_value"
          defaultValue=""
          floatingLabelText="Estimated Value"
          type="number"
        />
        <TextField
          name="purchase_price"
          defaultValue=""
          floatingLabelText="Purchase Price"
          type="number"
        />
        <TextField
          name="seller"
          defaultValue=""
          floatingLabelText="Seller"
        />
        <YearSelect />

      </div>
    )
  }
}

export default RequiredBarbieFields
