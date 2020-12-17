import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Portfolio from '..'

const portfolio = ["Portfolio" ];

afterEach(cleanup)

describe('Portfolio is rendering', () => {

  it('renders', () => {
    render(<Portfolio currentCategory={portfolio[0]} />);
  });
  it('matches snapshot', () => {
    const { asFragment } = render(<Portfolio currentCategory={portfolio[0]} />)
    expect(asFragment()).toMatchSnapshot()
  })
})