import './Links.css';

const links = [
  {
    href: "https://www.wikiwand.com/en/Mandsaur",
    title: "Mandsaur in Wikiwand"
  },
  {
    href: "https://archaeology.mp.gov.in/contents.aspx?page=district-archaeological-museum-mandsaur&number=FXGMlN7erx96vLdBAbN93w==",
    title: "Museums in Mandsaur"
  },
  {
    href: "https://mandsaur.nic.in/en/tourism/tourist-places/",
    title: "Mandsaur Tours"
  }
];

export default function Links(){
  return(
    <ul
      className="list-none flex flex-col items-center h-full mt-4"
    >
      {
        links.map(({href, title}) => {
          return(
            <li>
              <a
                className="text-[#01c48a] text-2xl relative text-shadow transition-transform duration-200"
                href={href}
                target='_blank'
            >
              {title}
            </a>
            </li>
          );
      })
      }
    </ul>
  );
}
