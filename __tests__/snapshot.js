import { render } from '@testing-library/react'
import Hero from "../src/app/ui/Hero"
 
it('renders homepage unchanged', () => {
  const { container } = render(<Hero />)
  expect(container).toMatchSnapshot()
})