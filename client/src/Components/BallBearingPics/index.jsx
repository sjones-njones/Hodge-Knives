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
          <Carousel.Item>
      <Image
            src="https://firebasestorage.googleapis.com/v0/b/hodge-knives.appspot.com/o/images%2Fmaking-of%2Fball-bearings%2Fball.jpg?alt=media&token=13173dda-3333-4b03-a08e-1c39d0c2ca5c
            " />
          </Carousel.Item>
          <Carousel.Item>
      <Image
            src="https://firebasestorage.googleapis.com/v0/b/hodge-knives.appspot.com/o/images%2Fmaking-of%2Fball-bearings%2Fballii.jpg?alt=media&token=d041a2c3-243e-45a8-8622-acafde1b5530
            " />
          </Carousel.Item>
          <Carousel.Item>
      <Image
            src="https://firebasestorage.googleapis.com/v0/b/hodge-knives.appspot.com/o/images%2Fmaking-of%2Fball-bearings%2Fballiii.jpg?alt=media&token=d97a01cd-a9d6-48e0-b545-9db15f52dd11
            " />
          </Carousel.Item>
          <Carousel.Item>
      <Image
            src="https://firebasestorage.googleapis.com/v0/b/hodge-knives.appspot.com/o/images%2Fmaking-of%2Fball-bearings%2Fballiiii.jpg?alt=media&token=37d8deab-27a4-4caa-ac2c-f846b848fc4e
            " />
          </Carousel.Item>
          <Carousel.Item>
      <Image
            src="https://firebasestorage.googleapis.com/v0/b/hodge-knives.appspot.com/o/images%2Fmaking-of%2Fball-bearings%2Fballv.jpg?alt=media&token=b9b7e484-6071-42e3-86d6-21eedb904a5f
            " />
          </Carousel.Item>
          <Carousel.Item>
      <Image
            src="https://firebasestorage.googleapis.com/v0/b/hodge-knives.appspot.com/o/images%2Fmaking-of%2Fball-bearings%2Fballvi.jpg?alt=media&token=95608616-e2f9-4fa0-997d-e1ccf201ac07
            " />
          </Carousel.Item>
          <Carousel.Item>
      <Image
            src="https://firebasestorage.googleapis.com/v0/b/hodge-knives.appspot.com/o/images%2Fmaking-of%2Fball-bearings%2Fballvii.jpg?alt=media&token=0f16973f-a59d-4fcc-bd70-ca08f7b6a386
            " />
          </Carousel.Item>
          <Carousel.Item>
      <Image
            src="https://firebasestorage.googleapis.com/v0/b/hodge-knives.appspot.com/o/images%2Fmaking-of%2Fball-bearings%2Fballviii.jpg?alt=media&token=c0acd236-a1ba-454c-8b18-7b8ba68a0d5b
            " />
          </Carousel.Item>
          <Carousel.Item>
      <Image
            src="https://firebasestorage.googleapis.com/v0/b/hodge-knives.appspot.com/o/images%2Fmaking-of%2Fball-bearings%2Ffinal_ball.jpg?alt=media&token=de60ddeb-fd61-47eb-ac01-dece5e151551
            " />
          </Carousel.Item>
          <Carousel.Item>
      <Image
            src="https://firebasestorage.googleapis.com/v0/b/hodge-knives.appspot.com/o/images%2Fmaking-of%2Fball-bearings%2Ffinal_ball_II.jpg?alt=media&token=0f3ac710-d0ec-4d98-96ad-0e8ac856aecf
            " />
          </Carousel.Item>


      
      </Carousel>
    </div>
  )
}
export default BallBearing;