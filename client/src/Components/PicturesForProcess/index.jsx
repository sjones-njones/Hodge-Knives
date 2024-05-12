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

      <Carousel.Item>
      <Image   className="" src="https://firebasestorage.googleapis.com/v0/b/hodge-knives.appspot.com/o/images%2Fmaking-of%2F439082383_967430215168941_1129920217146931029_n.jpg?alt=media&token=672b1221-37e9-421a-8054-8caa2717ddae" />
      </Carousel.Item>

      <Carousel.Item>
      <Image   className="" src="https://firebasestorage.googleapis.com/v0/b/hodge-knives.appspot.com/o/images%2Fmaking-of%2F436236336_967429491835680_4642552285648327737_n.jpg?alt=media&token=6ad1f864-e97a-4565-a6da-00b47dae9001" />
      </Carousel.Item>

      <Carousel.Item>
      <Image   className="" src="https://firebasestorage.googleapis.com/v0/b/hodge-knives.appspot.com/o/images%2Fmaking-of%2F439068071_967430261835603_6403510300687607902_n.jpg?alt=media&token=2b039cdd-2626-4d03-a096-90885d0f6f73" />
      </Carousel.Item>

      <Carousel.Item>
      <Image   className="" src="https://firebasestorage.googleapis.com/v0/b/hodge-knives.appspot.com/o/images%2Fmaking-of%2F439098301_967430248502271_6955461281064119656_n.jpg?alt=media&token=3427b56a-b06c-4c4b-92bb-e21dbd9e43c9" />
      </Carousel.Item>
      
      <Carousel.Item>
      <Image   className="" src="https://firebasestorage.googleapis.com/v0/b/hodge-knives.appspot.com/o/images%2Fmaking-of%2F435314936_967430288502267_4130808688229767626_n.jpg?alt=media&token=ce8332a8-5998-4d9f-af7b-55cbd98b59d7" />
      </Carousel.Item>

      <Carousel.Item>
      <Image   className="" src="https://firebasestorage.googleapis.com/v0/b/hodge-knives.appspot.com/o/images%2Fmaking-of%2F439078426_967444235167539_5807555235085371615_n.jpg?alt=media&token=3673cb4a-9277-450f-9d4f-fa5eb5850ad2" />
      </Carousel.Item>

      
      </Carousel>
    </div>
  )
}
export default ImageGallaryComponent;