import styled from 'styled-components';
import { dynamicPadding, maroon, smoke, burnt, orange, white, stone } from "../assets/utils";



 export const AppDiv = styled.div `
    background-color: ${smoke};
	min-height: 100vh;
	text-align: center;
`


export const HomeDiv = styled.div `

    height:90vh;
    background-color: ${stone};
    background-image: url(${({img})=> img}) ;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    padding-left: ${({ iw }) => dynamicPadding(iw) + "px"};
    padding-right: ${({ iw }) => dynamicPadding(iw) + "px"};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;

    h1 {
        font-size: 6rem;
        margin-top: 15rem;
        margin-bottom: 1rem;
    }

    h2 {
        margin-top: 0;
        font-style: italic;
    }

    img {
        max-width: 100%;
        margin-bottom: 10px;
    }
`
export const HeaderWrapper = styled.div `
background-color: transparent;
   
    position: fixed;
    width: ${({ iw }) => iw - 40 + "px"};
    text-align: ${({ iw }) => iw > 600 ? `right`: `center` };
    padding: 20px 20px;
    text-transform: uppercase;
    z-index: 1;

`

export const HeaderLogoImg = styled.img `
    left: 0;
    top: 0;
   
    position: fixed;
    width: 70px;
    height: 75px;
   
  
`



export const HeaderButton = styled.a `

    width: 100px;
    display: ${({iw})=> iw >1200 ? `inline-block`: ``};
    cursor: pointer;
    text-align: center;
	
	
	line-height: 1.4;
	padding: 0.55em;
	text-decoration: none;
  
	&:after,
	&:before {
		backface-visibility: hidden;
		border: 1px solid rgba(255, 0, 255, 0);
		bottom: 0px;
		content: " ";
		display: block;
		margin: 0 auto;
		position: relative;
		transition: all 280ms ease-in-out;
		width: 0;
	}

	&:hover:after,
	&:hover:before {
		backface-visibility: hidden;
		border-color: black;
		transition: width 350ms ease-in-out;
		width: 80px;
	};
    `

    export const MissionDiv = styled.div `
        height:90vh;
        background-color: ${burnt};
        padding-left: ${({ iw }) => dynamicPadding(iw) + "px"};
        padding-right: ${({ iw }) => dynamicPadding(iw) + "px"};
        display:flex;
        flex-direction:column;
        align-items: center;
        // justify-content: space-between;
       
        color: white;

        h1 {
       
            font-size: 6rem;
           
            
        }

        h2 {
            font-style: italic;
        }

        
        ` 
        export const QuizDiv = styled.div `
        height:90vh;
        background-color: ${maroon};
        padding-left: ${({ iw }) => dynamicPadding(iw) + "px"};
        padding-right: ${({ iw }) => dynamicPadding(iw) + "px"};
        display:flex;
        flex-direction:column;
        align-items: center;
        // justify-content: space-between;
       
        color: white;

        h1 {
       
            font-size: 6rem;
           
            
        }

        h2 {
            font-style: italic;
        }
        
        
        `
        export const LoadingDiv = styled.div`
        display: flex;
        padding: 20px 20px;
        h1 {
            font-style: italic;
        }
        `

        export const StyledSpinner = styled.svg`
        animation: rotate 1s linear infinite;
        margin: 90px 50px;
        width: 100px;
        height: 100px;

        & .path {
            stroke: #5652bf;
            stroke-linecap: round;
            animation: dash 1.5s ease-in-out infinite;
        }

        @keyframes rotate {
            100% {
            transform: rotate(360deg);
            }
        }
        @keyframes dash {
            0% {
            stroke-dasharray: 1, 150;
            stroke-dashoffset: 0;
            }
            50% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -35;
            }
            100% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -124;
            }
        }
        `
        export const FormDiv = styled.div `

        `
        export const CardDiv = styled.div `
        
        `