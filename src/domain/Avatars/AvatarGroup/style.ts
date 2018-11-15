import React from 'react'
import styled, { css } from 'styled-components'
import { Variables } from '../../../common'

type AvatarGroupSize = 'small' | 'medium'

interface IStyledAvatarGroupWrapperProps {
  avatarCount: number,
  avatarGroupSize: AvatarGroupSize
}

interface IStyledAvatarProps {
  avatarIndex: number,
  avatarGroupSize: AvatarGroupSize,
  isInitials: boolean,
  isOverflow: boolean
}

const avatarSizeMap = {
  small: {
    radius: 24,
    overlap: 4,
    fontSize: 10
  },
  medium: {
    radius: 40,
    overlap: 10,
    fontSize: 16
  }
}

function radiusForSize (props: { avatarGroupSize: AvatarGroupSize }): number {
  return avatarSizeMap[props.avatarGroupSize].radius
}

function overlapForSize (props: { avatarGroupSize: AvatarGroupSize }): number {
  return avatarSizeMap[props.avatarGroupSize].overlap
}

function fontsizeForSize (props: { avatarGroupSize: AvatarGroupSize }): number {
  return avatarSizeMap[props.avatarGroupSize].fontSize
}

function totalWidth (props: IStyledAvatarGroupWrapperProps): number {
  return (props.avatarCount - 1) * (radiusForSize(props) - overlapForSize(props)) + radiusForSize(props)
}

function avatarOffset (props: IStyledAvatarProps): number {
  if (props.avatarIndex === 0) {
    return 0
  }

  const avatarSpacing = radiusForSize(props) - overlapForSize(props)

  return props.avatarIndex * avatarSpacing
}

const StyledAvatarGroupWrapper = styled.div<IStyledAvatarGroupWrapperProps>`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  
  height: ${radiusForSize}px;
  width: ${totalWidth}px;
`

const StyledAvatar = styled.div<IStyledAvatarProps>`
  background-color: ${Variables.Color.n200};
  border: 1px solid ${props => (props.isOverflow || props.isInitials) ? Variables.Color.n400 : Variables.Color.n100};
  border-radius: 50%;
  color: ${props => props.isOverflow ? Variables.Color.n700 : Variables.Color.i400};
  overflow: hidden;
  
  font-size: ${fontsizeForSize}px;
  font-weight: 600;
  text-transform: uppercase;
  user-select: none;
  
  align-items: center;
  display: flex;
  justify-content: center;
  
  position: absolute;
  height: ${radiusForSize}px;
  width: ${radiusForSize}px;
  left: ${avatarOffset}px;
`

export {
  AvatarGroupSize,
  StyledAvatarGroupWrapper,
  StyledAvatar
}
