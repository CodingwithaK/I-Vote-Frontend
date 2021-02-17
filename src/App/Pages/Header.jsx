import React from 'react'
import { useScrollSection } from "react-scroll-section"
import {HeaderWrapper, HeaderButton, HeaderLogoImg } from '../AppStyles'
import redLogo from '../../assets/images/logo.png'
import blackLogo from '../../assets/images/black_logo.png'
export default function Header({iw,ih, sp }) {
	const missionSection = useScrollSection('Mission');
	const quizSection = useScrollSection('Quiz');
	const contactSection = useScrollSection('Contact');
	const onHome = sp < ih - 20

return(
    <HeaderWrapper 
		iw={iw}>

        <HeaderLogoImg src={ sp < 520? redLogo : blackLogo}/>

        <HeaderButton 
			iw={iw}
			onClick={missionSection.onClick}
			selected={missionSection.selected}
			onHome={onHome}>
				Our Mission
		</HeaderButton>
        <HeaderButton 
			iw={iw}
			onClick={quizSection.onClick}
			selected={quizSection.selected}
			onHome={onHome}>
				Quiz
		</HeaderButton>

		<HeaderButton 
			iw={iw}
			onClick={contactSection.onClick}
			selected={contactSection.selected}
			onHome={onHome}>
				Contact
		</HeaderButton>

        <HeaderButton iw={iw}>
			Logout
		</HeaderButton>

    </HeaderWrapper>
  
)

}



