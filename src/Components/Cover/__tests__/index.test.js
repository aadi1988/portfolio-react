import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Cover from '../'

afterEach(cleanup)

describe('Cover is rendering', () => {
  it('renders', () => {
    render(<Cover />);
  });

  it('renders', () => {
    const { asFragment } = render(<Cover />)
    expect(asFragment()).toMatchSnapshot()
  });
});