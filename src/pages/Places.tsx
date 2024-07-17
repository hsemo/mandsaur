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

function Place({title, desc, img}){
  return(
    <div>
      <h1>{title}</h1>
      <img src={img} alt={img.split('.')[0]} />
      <p>{desc}</p>
    </div>
  );
}

export default function Places(){
  return (
    <div>
      {
        places.map(({title, image}) => {
          return <Place title={title} img={image} desc="" />;
      })
      }
    </div>
  );
}
