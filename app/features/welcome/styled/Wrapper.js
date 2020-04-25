// @flow

import styled from 'styled-components';
import image from '../../../images/background.jpg';

export default styled.div`
    background: #da121a;
    background-image: url(${image});
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    height: 100vh;
`;
