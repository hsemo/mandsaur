
function Header(){
  return(
    <header
      className="flex justify-center items-center text-white text-center text-6xl"
      style={{height: 'calc(100% - 3.5rem)'}}
    >
        <h1>
        Welcome <em>to</em> <span className="text-red-500">Mandsaur!</span>
        </h1>
      </header>
  );
}

export default function Home(){
  return(
    <>
      <Header />
    </>
  );
}
