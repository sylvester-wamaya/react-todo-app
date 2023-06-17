
import { NavLink } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';


function NavBar() {
    const [dropdown, setDropdown] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const handler = (event) => {
          if (dropdown && ref.current && !ref.current.contains(event.target)) {
            setDropdown(false);
          }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", handler);
          };
      }, [dropdown]);

  return (
    <nav>
    <ul className='nav-bar'>
      <li className='nav-item' ><NavLink to='/'>Home</NavLink></li>
      <li className='nav-item'><NavLink  to='about'>About</NavLink></li>
      <li ref={ref}>
        <button className='nav-item' onClick={()=>setDropdown((prev)=> !prev)}>
          Services <span>&#8595;</span>
        </button >
        {dropdown && (<ul className='dropdown'>
          <li> <NavLink to='design'>Design</NavLink></li>
          <li><NavLink to='development'>Development</NavLink></li>
        </ul>)} 
      </li>
    </ul>
  </nav>
  )
}

export default NavBar
