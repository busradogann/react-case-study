import React from 'react';
import Lottie from "react-lottie";
import styled from 'styled-components';

import loading from '../../assets/lotties/loading.json';


const LoadingContainer = styled.div`
  position: absolute;
  z-index: 9999;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(5px);
  background-color: rgba(105, 138, 191, 0.24);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 331px;
    height: 242px;
    background-color: #fff;
    border-radius: 24px;
    box-shadow: 0 2px 40px 0 rgba(8, 8, 39, 0.16);
    
    p {
      margin: 10px 0 0;
      font-size: 16px;
      font-weight: bold;
      letter-spacing: 0.4px;
      text-align: center;
      color: #155ed4;
    }
  }
`


export default function Loading() {
  const options = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <LoadingContainer>
        <div className='wrapper' >
          <Lottie
            options={options}
            height={120}
            width={120}
          />
          <p>GİRİŞ YAPILIYOR...</p>
        </div>
      </LoadingContainer>
    </>
  );
}
