import React from 'react'
import { useScrollSection } from "react-scroll-section"
import {HeaderWrapper, HeaderButton, HeaderLogoImg } from '../AppStyles'
import logo from '../../assets/images/logo.png'
   
export default function Header({iw,ih, sp }) {
	const missionSection = useScrollSection('Mission');
	const quizSection = useScrollSection('Quiz');
	const contactSection = useScrollSection('Contact');
	const onHome = sp < ih - 20

return(
    <HeaderWrapper iw={iw}>

        <HeaderLogoImg src={logo}/>

        <HeaderButton
			onClick={missionSection.onClick}
			selected={missionSection.selected}
			onHome={onHome}>
				Our Mission
		</HeaderButton>
        <HeaderButton
			onClick={quizSection.onClick}
			selected={quizSection.selected}
			onHome={onHome}>
				Quiz
		</HeaderButton>

		<HeaderButton
			onClick={contactSection.onClick}
			selected={contactSection.selected}
			onHome={onHome}>
				Contact
		</HeaderButton>

        <HeaderButton>Logout</HeaderButton>

    </HeaderWrapper>
  
)

}



