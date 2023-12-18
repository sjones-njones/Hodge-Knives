import Maker from '../assets/images/makerPic.png';
const About = () => {

  return (
    <div className='container-fluid'>
      <div className="card bg-black m-3" style={{ width: 1500 }}>
        <h1 className="text-white card-title m-3">About</h1>

        <img className="m-3 mx-auto d-block card-img-top" src={Maker} alt="Picture of the Blacksmith" style={{ width: 500, height: 500 }}></img>

        <div className="text-start card-body w-75 mx-auto">
          <h4 className="card-text text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi harum, obcaecati voluptatibus ipsum delectus accusantium, autem, voluptas velit aperiam officiis quod minima. Minus corrupti odit laboriosam perferendis. Tempora, voluptatibus dolore.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, alias. Vel accusamus et nihil temporibus, sequi harum aspernatur voluptate rem aperiam ducimus molestiae deleniti, repellat, maxime atque magni perspiciatis pariatur? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore omnis reprehenderit laudantium, modi est facere accusamus minima magnam incidunt aut exercitationem non quas saepe, amet porro delectus sequi optio fugit?</h4>

          <h4 className="card-text text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi harum, obcaecati voluptatibus ipsum delectus accusantium, autem, voluptas velit aperiam officiis quod minima. Minus corrupti odit laboriosam perferendis. Tempora, voluptatibus dolore.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, alias. Vel accusamus et nihil temporibus, sequi harum aspernatur voluptate rem aperiam ducimus molestiae deleniti, repellat, maxime atque magni perspiciatis pariatur? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore omnis reprehenderit laudantium, modi est facere accusamus minima magnam incidunt aut exercitationem non quas saepe, amet porro delectus sequi optio fugit?</h4>
        </div>
      </div>
    </div>
  );
};

export default About;
