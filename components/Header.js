import headerStyles from '../styles/Header.module.css'
import { Box, Heading, Text} from '@chakra-ui/react'

const Header = () => {
  return (
    <Box>
      <Heading className={headerStyles.title} unselectable="on">
            <span>Fire</span>News
      </Heading>
      <Text className={headerStyles.description} mb="4">Keep up to date with the latest news</Text>
    </Box>
  )
}
export default Header