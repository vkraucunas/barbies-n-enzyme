import React, {Component} from 'react';
import TextField from 'material-ui/TextField'

class RequiredBarbieFields extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="photoFields">
        <TextField
          name="photo_1"
          defaultValue=""
          floatingLabelText="Photo Url"
          fullWidth={true}
          type="url"
        />
        <TextField
          name="photo_2"
          defaultValue=""
          floatingLabelText="Photo Url"
          fullWidth={true}
          type="url"
        />
        <TextField
          name="photo_3"
          defaultValue=""
          floatingLabelText="Photo Url"
          fullWidth={true}
          type="url"
        />
      </div>
    )
  }
}

export default RequiredBarbieFields
