import React from 'react'
import {Grid} from'@mui/material';
import ImageCard from './ImageCard';

function MainImages({data}) {
  return (
    <Grid container>
        {

            data.map(image=>
                    <Grid  xs={12} sm={6} md={4} lg={3}  item>
                        <ImageCard key={image.id} image={image} />
                    </Grid>
                    )
        }

    </Grid>
  )
}

export default MainImages
