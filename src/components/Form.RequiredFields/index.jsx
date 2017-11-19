import React, {Component} from 'react';
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

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
          name="name"
          defaultValue="Default Value"
          floatingLabelText="Name"
          fullWidth={true}
        />
        <SelectField
          floatingLabelText="Doll Condition"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={1} label="NRFB" primaryText="Never Removed From Box" />
          <MenuItem value={2} label="MIP" primaryText="Mint In Package" />
          <MenuItem value={3} label="Mint & Complete" primaryText="Mint & Complete" />
          <MenuItem value={4} label="MNB" primaryText="Mint No Box" />
          <MenuItem value={5} label="NM" primaryText="Near Mint" />
          <MenuItem value={5} label="C5-C7" primaryText="Fair" />
          <MenuItem value={5} label="C1-C4" primaryText="Poor" />

        </SelectField>
        <SelectField
          floatingLabelText="Doll Personality"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={1} primaryText="Barbie" />
          <MenuItem value={2} primaryText="Ken" />
          <MenuItem value={3} primaryText="Skipper" />
          <MenuItem value={4} primaryText="Teresa" />
          <MenuItem value={5} primaryText="Midge" />
          <MenuItem value={5} primaryText="Kelly" />
          <MenuItem value={5} primaryText="Other" />
        </SelectField>
      </div>
    )
  }
}

export default RequiredBarbieFields
