import React, { Component } from 'react';
import "./Portfolio.css"

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import uuid from 'uuid/v4'
import { Fade } from '@material-ui/core';

class Portfolio extends Component {

  state = {
    projects: this.props.projects
  }

  _renderProjects = () => {

    const { projects } = this.state

    return (
      <div class='pb-5 container'>
        <div class="row">
          {projects.map(project =>
            <div id={project.id} class="mt-3 col-md-6 col-sm-12">
              <Card class='card'>
                <Link style={{ color: 'rgba(0,0,0,0)' }} to={`/project/${project.id}`}>
                  <CardActionArea>
                    <div class="img-hover-zoom">
                      <CardMedia
                        className="cardPic"
                        component="img"
                        alt={project.name}
                        // height="100%"
                        image={project.img_url}
                        title={project.name}
                      />
                    </div>
                  </CardActionArea>
                </Link>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {project.header}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          )}

        </div>
      </div>
    )
  }

  render() {

    return (
      <div id='projects' className='portfolio container-fluid'>
        <div class='title text-center d-flex align-items-center justify-content-center'>
          <div class='title-text text-center'>Portfolio</div>
        </div>
        <Fade in={true} timeout={{ enter: 3500, exit: 500 }}>
          {this._renderProjects()}
        </Fade>
      </div>);
  }
}

export default Portfolio;