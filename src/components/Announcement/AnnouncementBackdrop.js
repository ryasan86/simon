import styled from 'styled-components';

const AnnouncementBackdrop = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 9998;
  background: transparentize(#000, 0.5);
`;

export default AnnouncementBackdrop;
