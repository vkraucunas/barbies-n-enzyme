import React, {Component} from 'react';
import TextField from 'material-ui/TextField'

class RequiredBarbieFields extends Component {
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
    let {photo_1, photo_2, photo_3} = this.state.formData
    return (
      <div className="photoFields">
        <TextField
          name="photo_1"
          value={photo_1}
          floatingLabelText="Photo Url"
          fullWidth={true}
          type="url"
        />
        <TextField
          name="photo_2"
          value={photo_2}
          floatingLabelText="Photo Url"
          fullWidth={true}
          type="url"
        />
        <TextField
          name="photo_3"
          value={photo_3}
          floatingLabelText="Photo Url"
          fullWidth={true}
          type="url"
        />
      </div>
    )
  }
}

export default RequiredBarbieFields
