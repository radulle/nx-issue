import { render } from '@testing-library/react';

import NxIssueLib from './nx-issue-lib';

describe('NxIssueLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NxIssueLib />);
    expect(baseElement).toBeTruthy();
  });
});
