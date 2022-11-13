import React from 'react'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const ResourceContext = React.createContext({
  resourcesList: [],
  apiStatus: apiStatusConstants.initial,
  addResourceItem: () => {},
})

export default ResourceContext
