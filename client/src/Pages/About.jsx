import { Container, Card } from 'react-bootstrap';
import Maker from '../assets/images/makerPic.png';
import { useEffect, useState } from "react";
import '../Home.css';
const About = () => {

  return (
    <div>
      <Container className='mt-3'>
        <Card className="bg-black ">
          <Card.Title className='text-white fs-1 mb-3'>About the Blacksmith</Card.Title>
          <Card.Img className="mx-auto sizingImg" variant="top" src={Maker} />
          <Card.Body>
            <Card.Text className='text-white mx-auto text-start sizingText fs-4'>
              <p className='fw-bold text-center'>
                Welcome to Hodge-Knives!!!</p>
              <p>
                I'm a custom knife maker from Gonzales, LA. I started knife making in 2011. Driven by my a love for knives, the desire to build something, and the lack of funds needed to buy the knives I really wanted, I set out in an attempt to make my own. After some time and a ton of elbow grease, I started to make knives that got attention from those around me.
              </p>
              <p> Since day one I've been working to make the nicest knives I could make, making small improvements to my process along the way.
              </p>
              <p>

                I'm extremely proud of the knives that leave my shop. Anyone who's into knives and wants something unique should consider Hodge-Knives!
              </p>
              <p>

                Don't see anything that suits you? I also make custom knives upon request with a 1+ month lead time for those who don't mind waiting.
                </p>
                <p>
                 Feel free to contact me.
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>

    </div>
  );
};

export default About;



// <div className='container-fluid'>
//       <div className="card bg-black m-3" style={{ width: 1500 }}>
//         <h1 className="text-white card-title m-3">About</h1>

//         <img className="m-3 mx-auto d-block card-img-top" src={Maker} alt="Picture of the Blacksmith" style={{ width: 500, height: 500 }}></img>

//         <div className="text-start card-body w-75 mx-auto">
//           <h4 className="card-text text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi harum, obcaecati voluptatibus ipsum delectus accusantium, autem, voluptas velit aperiam officiis quod minima. Minus corrupti odit laboriosam perferendis. Tempora, voluptatibus dolore.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, alias. Vel accusamus et nihil temporibus, sequi harum aspernatur voluptate rem aperiam ducimus molestiae deleniti, repellat, maxime atque magni perspiciatis pariatur? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore omnis reprehenderit laudantium, modi est facere accusamus minima magnam incidunt aut exercitationem non quas saepe, amet porro delectus sequi optio fugit?</h4>

//           <h4 className="card-text text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi harum, obcaecati voluptatibus ipsum delectus accusantium, autem, voluptas velit aperiam officiis quod minima. Minus corrupti odit laboriosam perferendis. Tempora, voluptatibus dolore.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, alias. Vel accusamus et nihil temporibus, sequi harum aspernatur voluptate rem aperiam ducimus molestiae deleniti, repellat, maxime atque magni perspiciatis pariatur? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore omnis reprehenderit laudantium, modi est facere accusamus minima magnam incidunt aut exercitationem non quas saepe, amet porro delectus sequi optio fugit?</h4>
//         </div>
//       </div>
//     </div>