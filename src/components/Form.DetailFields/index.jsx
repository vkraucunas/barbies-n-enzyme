import React, {Component} from 'react';
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';

import YearSelect from '../YearSelect'

class DetailFields extends Component {
  constructor(props) {
    super(props)
    this.state = {
      minYear: 1959,
      maxYear: new Date().getFullYear()
    }
  }



  render() {
    return (
      <div className="detailFields">
        <YearSelect />
        <SelectField
          floatingLabelText="Doll Class"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={1} label="A/O" primaryText="All Original" />
          <MenuItem value={2} label="Collector" primaryText="Collector Edition" />
          <MenuItem value={3} label="Customized" primaryText="Customized" />
          <MenuItem value={4} label="Limited Edition/Designer" primaryText="Limited Edition/Designer" />
          <MenuItem value={5} label="HTF" primaryText="Hard to Find" />
          <MenuItem value={5} label="OSS" primaryText="Original Swim Suit" />

        </SelectField>
        <TextField
          name="upc"
          defaultValue=""
          floatingLabelText="UPC"
          fullWidth={true}
        />
        <Checkbox
          label="Reproduction Doll"
          checked={true}
          // onCheck={this.updateCheck.bind(this)}
          // style={styles.checkbox}
        />
        <TextField
          name="notes"
          defaultValue=""
          floatingLabelText="Notes from Fran"
          fullWidth={true}
          multiLine={true}
          rows={4}
        />
      </div>
    )
  }
}

export default DetailFields
