// src/reusable/image-gallery.component.js
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../../../src/Home.css"
import { Image } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';


function ImageGallaryComponent() {
  return (
    <div className="mx-auto processSizing">
      <Carousel className="processSizing">
      <Carousel.Item>
      <Image
            src=" https://firebasestorage.googleapis.com/v0/b/hodge-knives.appspot.com/o/images%2FProcess%2F1.jpg?alt=media&token=dd7def97-f93f-44cd-b05d-cad7c98841ce" />
          </Carousel.Item>
          <Carousel.Item>
      <Image className=""
            src="https://firebasestorage.googleapis.com/v0/b/hodge-knives.appspot.com/o/images%2FProcess%2F2.jpg?alt=media&token=3051e75a-bc37-48c7-8a7d-1392c7bb91fd" />
          </Carousel.Item>
          <Carousel.Item>
      <Image className=""
           src="https://firebasestorage.googleapis.com/v0/b/hodge-knives.appspot.com/o/images%2FProcess%2F3.jpg?alt=media&token=e9782b28-adf8-4047-bd19-d16f836b4b87" />
          </Carousel.Item>
        <Carousel.Item>
      <Image  className="" src="https://firebasestorage.googleapis.com/v0/b/hodge-knives.appspot.com/o/images%2FProcess%2F4.jpg?alt=media&token=7440f39c-8697-4aaa-a308-e706e70829c2" />
      </Carousel.Item>
        <Carousel.Item>
      <Image className="" src="https://firebasestorage.googleapis.com/v0/b/hodge-knives.appspot.com/o/images%2FProcess%2F5.jpg?alt=media&token=5956070f-b5bf-4894-8939-475778812725" />
      </Carousel.Item>
        <Carousel.Item>
      <Image className="" src="https://firebasestorage.googleapis.com/v0/b/hodge-knives.appspot.com/o/images%2FProcess%2F6.jpg?alt=media&token=496c8961-2b10-4c20-b86a-a889cea04f3c" />
          </Carousel.Item>
        <Carousel.Item>
      <Image   className="" src="https://firebasestorage.googleapis.com/v0/b/hodge-knives.appspot.com/o/images%2FProcess%2F7.jpg?alt=media&token=6c50c85b-7940-409e-848b-b8ad71a6b0c7" />
      </Carousel.Item>
      
      </Carousel>
    </div>
  )
}
export default ImageGallaryComponent;