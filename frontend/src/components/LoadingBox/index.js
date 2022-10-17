import {
  LoadingContainer,
  LoadingDots,
  LoadingIconWrapper,
  LoadingImg,
} from './LoadingBoxElement'
import beeIcon from '../../images/bee_icon.png'

export const LoadingBox = () => {
  return (
    <LoadingContainer>
      <LoadingIconWrapper>
        <LoadingImg src={beeIcon} />
      </LoadingIconWrapper>
      <LoadingDots>...</LoadingDots>
    </LoadingContainer>
  )
}
