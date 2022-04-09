import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Location() {
  const [location, setLocation] = React.useState('');

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  return (
      <div >
    <Box sx={{ minWidth: 10, color: "blue" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={location}
          label="location"
          onChange={handleChange}
        >
          <MenuItem  style={{color:"white", backgroundColor:"blue"}} value={10}>Delhi</MenuItem>
          <MenuItem style={{color:"white", backgroundColor:"blue"}} value={20}>Banglore</MenuItem>
          <MenuItem style={{color:"white", backgroundColor:"blue"}}  value={30}>Mumbai</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </div>
  );
}
