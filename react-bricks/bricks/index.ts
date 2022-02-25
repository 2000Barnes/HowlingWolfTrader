import { types } from 'react-bricks/frontend'
import blog from 'react-bricks-ui/blog'
import website from 'react-bricks-ui/website'
import HeroUnit from './MyHeroUnit'

const bricks: types.Brick<any>[] = [
  ...website,
  ...blog,
  HeroUnit, // Example custom brick
  // Put here your other bricks...
]

export default bricks
