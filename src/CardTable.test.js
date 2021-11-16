import { render } from '@testing-library/react';
import CardTable from './CardTable';

test('renders without crashing', () => {
  render(<CardTable />);
});

test('matches snapshot', () => {
  const {asFragment} = render(<CardTable />);
  expect(asFragment()).toMatchSnapshot();
});