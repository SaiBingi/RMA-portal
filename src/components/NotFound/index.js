import HomeHeader from '../HomeHeader'
import {
  NotFoundContainer,
  Image,
  Heading,
  Description,
} from './styledComponents'

const NotFound = () => (
  <>
    <HomeHeader />
    <NotFoundContainer>
      <Image
        src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
        alt="not found"
      />
      <Heading>Page Not Found</Heading>
      <Description>
        we&apos;re sorry, the page you requested could not be found.
      </Description>
    </NotFoundContainer>
  </>
)

export default NotFound
