import { render } from '@testing-library/react';
import AutoCardTable from './AutoCardTable';

test('renders without crashing', () => {
  render(<AutoCardTable />);
});

test('matches snapshot', () => {
  const {asFragment} = render(<AutoCardTable />);
  expect(asFragment()).toMatchSnapshot();
});