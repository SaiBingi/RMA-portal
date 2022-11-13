import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import NotFound from './components/NotFound'
import AddResourceItemPage from './components/AddResourceItemPage'
import ProtectedRoute from './components/ProtectedRoute'
import ResourceContext from './context/ResourceContext'
import './App.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class App extends Component {
  state = {resourcesList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getResources()
  }

  getResources = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const apiUrl =
      'https://media-content.ccbp.in/website/react-assignment/resources.json'

    const response = await fetch(apiUrl)

    if (response.ok) {
      const data = await response.json()

      const formattedData = data.map(eachResource => ({
        category: eachResource.category,
        description: eachResource.description,
        iconUrl: eachResource.icon_url,
        id: eachResource.id,
        link: eachResource.link,
        tag: eachResource.tag,
        title: eachResource.title,
      }))

      console.log(formattedData)

      this.setState({
        resourcesList: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  addResourceItem = resourcesList => {
    this.setState({resourcesList})
  }

  render() {
    const {resourcesList, apiStatus} = this.state

    return (
      <>
        <ResourceContext.Provider
          value={{
            resourcesList,
            apiStatus,
            addResourceItem: this.addResourceItem,
          }}
        >
          <Switch>
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute
              exact
              path="/add-resource-item"
              component={AddResourceItemPage}
            />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </ResourceContext.Provider>
      </>
    )
  }
}

export default App
