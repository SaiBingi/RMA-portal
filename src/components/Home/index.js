import {Component} from 'react'
import {IoSearch} from 'react-icons/io5'
import Loader from 'react-loader-spinner'
import './index.css'
import ReactPaginate from 'react-paginate'

import {
  BgContainer,
  HomeContainer,
  TabsList,
  Search,
  SearchContainer,
  LoadingView,
  FailureViewContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  PaginationContainer,
  ResourcesList,
} from './styledComponents'
import HomeHeader from '../HomeHeader'
import TabItem from '../TabItem'
import ResourceCard from '../ResourceCard'
import ResourceContext from '../../context/ResourceContext'

const tabsList = [
  {
    tabId: 'resource',
    displayText: 'Resources',
  },
  {
    tabId: 'request',
    displayText: 'Requests',
  },
  {
    tabId: 'user',
    displayText: 'Users',
  },
]

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const itemsPerPage = 6

class Home extends Component {
  state = {
    activeTabItem: tabsList[0].tabId,
    searchInput: '',
    offset: 0,
  }

  // Invoke when user click to request another page.
  handlePageClick = ({selected: selectedPage}) => {
    this.setState({
      offset: selectedPage * itemsPerPage,
    })
  }

  changeTabItem = activeTabItem => this.setState({activeTabItem})

  onChangeSearchInput = event =>
    this.setState({searchInput: event.target.value})

  getSearchResults = resourcesList => {
    const {searchInput} = this.state

    const resources = resourcesList.filter(eachResource =>
      eachResource.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return resources
  }

  renderSuccessView = () => (
    <ResourceContext.Consumer>
      {value => {
        const {activeTabItem, offset} = this.state
        const {resourcesList} = value
        const searchResources = this.getSearchResults(resourcesList)

        const filteredResources =
          activeTabItem !== 'resource'
            ? searchResources.filter(
                eachResource => eachResource.tag === activeTabItem,
              )
            : searchResources

        const currentPageData = filteredResources
          .slice(offset, offset + itemsPerPage)
          .map(eachResource => (
            <ResourceCard
              resourceItemDetails={eachResource}
              key={eachResource.id}
            />
          ))

        const pageCount = Math.ceil(filteredResources.length / itemsPerPage)

        return (
          <PaginationContainer>
            <ResourcesList>{currentPageData}</ResourcesList>
            <ReactPaginate
              nextLabel="Next"
              previousLabel="Previous"
              onPageChange={this.handlePageClick}
              pageCount={pageCount}
              containerClassName="pagination"
              pageClassName="page"
              previousLinkClassName="pagination_link_previous"
              nextLinkClassName="pagination_link_next"
              activeClassName="pagination_active"
              disabledClassName="pagination_disabled"
              disabledLinkClassName="pagination_link"
            />
          </PaginationContainer>
        )
      }}
    </ResourceContext.Consumer>
  )

  renderFailureView = () => (
    <FailureViewContainer>
      <FailureImage
        src="https://img.freepik.com/premium-vector/broken-power-plugs-denoting-error_9206-2682.jpg?w=740"
        alt="all-resources-error"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureDescription>
        We are having some trouble processing your request. Please try again.
      </FailureDescription>
    </FailureViewContainer>
  )

  renderLoadingView = () => (
    <LoadingView>
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoadingView>
  )

  renderResources = () => (
    <ResourceContext.Consumer>
      {value => {
        const {apiStatus} = value

        switch (apiStatus) {
          case apiStatusConstants.success:
            return this.renderSuccessView()
          case apiStatusConstants.failure:
            return this.renderFailureView()
          case apiStatusConstants.inProgress:
            return this.renderLoadingView()
          default:
            return null
        }
      }}
    </ResourceContext.Consumer>
  )

  render() {
    const {activeTabItem, searchInput} = this.state

    return (
      <>
        <HomeHeader />
        <BgContainer>
          <HomeContainer>
            <TabsList>
              {tabsList.map(eachTab => (
                <TabItem
                  key={eachTab.tabId}
                  tabItemDetails={eachTab}
                  isActive={activeTabItem === eachTab.tabId}
                  changeTabItem={this.changeTabItem}
                />
              ))}
            </TabsList>
            <SearchContainer>
              <IoSearch />
              <Search
                type="search"
                onChange={this.onChangeSearchInput}
                value={searchInput}
                placeholder="Search"
              />
            </SearchContainer>

            {this.renderResources()}
          </HomeContainer>
        </BgContainer>
      </>
    )
  }
}

export default Home
