import React from 'react'
import { 
    Card as MCard, 
    CardMedia as MCardMedia, 
    CardContent as MCardContent, 
    CardActionArea as MCardActionArea, 
    CardActions as MCardActions, 
    Button, 
    Typography 
} from '@material-ui/core';

const Card = () => {
return (
  <>
    <MCard className="card-root">
      <MCardActionArea>
        <MCardMedia
          className="card-media"
          image="/components/images/straightface.jpg"
          title="Project 1"
        />
        <MCardContent>
          <Typography>
            Hello Man
          </Typography>
        </MCardContent>
        <MCardActions>
          <Button size="small">Explore</Button>
        </MCardActions>
      </MCardActionArea>
    </MCard>
  </>
)
}

export default Card
