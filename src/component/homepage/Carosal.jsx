import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export default function FreeSolo() {
  return (
    <Stack spacing={2} sx={{ width: 600 }}>
     
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
      
        >
          <TextField/>
       </Autocomplete>
     
    </Stack>
  );
}

