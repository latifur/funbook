import React, { Component } from "react";
import GalleryI from "react-photo-gallery";

export default class Picture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    this.setState({
      photos: [
        {
          src: this.props.ImgUrl,
          width: 4,
          height: 3
        },
        {
          src: this.props.ImgUrl,
          width: 1,
          height: 1
        },
        {
          src: this.props.ImgUrl,
          width: 1,
          height: 1
        },
        {
          src: this.props.ImgUrl,
          width: 4,
          height: 3
        }
      ]
    });
  }
  render() {
    return <GalleryI photos={this.state.photos}></GalleryI>;
  }
}
