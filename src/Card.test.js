import { render } from '@testing-library/react';
import Card from './Card';

test('renders without crashing', () => {
  render(<Card />);
});

test('matches snapshot', () => {
  const {asFragment} = render(<Card />);
  expect(asFragment()).toMatchSnapshot();
});