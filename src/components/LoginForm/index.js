import {Redirect} from 'react-router-dom'
import {Component} from 'react'
import Cookie from 'js-cookie'
import {
  BgContainer,
  Container,
  LoginHeading,
  Form,
  Label,
  Input,
  LoginButton,
  ErrMsg,
} from './styledComponents'

class LoginForm extends Component {
  state = {username: '', password: '', showSubmitError: false, errorMsg: ''}

  onChangeUsername = event => this.setState({username: event.target.value})

  onChangePassword = event => this.setState({password: event.target.value})

  onSubmitSuccess = jwtToken => {
    console.log(jwtToken)

    const {history} = this.props

    Cookie.set('jwt_token', jwtToken, {expires: 30})

    this.setState({showSubmitError: false})

    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  //   onSubmitForm = async event => {
  //     event.preventDefault()

  //     const {username, password} = this.state
  //     const apiUrl = 'https://apis.ccbp.in/login'
  //     const userDetails = {username, password}
  //     const options = {
  //       method: 'POST',
  //       body: JSON.stringify(userDetails),
  //     }

  //     const response = await fetch(apiUrl, options)
  //     const data = await response.json()

  //     if (response.ok === true) {
  //       this.onSubmitSuccess(data.jwt_token)
  //     } else {
  //       this.onSubmitFailure(data.error_msg)
  //     }
  //   }

  onSubmitForm = event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username: 'sai', password: 'sai@2022'}

    if (username === '' || password === '') {
      this.onSubmitFailure('Username or password is invalid')
    } else if (username !== userDetails.username) {
      this.onSubmitFailure('Invalid username')
    } else if (password !== userDetails.password) {
      this.onSubmitFailure("username and password didn't match")
    }
    if (
      username === userDetails.username &&
      password === userDetails.password
    ) {
      this.onSubmitSuccess('jwt_token')
    }
  }

  render() {
    const {username, password, showSubmitError, errorMsg} = this.state
    const jwtToken = Cookie.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    // console.log('hihihi')

    return (
      <BgContainer>
        <Container>
          <LoginHeading>RMA Portal</LoginHeading>
          <Form onSubmit={this.onSubmitForm}>
            <Label htmlFor="username">USERNAME</Label>
            <Input
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={this.onChangeUsername}
            />

            <Label htmlFor="password">PASSWORD</Label>
            <Input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={this.onChangePassword}
            />
            <LoginButton type="submit">Login</LoginButton>
          </Form>
          {showSubmitError && <ErrMsg>*{errorMsg}</ErrMsg>}
        </Container>
      </BgContainer>
    )
  }
}

export default LoginForm
