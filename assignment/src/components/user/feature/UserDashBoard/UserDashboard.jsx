import React, { useEffect } from 'react'
import Carousel from './Carousel'
import Row1 from './Row1'
import Row2 from './Row2'
import Row3 from './Row3'
import axios from 'axios'
import {USER_API_URL} from '../../../../util/API_URL'


const UserDashboard = () => {

  

  return (
  <>
    <div className="container-fluid">
      {/*  Owl carousel */}
      <Carousel />
      {/*  Row 1 */}
      <Row1 />
      {/*  Row 2 */}
      <Row2 />
      {/*  Row 3 */}
      <Row3 />
    </div>
  </>

  )
}

export default UserDashboard