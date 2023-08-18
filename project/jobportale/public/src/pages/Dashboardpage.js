import React from 'react'
import Navbar1 from '../components/Navbar'
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import PostJob from '../components/Postjob';
import appliedjob from '../components/appliedjob';

import { BrowserRouter as Router,Routes, Route,} from 'react-router-dom';
export default function Dashboardpage() {
  return (
  <React.Fragment>
   <Cards/>
  </React.Fragment>
  );
}
