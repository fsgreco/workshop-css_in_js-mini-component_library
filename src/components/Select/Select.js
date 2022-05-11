import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <MainWrapper>

      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
			
      <TheVisibleSelect>
        <AlignedContent>
          {displayedValue} <Icon id="chevron-down" strokeWidth={3} size={16} />
        </AlignedContent>
      </TheVisibleSelect>

    </MainWrapper>
  );
};

export default Select;


/* STYLES */

const MainWrapper = styled.div`
	position: absolute;
	isolation: isolate;
`
const NativeSelect = styled.select`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
	z-index: 2;
`;
const TheVisibleSelect = styled.div`
	/* appearance: none; */
	/* border-style: none; */
	font-size: 1rem;
	padding: 12px 16px;
	border-radius: 8px;
	background-color: ${COLORS.transparentGray15};
	color: ${COLORS.gray700};
	width: max-content;

	${NativeSelect}:focus + & {
		border: 2px solid ${COLORS.primary};
	}
	${NativeSelect}:hover + & {
		color: ${COLORS.black};
	}
`

const AlignedContent = styled.span`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1em;
	z-index:1;
	/* pointer-events: none; */
`