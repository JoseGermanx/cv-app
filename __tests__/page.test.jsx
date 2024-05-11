import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Hero from "../src/app/ui/Hero"
 
describe('Page', () => {
  it('renders a heading', () => {
    render(<Hero />)
 
    const heading = screen.getByRole('heading', { level: 1 })
 
    expect(heading).toBeInTheDocument()
  })
})