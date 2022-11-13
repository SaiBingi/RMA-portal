import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

import Cookie from 'js-cookie'
import {
  HeaderContainer,
  PageIcon,
  IconButton,
  ProfileImg,
  ProfileButton,
  LogoutButton,
} from './styledComponents'

class AddItemPageHeader extends Component {
  state = {showLogout: false}

  onClickLogout = props => {
    Cookie.remove('jwt_token')

    const {history} = props

    history.replace('/login')
  }

  showPopup = () =>
    this.setState(prevState => ({showLogout: !prevState.showLogout}))

  render() {
    const {showLogout} = this.state

    return (
      <HeaderContainer>
        <Link to="/">
          <IconButton>
            <PageIcon
              src="https://nxtwave.imgix.net//logos/Nxtwave_90_90.png?q=80&auto=format%2C+compress"
              alt="profile-icon"
            />
          </IconButton>
        </Link>
        <ProfileButton showLogout={showLogout}>
          <ProfileImg
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3n-NGpkJQaQ2jwb5GFP7vIWS7PdlDtFeydg&usqp=CAU"
            alt="profile"
            onClick={this.showPopup}
          />
          {showLogout && (
            <Link to="/login">
              <LogoutButton onClick={this.onClickLogout}>Logout</LogoutButton>
            </Link>
          )}
        </ProfileButton>
      </HeaderContainer>
    )
  }
}

export default withRouter(AddItemPageHeader)
