import { Link } from 'react-router-dom'
import React from 'react'
import landingImg from '../assets/music-beat.gif'
import Card from 'react-bootstrap/Card';
import feature1 from '../assets/mang.png'
import feature2 from '../assets/nodes.png'
import feature3 from '../assets/cata.png'


const Landing = () => {
  return (
    <div style={{ paddingTop: '100px' }} className='container'>
      {/* landing head */}
      <div className="row align-items-center">
        <div className="col-lg-5">
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{ textAlign: 'justify' }} className='mt-3'>Media Player App will allow users to add or remove their uploaded viedos from youTube and also allow them to arrange it in different catagories by drag and drop. User can also have the provision to manage their watch history as well. What are you waiting for, let start exploring our site!! </p>
          <Link to={'/home'} className='btn btn-info'>Get Started!!</Link>
        </div>
        <div className='col'></div>
        <div className="col-lg-6">
          <img className='img-fluid ms-5' src={landingImg} alt="No image" />
        </div>
      </div>
      {/* features */}
      <div>
        <h3 className="text-center">Features</h3>
        <div className="row mt-5">
          <div className="col-lg-4">
            <Card className='p-2' style={{ width: '20rem' }}>
              <Card.Img height={'250px'} variant="top" src={feature1} />
              <Card.Body>
                <Card.Title>Managing Viedos</Card.Title>
                <Card.Text>
                  Users can upload, view and remove the videos.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card className='p-2' style={{ width: '20rem' }}>
              <Card.Img height={'250px'} variant="top" src={feature2} />
              <Card.Body>
                <Card.Title>Catagories Videos</Card.Title>
                <Card.Text>
                  Users can catogarise the videos by drag and drop features.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card className='p-2' style={{ width: '20rem' }}>
              <Card.Img height={'250px'} variant="top" src={feature3} />
              <Card.Body>
                <Card.Title>Managing Viedo History</Card.Title>
                <Card.Text>
                  Users can manage the watch history of all videos.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      {/* youtube */}
      <div className="my-5 row align-items-center border rounded p-5">
        <div className="col-lg-5">
          <h3 className="text-warning">Simple Fast and Powerful</h3>
          <p style={{ textAlign: 'justify' }}> <span className='fs-5'>Play Everything:</span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis sint assumenda incidunt voluptate dolores repellat! Expedita magnam, eveniet excepturi, quo sunt eius fugiat at ut autem odit itaque distinctio eum?</p>
          <p style={{ textAlign: 'justify' }}> <span className='fs-5'>Catagorise Video:</span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis sint assumenda incidunt voluptate dolores repellat! Expedita magnam, eveniet excepturi, quo sunt eius fugiat at ut autem odit itaque distinctio eum?</p>
          <p style={{ textAlign: 'justify' }}> <span className='fs-5'>PManaging History:</span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis sint assumenda incidunt voluptate dolores repellat! Expedita magnam, eveniet excepturi, quo sunt eius fugiat at ut autem odit itaque distinctio eum?</p>

        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/TuNQGOOr-Sk?si=G-Dm70HnNxW4rP83" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>

      </div>
    </div>
  )
}

export default Landing