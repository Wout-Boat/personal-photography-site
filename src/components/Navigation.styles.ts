import styled from "styled-components";

export const NavigationStyles = styled.div`
  
  padding-top: 10px;
  padding-bottom: 10px;
  p {
    padding-top: 25px;
    font-size: 1rem;
    font-family: 'Open Sans', sans-serif;
    text-align: center;
  }

  p:hover {
    transition: all .2s ease-in-out;
    font-size: 1.2rem;
  }
  
  a {
    
    color: rgba(234, 234, 234, 0.81); /* blue colors for links too */
    text-decoration: inherit; /* no underline */
  }
  
  .column{
    float: left;
    width: 50%;
  }

  .column{
    float: right;
    width: 50%;
  }

  .row:after {
    content: "";
    display: table;
    clear: both;
  }


`
