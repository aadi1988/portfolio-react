import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '..'


afterEach(cleanup);
describe('Header component', () => {
    // baseline test
    it('renders', () => {
        render(<Header
          />);
    });
    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Header
            
          />);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
})