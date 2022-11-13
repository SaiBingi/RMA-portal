import {Tab, TabButton} from './styledComponents'

const TabItem = props => {
  const {tabItemDetails, isActive, changeTabItem} = props
  const {tabId, displayText} = tabItemDetails

  const onClickTabItem = () => {
    changeTabItem(tabId)
  }

  return (
    <TabButton onClick={onClickTabItem} isActive={isActive} tabId={tabId}>
      <Tab>{displayText}</Tab>
    </TabButton>
  )
}

export default TabItem
