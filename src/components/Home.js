import { Box } from '@material-ui/core'
import React from 'react'
import Dropdown from './Dropdown'
import Information from './Information'

const Home = () => {
  const [dropdownValue,setDropdownValue] = React.useState('')
  return (
    <div>
      <Box component='h1' textAlign='center'>Home Page</Box>
      <Dropdown dropdownValue={dropdownValue} setDropdownValue={setDropdownValue}/>
      <Information dropdownValue={dropdownValue}/>
    </div>
  )
}


export default Home
