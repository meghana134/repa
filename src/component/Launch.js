import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Launch() {
  return (
    <div>
    <div className='c'>
    <div className='conta'>
    <div className='one'>
     <h1>New Category Launches</h1>
     <Card sx={{ maxWidth: 290 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
        //   width="100"s
          image="./cwash.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{textAlign:"center", height:"40px"}}>
          Car Wash & <br></br><span>Maintaince</span> 
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
</div>
<div className='two'>
<Card sx={{ maxWidth: 290 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
        //   width="100"s
          image="./cwash.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{textAlign:"center", height:"40px"}}>
          Car Wash & <br></br><span>Maintaince</span> 
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>

</div>
<div className='three'>
<Card sx={{ maxWidth: 290 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
        //   width="100"s
          image="./cwash.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{textAlign:"center", height:"40px"}}>
          Car Wash & <br></br><span>Maintaince</span> 
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>

</div>
<div className='four'>
<Card sx={{ maxWidth: 290 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
        //   width="100"s
          image="./cwash.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{textAlign:"center", height:"40px"}}>
          Car Wash & <br></br><span>Maintaince</span> 
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>

</div>
<div className='ill'>
<img src='./si.jpeg'></img>

</div>
</div>
    </div>
    </div>
  )
}

export default Launch