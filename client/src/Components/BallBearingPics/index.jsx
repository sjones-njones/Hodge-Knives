// src/reusable/image-gallery.component.js
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../../../src/Home.css"
import { Image } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';


function BallBearing() {
  return (
    <div className="mx-auto processSizing">
      <Carousel className="processSizing">
      <Carousel.Item>
      <Image
            src="https://firebasestorage.googleapis.com/v0/b/hodge-knives.appspot.com/o/images%2Fmaking-of%2Fball-bearings%2F441961561_979880820590547_4117333474402536728_n.jpg?alt=media&token=e3f4c441-ce2d-4915-ae05-b1b27f71ad77" />
          </Carousel.Item>
          <Carousel.Item>
      <Image
            src="https://firebasestorage.googleapis.com/v0/b/hodge-knives.appspot.com/o/images%2Fmaking-of%2Fball-bearings%2F440430246_979880897257206_1856168444143130275_n.jpg?alt=media&token=00a56cac-4176-4888-b538-0e3beda66f74" />
          </Carousel.Item>
          <Carousel.Item>
      <Image
            src="https://firebasestorage.googleapis.com/v0/b/hodge-knives.appspot.com/o/images%2Fmaking-of%2Fball-bearings%2F440414978_979880827257213_2061115740590771836_n.jpg?alt=media&token=51abf7ca-f495-4020-9092-acfa13db4bdb" />
          </Carousel.Item>
       

      
      </Carousel>
    </div>
  )
}
export default BallBearing;