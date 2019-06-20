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

class Portfolio extends Component {

  state = {
    projects: [
      {
        id: uuid(),
        name: "Course Report Mobile",
        description: "React Native • Node/Express • Rails • Redis • PostgreSQL",
        img_url: "https://www.imore.com/sites/imore.com/files/styles/xlarge_wm_blw/public/field/image/2017/07/safari-macos-high-sierra-customize-website-options.jpg?itok=ejy3XY_B"
      },
      {
        id: uuid(),
        name: "Course Report Mobilee",
        description: "React Native • Node/Express • Rails • Redis • PostgreSQL",
        img_url: "https://www.imore.com/sites/imore.com/files/styles/xlarge_wm_blw/public/field/image/2017/07/safari-macos-high-sierra-customize-website-options.jpg?itok=ejy3XY_B"
      },
      {
        id: uuid(),
        name: "Course Report Mobileeee",
        description: "React Native • Node/Express • Rails • Redis • PostgreSQL",
        img_url: "https://www.imore.com/sites/imore.com/files/styles/xlarge_wm_blw/public/field/image/2017/07/safari-macos-high-sierra-customize-website-options.jpg?itok=ejy3XY_B"
      }
    ]
  }

  _renderProjects = () => {

    const { projects } = this.state

    return (
      <div class='container'>
        <div class="row">
          {projects.map(project =>
            <div id={project.id} class="mt-3 col-md-6 col-sm-12">
              <Card class='card'>
                <Link to={`/project/${project.id}`}>
                  <CardActionArea>
                    <div class="img-hover-zoom">
                      <CardMedia
                        className="cardPic"
                        component="img"
                        alt="Contemplative Reptile"
                        height="100%"
                        image={project.img_url}
                        title="Contemplative Reptile"
                      />
                    </div>
                  </CardActionArea>
                </Link>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {project.description}
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
        {this._renderProjects()}
      </div>);
  }
}

export default Portfolio;