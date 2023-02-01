import React from 'react';
import {Link} from "react-router-dom";
//import { Link } from 'react-router-dom';
import {Stack} from "@mui/material";

import Logo from '../assets/images/Logo.png';

const Navbar = () => {

  return (
    <Stack>
      {/* <Link>
        <img src='https://github.com/chandrashekhar-meshram/react-fitness-app/blob/react-projects/src/assets/images/Logo.png' />
      </Link> */}
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPunE1gn8aCL6sUk8vm1sggk2Qd4GCfd5kUhq0Zs8Oj3W3GDHMJ6l7acZu3OsHu2SCFDE&usqp=CAU' alt='navbar'/>
    </Stack>
  )
}

export default Navbar;