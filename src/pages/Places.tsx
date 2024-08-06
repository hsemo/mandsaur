import { useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';

const places = [
  {
    title: "Buddhist Caves",
    image: "/public/historical/Buddhist Caves.jpg"
  },
  {
    title: "Dharmarajeshwar Temple",
    image: "/public/historical/Dharmarajeshwar Temple.jpg"
  },
  {
    title: "Lord Pashupatinath",
    image: "/public/historical/Pashupatinath Temple.jpg"
  },
  {
    title: "Chaturbhuj Nala",
    image: "/public/historical/Chaturbhuj Nala.jpg"
  },
  {
    title: "Lord Pashupatinath Temple",
    image: "/public/historical/Pashupatinath Temple.png"
  },
  {
    title: "Vijay Stambh",
    image: "/public/historical/Vijay Stambh.jpg"
  },
  {
    title: "Gandhi Sagar Dam",
    image: "/public/historical/Gandhi Sagar Dam.jpg"
  }
];

function Modal({showModal, toggleModal, img, title}:{showModal: boolean, toggleModal: any, img: string | undefined, title: string}){
  return(
    <div className={(showModal ? '' : 'hidden ') + "fixed h-screen w-screen flex flex-wrap flex-col justify-start items-center bg-black/[.8] z-50 overflow-auto"}>
      <button
        className="absolute top-0 right-0 m-2 p-2 bg-red-500 text-black rounded-full hover:bg-red-700 hover:text-white"
        onClick={toggleModal}
      >
       <AiOutlineClose size={20} />
      </button>

      <h1 className="animate-zoom text-2xl my-2">
        {title}
      </h1>

      <img
        className="object-cover w-[60%] animate-zoom"
        src={img}
        alt={img?.split('.')[0]}
      />
    </div>
  );
}

function Place({title, desc, img, toggleModal}:{title: string, desc: string, img: string, toggleModal: any}){
  return(
    <div
      className='relative after:inline after:text-center after:absolute after:top-0 after:left-0 after:right-0 after:text-xl after:bg-black/[.5] after:text-transparent after:transition-transform-all after:duration-200 after:h-0 hover:after:h-10 hover:after:text-white after:content-[attr(data-image-heading)] cursor-zoom-in'
      data-image-heading={title}
    >
      <img
        className="object-cover w-[300px] h-[300px]"
        src={img}
        alt={img.split('.')[0]}
        onClick={toggleModal}
      />
      <p
        className="absolute left-0 bottom-0 right-0"
      >
        {desc}
      </p>
    </div>
  );
}

export default function Places(){
  const [showModal, setShowModal] = useState(false);
  const [currentModalImage, setCurrentModalImage] = useState(-1);

  const toggleModal = (imgIndex: number = -1) => {
    setShowModal(!showModal);
    // if(currentModalImage >= 0){
    //   setCurrentModalImage(-1);
    // } else {
    //   setCurrentModalImage(imgIndex);
    // }
    setCurrentModalImage(imgIndex);
  }

  return (
    <div
      className="flex flex-wrap justify-center gap-5 m-auto"
    >
      {
        places.map(({title, image}, i: number) => {
          return <Place title={title} img={image} desc="" toggleModal={() => toggleModal(i)} />;
      })
      }

      <Modal
        showModal={showModal}
        toggleModal={toggleModal}
        img={places[currentModalImage]?.image}
        title={places[currentModalImage]?.title}
      />
    </div>
  );
}
