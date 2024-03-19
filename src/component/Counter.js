import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export default function Counter() {
    let [like,setLike] = useState(0);
    let [dislike,setDisLike] = useState(0);
    const incre = () =>setLike(like+1)
    const decre = ()=> setDisLike(dislike+1)
  return (
    <div>
        <IconButton aria-label="Toggle-Descroption"  color="primary" onClick={incre}> 
                 <Badge badgeContent={like} color='primary'>👍</Badge>
        </IconButton>
        <IconButton aria-label="Toggle-Descroption"  color="primary" onClick={decre}> 
                
                <Badge badgeContent={dislike} color='error'>👎</Badge>
        </IconButton>
    </div>
  )
}
