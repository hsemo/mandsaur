import {Link} from 'react-router-dom';

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
      className="list-none flex flex-col justify-center items-center h-full mt-4"
    >
      {
        links.map(({href, title}) => {
          return(
            <li>
              <a
                className="text-2xl"
                href={href}>{title}</a>
            </li>
          );
      })
      }
    </ul>
  );
}
