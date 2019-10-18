import styled from "styled-components"

export const Foot = styled.ul`
    height: 80px;
    background-image: linear-gradient(to right top, #009fff, #0097ff, #008eff, #0085ff, #007cff, #007aff, #0079ff, #0077ff, #007dff, #0082ff, #0087ff, #008cff);
    display: flex;
    justify-content: center;
    padding: 4rem 0;
    color: #E3F0FF;
    
    li {
      text-align: center;
      margin: 20px;
    
      a {
        img {
          height: 40px;
        }
      }
    }
`
