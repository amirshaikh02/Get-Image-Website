import React from 'react'
import {Box, InputBase} from '@mui/material'
function InputBar({setCount,setText}) {
  return (
    <Box style={{background:'#F6F6F6'}}>
        <InputBase
        placeholder='Number Of images'
        type='number'
        style={{margin:10}}
        onChange={(e)=>setCount(e.target.value)}
        />

        <InputBase
        placeholder='Search images'
        style={{margin:10,margin:'auto'}}
        onChange={(e)=> setText(e.target.value)}
        />
    </Box>
  )
}

export default InputBar
