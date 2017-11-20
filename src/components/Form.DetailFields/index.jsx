import React, {Component} from 'react';
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';

class DetailFields extends Component {
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
    let {classification, reproduction, upc, notes} = this.state.formData
    return (
      <div className="detailFields">
        <SelectField
          floatingLabelText="Doll Class"
          value={classification}
          onChange={this.handleChange}
        >
          <MenuItem value={"A/O"} label="A/O" primaryText="All Original" />
          <MenuItem value={"Collector"} label="Collector" primaryText="Collector Edition" />
          <MenuItem value={"Customized"} label="Customized" primaryText="Customized" />
          <MenuItem value={"Limited Edition/Designer"} label="Limited Edition/Designer" primaryText="Limited Edition/Designer" />
          <MenuItem value={"HTF"} label="HTF" primaryText="Hard to Find" />
          <MenuItem value={"OSS"} label="OSS" primaryText="Original Swim Suit" />

        </SelectField>
        <TextField
          name="upc"
          value={upc}
          floatingLabelText="UPC"
          fullWidth={true}
        />
        <Checkbox
          label="Reproduction Doll"
          checked={reproduction}
          // onCheck={this.updateCheck.bind(this)}
          // style={styles.checkbox}
        />
        <TextField
          name="notes"
          value={notes}
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
