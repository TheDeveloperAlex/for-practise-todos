import { createGlobalStyle} from "styled-components"
import styled from 'styled-components';

export const GlobalStyles = createGlobalStyle`

body {
background: ${({ theme }) => theme.bgColor};
/* color: white;  */
color: ${({ theme }) => theme.textColor};
transition: all 0.50s linear;
}`


export const Wrapper = styled.div`
.custom-classname.react-toggle .react-toggle-track {
  background-color: grey;
}
 /* .custom-classname.react-toggle:hover .react-toggle-track {
    background-color: grey;
} */
/* .custom-classname.react-toggle--checked:focus .react-toggle-track {
  background-color: grey;
}  */

.material-icons {
    font-size: 12px ;
}

/* .materialIconsWrapper {
    width: 12px;
    height: 12px;
} */
    
    /* .sunIcon {
        font-size: 12px;
    }

    .moonIcon {
        font-size: 12px;
    } */
`