import styled from 'styled-components';

export const Grid = styled.div`
     margin: 80px;
`;

export const Row = styled.div`
   display: flex;
   margin-top: 30px;
`;

const media = {
    xs: (styles) => `
    @media only screen and (max-width: 480px){
        ${styles}
    }
    `
}

export const Col = styled.div`
   flex: ${(props) => props.size};
   ${(props) => props.collapse && media[props.collapse](`
          display: block;
   `      
   )}
`;