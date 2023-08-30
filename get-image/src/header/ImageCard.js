import React from 'react'
import {Card} from '@mui/material'

import './ImageCard.css'

const ImageCard = ({image}) => {
  return (
    <Card>
        <img src={image.largeImageURL} alt={image.user} style={{height:300, width:'100%',objectFit:'cover',margin:10, borderRadius:4}}/>
    </Card>
  )
}

export default ImageCard
