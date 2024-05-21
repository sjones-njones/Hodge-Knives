import ImageSlider from '../ImageSlider';

const HomeInfo = () => {

  const images = [
 
     'https://firebasestorage.googleapis.com/v0/b/hodge-knives.appspot.com/o/images%2FhomePage%2FIMG_9500.jpg?alt=media&token=390ffdbe-4ef3-48a8-8567-236309311add',
     "https://firebasestorage.googleapis.com/v0/b/hodge-knives.appspot.com/o/images%2FhomePage%2FIMG_9491.jpg?alt=media&token=919c38a8-797b-4959-b199-6b89df49594a",
   'https://firebasestorage.googleapis.com/v0/b/hodge-knives.appspot.com/o/images%2FhomePage%2FIMG_9513.jpg?alt=media&token=4c760fdf-cf66-4102-9979-be7f5f33e906',
  
   'https://firebasestorage.googleapis.com/v0/b/hodge-knives.appspot.com/o/images%2FhomePage%2FIMG_9528.jpg?alt=media&token=fe18362a-01c1-4a5d-9d1b-008dacfc7981',
   "https://firebasestorage.googleapis.com/v0/b/hodge-knives.appspot.com/o/images%2FhomePage%2FIMG_9488.jpg?alt=media&token=b0a6f18e-c7b9-4a2e-a09f-80e379142943",
   'https://firebasestorage.googleapis.com/v0/b/hodge-knives.appspot.com/o/images%2FhomePage%2FIMG_9516%20(1).jpg?alt=media&token=e617f627-56f8-44e2-abff-ec98e12b08f7',
   'https://firebasestorage.googleapis.com/v0/b/hodge-knives.appspot.com/o/images%2FhomePage%2FIMG_9518.jpg?alt=media&token=b1c33fb9-4520-458f-bfe7-6643d30c8aa0',
   'https://firebasestorage.googleapis.com/v0/b/hodge-knives.appspot.com/o/images%2FhomePage%2FIMG_9527%20(1).jpg?alt=media&token=a97c6692-b48f-485c-b220-c143c908f9d2'





    // Add more image URLs here
  ];

  return (
    <div className="">
      <h1 className='pb-4 fw-bold text-white'>Hodge Knives</h1>
      <div className="">
      <div>
        <ImageSlider images={images} />
      <div className='card bg-black'>

        <p className='fs-1 fw-bold text-warning text-justify'> Get your own handmade knife!
        </p>
      </div>
    </div>
       
      </div>

    </div>
  );
};

export default HomeInfo;
