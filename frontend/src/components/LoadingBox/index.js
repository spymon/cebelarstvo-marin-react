import {
  LoadingContainer,
  LoadingDots,
  LoadingIconWrapper,
  LoadingImg,
} from './LoadingBoxElement'
import beeIcon from '../../images/bee_icon.png'

export default function LoadingBox() {
  return (
    <LoadingContainer>
      <LoadingIconWrapper>
        <LoadingImg src={beeIcon} />
      </LoadingIconWrapper>
      <LoadingDots>...</LoadingDots>
    </LoadingContainer>
  )
}
