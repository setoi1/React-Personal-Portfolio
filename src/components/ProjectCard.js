import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@material-ui/core';

const ProjectCard = (props) => {
  return (
    <Card className="project-card-container">
      <CardMedia 
        height="128"
        width="128"
        image={props.logo}
      />
      <CardContent>
        <Typography variant="h5" component="h5">
          {props.title}
        </Typography>
        <Typography variant="h6" component="h6">
          {props.date}
        </Typography>
        <Typography variant="h6" component="h6">
          {props.techStack}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions className="project-card-actions">
        <Button className="project-card-link-button" size="small" href={props.link} target="_blank">
          Link
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
