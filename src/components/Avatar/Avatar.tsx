import React from 'react';
import styled from 'styled-components';
import colors from '../../theme/colors';

const ImageContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  position: relative;
  text-align: center;
  padding: 0.5rem;
`;

const StyledImage = styled.img`
  border-radius: 50%;
  width: 140px;
  border: 5px solid ${colors.white};
  box-shadow: 0 3px 16px rgba(0, 0, 0, 0.4);
`;

type Props = {
  /**
   * Image url provided
   */
  imageUrl?: string;
};

const Avatar = ({ imageUrl }: Props) => (
  <ImageContainer>
    <StyledImage src={imageUrl} alt="avatar-image" />
  </ImageContainer>
);

Avatar.defaultProps = {
  imageUrl:
    'https://p.kindpng.com/picc/s/78-785827_user-profile-avatar-login-account-male-user-icon.png',
};

export default Avatar;
