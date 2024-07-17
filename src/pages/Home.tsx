import img from '../assets/background.jpg';
import mdsInWorld from '../assets/mandsaur_in_world.png';
import mdsInMP from '../assets/mandsaur_in_mp.png';
import background from '../assets/background2.jpg';

function Header({children}){
  return(
    <header
      className="w-screen h-screen bg-cover flex justify-center items-center font-medium text-white text-center text-6xl relative"
    >
      <div
        className="w-full h-full bg-cover absolute brightness-50 -z-50"
        style={{backgroundImage: `url(${background})`}}
      />

      {children}
    </header>
  );
}

function GeneralInfo(){
  return (
    <div
      className="text-center"
    >
      <h1
        className="text-3xl"
      >General Info</h1>

      <div className="w-[50%] float-left">
        <img src={img} alt="Pashupatinath temple form above" />
      </div>

      <p className="m-4">
        Mandsaur is a popular tourist destination known for the temple of Lord Pashupatinath.
        Mandsaur is identified with the city of Dashpur, which is attested in various ancient
        and medieval texts and inscriptions. According to the 12th-century Jain work called the
        Parishishthparvan, the name Dashpur was given to the city by a group of merchants visiting
        the royal fortress of a king named Udayana and his ten sons.
      </p>
    </div>
  );
}

function Geography(){
  return (
    <div>
      <h1
        className="text-3xl"
      >Geography</h1>
      <p>
        Mandsaur has an area of 9,791 km2 (3,780 sq mi) and is present on the border of the
        Mewar and Malwa so the culture is the combination of the both regions, and is bounded
        by Neemuch District to the north west, Chittorgarh district to North east, Kota district
        and Jhalawar district to east and Pratapgarh District, and Ratlam District to the south.
        It is part of Ujjain Division.
      </p>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d931454.9621761997!2d75.367938!3d24.224427!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39642ea9db15e09f%3A0x89a3e5ea4399695b!2sMandsaur%2C%20Madhya%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1708586315798!5m2!1sen!2sus"
        width="600" height="450" style={{border: 0}}allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
      <img src={mdsInWorld} alt="Mandsaur in world" />
      <img src={mdsInMP} alt="Mandsaur in Madhya Pradesh" />
    </div>
  );
}

export default function Home(){
  return(
    <>
      <Header>
        <h1>
          Welcome <em>to</em> <span className="text-red-500">Mandsaur!</span>
        </h1>
      </Header>

      <GeneralInfo />

      <Geography />
    </>
  );
}
