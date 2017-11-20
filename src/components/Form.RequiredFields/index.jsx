import React, {Component} from 'react';
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

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
    let {name, condition, personality} = this.state.formData
    return (
      <div className="requiredFields">
        <TextField
          name="name"
          value={name}
          floatingLabelText="Name"
          fullWidth={true}
        />
        <SelectField
          floatingLabelText="Doll Condition"
          value={condition}
          onChange={this.handleChange}
        >
          <MenuItem value={"NRFB"} label="NRFB" primaryText="Never Removed From Box" />
          <MenuItem value={"MIP"} label="MIP" primaryText="Mint In Package" />
          <MenuItem value={"Mint & Complete"} label="Mint & Complete" primaryText="Mint & Complete" />
          <MenuItem value={"MNB"} label="MNB" primaryText="Mint No Box" />
          <MenuItem value={"NM"} label="NM" primaryText="Near Mint" />
          <MenuItem value={"C5-C7"} label="C5-C7" primaryText="Fair" />
          <MenuItem value={"C1-C4"} label="C1-C4" primaryText="Poor" />

        </SelectField>
        <SelectField
          floatingLabelText="Doll Personality"
          value={personality}
          onChange={this.handleChange}
        >
          <MenuItem value={"Barbie"} primaryText="Barbie" />
          <MenuItem value={"Ken"} primaryText="Ken" />
          <MenuItem value={"Skipper"} primaryText="Skipper" />
          <MenuItem value={"Teresa"} primaryText="Teresa" />
          <MenuItem value={"Midge"} primaryText="Midge" />
          <MenuItem value={"Kelly"} primaryText="Kelly" />
          <MenuItem value={"Other"} primaryText="Other" />
        </SelectField>
      </div>
    )
  }
}

export default RequiredBarbieFields
