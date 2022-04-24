import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  position: relative;
`;

const CardImage = styled.div`
  height: 400px;
  border-radius: 8px;
  width: 400px;
`;

const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

const CardContent = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 20px;
  background-color: white;
  padding: 20px;
  bottom: 0;
`;

const Card = () => {
  return (
    // <StyledCard>
    //   <CardImage>
    //     <CardImg src="https://s3-alpha-sig.figma.com/img/e32c/70d7/947e5fd01b68b75b514b17b19f7e560c?Expires=1648425600&Signature=Ec4cMOjmLEPgccydvZ5sZL1PpIzOG~RENJcaNRApigr4XbT6BfTnaK~4EcPaZxahZTttcolZb71yg5A4uSMizP6ys7DQeS5KJqqS2Dl-B~PHFRxzb7wyM3wKA2tj2GxObiwhbO9IHNF-nJBHS~CmpfoZjZSnOsGZDQ-rNK6KXSkepOqTRkGi~js3peRXcUew21hJEXx8-aWJydvaItE5ZCoko1nE~-iyz9sG9Jwtgvmgh3-LTk0RVr-cZ2i~gs0kTIUo9Vk1uPxXg0xiPsbEoeI2s2sqm9fe94ejpb7eWxsXUpH8nTOsyHyUfs6Gh6PwJ8T-79WWQkbHFrKwkzpiAw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="background" />
    //   </CardImage>
    //   <CardContent>
    //     <div>
    //       <img src="" alt="avatar" />
    //       <span>hoangtu13920@gmail.com</span>
    //     </div>
    //     <div>
    //       <h3>Cosmic</h3>
    //       <span>12.000 LSL</span>
    //     </div>
    //   </CardContent>
    // </StyledCard>
    <div className="flex-col justify-between items-center">
      <div>abc</div>
      <div>abc</div>
      <div>abc</div>
    </div>
  );
};

export default Card;
