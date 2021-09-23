import styled from "styled-components";

export const DetailViewStyle = styled.div`
  
  .background-fade {
    z-index: 2;
    background-color: rgba(130, 130, 130, 0.81);
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  
  img {
    max-width: 90%;
    max-height: 90%;
    bottom: 0;
    left: 0;
    margin: auto;
    overflow: auto;
    position: fixed;
    right: 0;
    top: 0;
    -o-object-fit: contain;
    object-fit: contain;
  }
`;
