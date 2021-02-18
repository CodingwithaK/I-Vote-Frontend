import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { ScrollingProvider, Section } from "react-scroll-section";
import { AppDiv } from './AppStyles';

import Header from './Pages/Header';
import Homepage from './Pages/Homepage'
import Quiz from './Pages/Quiz'
import Mission from './Pages/Mission'
import Contact from './Pages/Contact'

function App () {
  
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
	const [innerHeight, setInnerHeight] = useState(window.innerHeight);
	const [scrollPosition, setScrollPosition] = useState(window.scrollY);

	useEffect(() => {
		const updateDimmensions = () => {
			setInnerWidth(window.innerWidth);
			setScrollPosition(window.scrollY);
			setInnerHeight(window.innerHeight);


    }
    window.addEventListener("resize", updateDimmensions);
		window.addEventListener("scroll", updateDimmensions);
		return () => {
			window.removeEventListener("resize", updateDimmensions);
			window.removeEventListener("scroll", updateDimmensions);
		};
  })
    

  return (
   
    <Router>
			<AppDiv>
				<ScrollingProvider>
					<Section id='Header'>
					<Header iw={innerWidth} ih={innerHeight} sp={scrollPosition}/>
					</Section>
					<Section id='Home'>
						<Homepage iw={innerWidth} ih={innerHeight} sp={scrollPosition}/>
					</Section>

					<Section id='Mission'>
						<Mission iw={innerWidth} ih={innerHeight}/>
						
					</Section>
					<Section id='Quiz'>
						<Quiz iw={innerWidth} ih={innerHeight} />
						
					</Section>
					<Section id='Contact'>
						<Contact iw={innerWidth} />
						{/* build out */}
					</Section>
				</ScrollingProvider>
			</AppDiv>
		</Router>

     

    
    
  );
}

export default App

