import {Component} from 'react'
import {MdExpandLess} from 'react-icons/md'
import {Link} from 'react-router-dom'
import ResourceContext from '../../context/ResourceContext'

import AddItemPageHeader from '../AddItemPageHeader'
import {
  BgContainer,
  AddItemContainer,
  Image,
  IconAndText,
  LessThanIcon,
  UsersText,
  FormContainer,
  Form,
  Heading,
  InputContainer,
  Label,
  Input,
  LargeInput,
  Create,
  ErrorMsg,
  SuccessMsg,
} from './styledComponents'

const errorMsg = '*This field is required'
const descErrMessage = '*Should not exceed more than 60 characters'
const successMsg = 'Resource item added successfully!'

class AddResourceItemPage extends Component {
  state = {
    itemName: '',
    link: '',
    resourceName: '',
    description: '',
    itemErrMsg: '',
    linkErrMsg: '',
    resourceErrMsg: '',
    descErrMsg: '',
    submitMsg: '',
  }

  onSubmitForm = async (resourcesList, addResourceItem) => {
    let isValidated = true

    const {itemName, link, resourceName, description} = this.state

    if (itemName === '') {
      isValidated = false
      this.setState({itemErrMsg: errorMsg})
    }
    if (link === '') {
      isValidated = false
      this.setState({linkErrMsg: errorMsg})
    }
    if (resourceName === '') {
      isValidated = false
      this.setState({resourceErrMsg: errorMsg})
    }
    if (description === '') {
      isValidated = false
      this.setState({descErrMsg: errorMsg})
    }
    if (description.length > 60) {
      isValidated = false
      this.setState({descErrMsg: descErrMessage})
    }

    if (isValidated) {
      const apiUrl =
        'https://media-content.ccbp.in/website/react-assignment/add_resource.json'
      const response = await fetch(apiUrl)
      if (response.status === 200) {
        const data = await response.json()
        console.log(response)
        console.log(data)

        const id = resourcesList.length + 1
        const tag = 'user'
        const category = itemName
        const title = resourceName
        const iconUrl =
          'https://cdn.iconscout.com/icon/free/png-256/dropbox-141-498432.png'

        addResourceItem([
          ...resourcesList,
          {id, tag, category, title, link, description, iconUrl},
        ])

        this.setState({
          itemName: '',
          link: '',
          resourceName: '',
          description: '',
          submitMsg: successMsg,
        })
      } else {
        console.log(response.status)
      }
    }
  }

  onBlurItemName = event => {
    if (event.target.value === '') {
      this.setState({itemErrMsg: errorMsg})
    } else {
      this.setState({itemName: event.target.value})
    }
  }

  onChangeItemName = event => {
    this.setState({itemName: event.target.value, submitMsg: ''})

    if (event.target.value !== '') {
      this.setState({itemErrMsg: ''})
    }
  }

  onBlurLink = event => {
    if (event.target.value === '') {
      this.setState({linkErrMsg: errorMsg})
    } else {
      this.setState({link: event.target.value})
    }
  }

  onChangeLink = event => {
    this.setState({link: event.target.value, submitMsg: ''})

    if (event.target.value !== '') {
      this.setState({linkErrMsg: ''})
    }
  }

  onBlurResourceName = event => {
    if (event.target.value === '') {
      this.setState({resourceErrMsg: errorMsg})
    } else {
      this.setState({resourceName: event.target.value})
    }
  }

  onChangeResourceName = event => {
    this.setState({resourceName: event.target.value, submitMsg: ''})

    if (event.target.value !== '') {
      this.setState({resourceErrMsg: ''})
    }
  }

  onBlurDescription = event => {
    if (event.target.value === '') {
      this.setState({descErrMsg: errorMsg})
    } else {
      this.setState({description: event.target.value})
    }
  }

  onChangeDescription = event => {
    this.setState({description: event.target.value, submitMsg: ''})

    if (event.target.value !== '') {
      this.setState({descErrMsg: ''})
    }
  }

  render() {
    const {
      itemName,
      link,
      resourceName,
      description,
      itemErrMsg,
      linkErrMsg,
      resourceErrMsg,
      descErrMsg,
      submitMsg,
    } = this.state

    return (
      <ResourceContext.Consumer>
        {value => {
          const {resourcesList, addResourceItem} = value

          return (
            <>
              <AddItemPageHeader />
              <BgContainer>
                <AddItemContainer>
                  <Link to="/" style={{'text-decoration': 'none'}}>
                    <IconAndText>
                      <LessThanIcon>
                        <MdExpandLess />
                      </LessThanIcon>
                      <UsersText>Users</UsersText>
                    </IconAndText>
                  </Link>
                  <FormContainer>
                    <Heading>Item Details</Heading>
                    <Form
                      onSubmit={event => {
                        event.preventDefault()
                        this.onSubmitForm(resourcesList, addResourceItem)
                      }}
                    >
                      <InputContainer>
                        <Label htmlFor="item-name">ITEM NAME</Label>
                        <Input
                          id="item-name"
                          type="text"
                          value={itemName}
                          onBlur={this.onBlurItemName}
                          onChange={this.onChangeItemName}
                          placeholder="Enter Item name"
                        />
                        <ErrorMsg>{itemErrMsg}</ErrorMsg>
                      </InputContainer>
                      <InputContainer>
                        <Label htmlFor="link">LINK</Label>
                        <Input
                          id="link"
                          type="text"
                          value={link}
                          onBlur={this.onBlurLink}
                          onChange={this.onChangeLink}
                          placeholder="Enter the link"
                          linkActive
                        />
                        <ErrorMsg>{linkErrMsg}</ErrorMsg>
                      </InputContainer>
                      <InputContainer>
                        <Label htmlFor="resource-name">RESOURCE NAME</Label>
                        <Input
                          id="resource-name"
                          type="text"
                          value={resourceName}
                          onBlur={this.onBlurResourceName}
                          onChange={this.onChangeResourceName}
                          placeholder="Enter Resource name"
                        />
                        <ErrorMsg>{resourceErrMsg}</ErrorMsg>
                      </InputContainer>
                      <InputContainer>
                        <Label htmlFor="description">DESCRIPTION</Label>
                        <LargeInput
                          id="description"
                          rows={5}
                          type="text"
                          value={description}
                          onBlur={this.onBlurDescription}
                          onChange={this.onChangeDescription}
                          placeholder="Enter description"
                        />
                        <ErrorMsg>{descErrMsg}</ErrorMsg>
                      </InputContainer>
                      <Create type="submit">CREATE</Create>
                      <SuccessMsg>{submitMsg}</SuccessMsg>
                    </Form>
                  </FormContainer>
                </AddItemContainer>
                <Image src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              </BgContainer>
            </>
          )
        }}
      </ResourceContext.Consumer>
    )
  }
}

export default AddResourceItemPage
