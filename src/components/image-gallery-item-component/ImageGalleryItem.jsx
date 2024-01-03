// Імпорт бібліотек
import React, { Component } from 'react';
import { Grid, Card, CardMedia } from '@mui/material';
// Основний клас компонента
class ImageGalleryItem extends Component {
  handleClick = () => {
    const { image, onImageClick } = this.props;
    onImageClick(image.largeImageURL);
  };
  // Рендер
  render() {
    const { image } = this.props;

    return (
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <Card onClick={this.handleClick}>
          <CardMedia
            component="img"
            height="140"
            image={image.webformatURL}
            alt=""
            style={{ cursor: 'pointer' }}
          />
        </Card>
      </Grid>
    );
  }
}
// Експорт
export default ImageGalleryItem;
