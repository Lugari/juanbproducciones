import React from 'react';
import {Link} from 'react-router-dom'

import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import CameraIcon from '@mui/icons-material/Camera';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

import '../../styles/HomePage.scss'

const HomePage = () => {
	const popover = (title)=> (
		<Popover id="popover-basic">
		  <Popover.Body as="h5">{title}</Popover.Body>
		</Popover>
	  );

	  const bubleStyle=`@keyframes burbujasAnimation{
		0%{
			bottom: 0;
			opacity: 0;
		}
		30%{
			transform: translateX(30px);
		}
		50%{
			opacity: .4;
		}
		100%{
			bottom: 100vh;
			opacity: 0;
		}
	}`
	  
	  // eslint-disable-next-line no-restricted-globals
	  const burbuja = (size, time) =>(<div className='burbuja' style={{animationIterationCount:15, animationName:'burbujas', width:size,height: size, left: Math.round(Math.random()*screen.width),animationDuration:time,animationDelay:time*Math.random()  }}></div>)

    return (
        <div class="header-container">
			<section class="header-info">
				<h1 className='header-title'>JuanB Carrillo Cano</h1>
				<h2 className='header-subtitle' >D&P MEDIOS AUDIOVISUALES</h2>
			</section>
			<div class="header-imgs">
				<Link to="/audiovisuales"><OverlayTrigger trigger='hover' placement='right' overlay={popover('Audiovisuales')}><VideoLibraryIcon /></OverlayTrigger> </Link>
				<Link to="/fotografía"><OverlayTrigger trigger='hover' placement='right' overlay={popover('Fotografía')}><CameraIcon/></OverlayTrigger></Link>
				<Link to="/memoria"> <OverlayTrigger trigger='hover' placement='right' overlay={popover('Investigación ')}><EmojiObjectsIcon/></OverlayTrigger></Link>
            </div>
			<div class="burbujas">
				{burbuja('70px', `${Math.random()*7+3}s`)}
				{burbuja('50px', `${Math.random()*7+3}s`)}
				{burbuja('60px', `${Math.random()*7+3}s`)}
				{burbuja('20px', `${Math.random()*7+3}s`)}
				{burbuja('80px', `${Math.random()*7+3}s`)}
				{burbuja('60px', `${Math.random()*7+3}s`)}
				{burbuja('50px', `${Math.random()*7+3}s`)}
				{burbuja('40px', `${Math.random()*7+3}s`)}
				{burbuja('30px', `${Math.random()*7+3}s`)}
				{burbuja('30px', `${Math.random()*7+3}s`)}
			</div>
		</div>
    );
}

export default HomePage;
