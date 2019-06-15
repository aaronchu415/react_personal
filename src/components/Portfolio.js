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

class Portfolio extends Component {

  state = {}
  render() {
    return (
      <div className='portfolio container-fluid'>
        <div class='title text-center d-flex align-items-center justify-content-center'><div class='text-center'>Portfolio</div></div>

        <div class='container'>
          <div class="row">
            <div class="mt-3 col-md-6 col-sm-12">
              <Card class='card'>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="100%"
                    image="https://www.imore.com/sites/imore.com/files/styles/xlarge_wm_blw/public/field/image/2017/07/safari-macos-high-sierra-customize-website-options.jpg?itok=ejy3XY_B"
                    title="Contemplative Reptile"
                  />
                </CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Course Report Mobile
                      </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    React Native • Node/Express • Rails • Redis • PostgreSQL
            </          Typography>
                </CardContent>
              </Card>
            </div>

            <div class="mt-3 col-md-6 col-sm-12">
              <Card class='card'>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="100%"
                    image="https://www.imore.com/sites/imore.com/files/styles/xlarge_wm_blw/public/field/image/2017/07/safari-macos-high-sierra-customize-website-options.jpg?itok=ejy3XY_B"
                    title="Contemplative Reptile"
                  />
                </CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Course Report Mobile
                      </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    React Native • Node/Express • Rails • Redis • PostgreSQL
            </          Typography>
                </CardContent>
              </Card>
            </div>

            <div class="mt-3 col-md-6 col-sm-12">
              <Card class='card'>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="100%"
                    image="https://www.imore.com/sites/imore.com/files/styles/xlarge_wm_blw/public/field/image/2017/07/safari-macos-high-sierra-customize-website-options.jpg?itok=ejy3XY_B"
                    title="Contemplative Reptile"
                  />
                </CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Course Report Mobile
                      </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    React Native • Node/Express • Rails • Redis • PostgreSQL
            </          Typography>
                </CardContent>
              </Card>
            </div>


          </div>
        </div>
      </div>);
  }
}

export default Portfolio;