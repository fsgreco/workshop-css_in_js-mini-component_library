import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
	const iconSize = size === "small" ? 16 : 24;
  return (
    <MainWrapper measures={{ width,size }}>
      <VisuallyHidden>{label}</VisuallyHidden>
			<TheIconWrapper>
      	<Icon id={icon} size={iconSize} />
			</TheIconWrapper>
      <TextInput placeholder={placeholder} type="text" />

    </MainWrapper>
  );
};

export default IconInput;

/* STYLES */

const MainWrapper = styled.label`
	--coefix: ${({measures}) => measures.size === "small" ? 6 : 9 };
	--width: ${p => p.measures.width }px;

	display: block;
	isolation: isolate;
	position: relative;
`

const TheIconWrapper = styled.div`
  position: absolute;
  top: 2px;
  left: 0;
  z-index: 99;
  
`;
const TextInput = styled.input`
	width: var(--width);
	height: calc( var(--coefix) * 4px );
	border: 0;
	border-bottom: 1px solid ${COLORS.black};
	padding: 5px 5px 5px 34px;

	position: relative;
	z-index: 1;
`