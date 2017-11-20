import React from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

const years = () => {
  const minYear = 1959
  const maxYear = new Date().getFullYear()

  let yearArr = []
  for(let i = maxYear; i >= minYear; i--) {
    yearArr.push(i)
  }
  return yearArr
}

const YearSelect = ({props}) => {
  return (
    <SelectField
      floatingLabelText="Year Produced"
      // value={props.year}
      onChange={() => true}
    >
    {
      years().map(year => <MenuItem key={year} value={year} primaryText={year} />)
    }
    </SelectField>
  )
}

export default YearSelect
