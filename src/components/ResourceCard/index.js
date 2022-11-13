import {
  ResourceItem,
  ResourceTitle,
  ResourceIcon,
  ResourceCategory,
  TitleCategory,
  IconTitleCategory,
  ResourceItemLink,
  ResourceItemDescription,
} from './styledComponents'

const ResourceCard = props => {
  const {resourceItemDetails} = props
  const {
    title,
    iconUrl,
    link,
    description,
    category,
    // tag,
    // id,
  } = resourceItemDetails

  return (
    <ResourceItem>
      <IconTitleCategory>
        <ResourceIcon src={iconUrl} alt="resource-icon" />
        <TitleCategory>
          <ResourceTitle>{title}</ResourceTitle>
          <ResourceCategory>{category}</ResourceCategory>
        </TitleCategory>
      </IconTitleCategory>
      <ResourceItemLink href={link} target="_blank">
        {link}
      </ResourceItemLink>
      <ResourceItemDescription>{description}</ResourceItemDescription>
    </ResourceItem>
  )
}

export default ResourceCard
