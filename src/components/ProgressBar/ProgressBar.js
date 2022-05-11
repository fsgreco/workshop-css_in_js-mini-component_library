/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
	const heights = new Map([
		["small", "8px" ], 
		["medium", "12px" ], 
		["large", "24px"]
	]);

  return (
    <TheBar 
			role="progressbar" 
			aria-valuenow={value} 
			ht={ heights.get(size) }
		>
      <InternalProgress length={value}>
				<VisuallyHidden>{value}</VisuallyHidden>
			</InternalProgress>
    </TheBar>
  );
};

export default ProgressBar;

/* STYLES */

const TheBar = styled.div`
	border-radius: 8px;
  height: ${p => p.ht};
	/* Magic number here, p.ht === '24px' means it's "large" - ref heights Map above: */
	padding: ${p => p.ht === '24px' ? '4px' : '0px'};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const ProgressBase = styled.div`
  height: 100%;
  text-align: center;
  background-color: ${COLORS.primary};
  color: ${COLORS.primary};
`

const InternalProgress = styled(ProgressBase)`
  border-radius: 8px ${p => p.length === 100 ? '8px' : '0px 0px' } 8px;
  width: ${(p) => p.length}%;
`
