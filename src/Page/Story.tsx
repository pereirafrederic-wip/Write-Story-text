import {StoryContext } from '../Context/StoryContext'

const Story = () => {
  return <StoryContext.Consumer>
  {
    ({ indexActif,  chapitres}) => {
      if(!indexActif) {
        return <h1>{'no chapter'}</h1>
      }
      return <h1>You need to sign in</h1>
    }
  }
  </StoryContext.Consumer>
}

export default Story;