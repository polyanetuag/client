import styled, { css } from 'styled-components'

import { LogoProps } from '.'

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color }) => css`
    color: ${theme.colors[color!]}; //o valor existe e sempre irá existir
  `}
`
