import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@material-ui/core';

const ProjectCard = (props) => {
  return (
    <Card className="project-card-container">
      <CardMedia 
        src="img"
        height="300"
        width="600"
        image="C:\Users\iseto\Desktop\vscode\JavaScript\portfolio\src\images\javascript-resized.jpg" 
        title={props.title}
      />
      <CardContent>
        <Typography variant="h5" component="h5">
          {props.title}
        </Typography>
        <Typography variant="h6" component="h6">
          {props.techStack}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className="project-card-link-button" size="small" href={props.link} target="_blank">
          Link
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
