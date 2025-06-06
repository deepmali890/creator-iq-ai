"use client";

import React from "react";
import styled, { keyframes } from "styled-components";

const Loader = () => {
  return (
    <Wrapper>
      <BlurBackground />
      <Blob>
        <InnerGlow />
        <Pulse />
        <Shimmer />
      </Blob>
    </Wrapper>
  );
};

export default Loader;

// ======== Animations ========

const morph = keyframes`
  0% { border-radius: 45% 55% 60% 40% / 40% 60% 50% 50%; }
  50% { border-radius: 60% 40% 40% 60% / 50% 50% 60% 40%; }
  100% { border-radius: 45% 55% 60% 40% / 40% 60% 50% 50%; }
`;

const shimmer = keyframes`
  0% { transform: rotate(0deg); opacity: 0.6; }
  50% { opacity: 1; }
  100% { transform: rotate(360deg); opacity: 0.6; }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.1); opacity: 0.1; }
`;

// ======== Styled Components ========

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background: #0f0f1b;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

// Frosted Glass Blur Layer
const BlurBackground = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(15, 15, 27, 0.6);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  z-index: 0;
`;

const Blob = styled.div`
  position: relative;
  width: 140px;
  height: 140px;
  background: linear-gradient(135deg, #7ec8f8, #4db6b6, #8e44ad);
  border-radius: 50%;
  animation: ${morph} 5s infinite ease-in-out;
  box-shadow:
    0 0 50px rgba(126, 200, 248, 0.7),
    0 0 100px rgba(77, 182, 182, 0.6),
    0 0 150px rgba(142, 68, 173, 0.5);
  z-index: 1;
`;

const InnerGlow = styled.div`
  position: absolute;
  top: 12%;
  left: 12%;
  width: 76%;
  height: 76%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.4), transparent);
  border-radius: 50%;
  animation: ${pulse} 3s infinite ease-in-out;
  z-index: 2;
`;

const Pulse = styled.div`
  position: absolute;
  top: -35%;
  left: -35%;
  width: 170%;
  height: 170%;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(126, 200, 248, 0.2), transparent 70%);
  filter: blur(35px);
  animation: ${pulse} 4.5s infinite ease-in-out;
  z-index: 0;
`;

const Shimmer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    rgba(255, 255, 255, 0.25),
    transparent,
    rgba(255, 255, 255, 0.15)
  );
  animation: ${shimmer} 7s linear infinite;
  z-index: 3;
`;
