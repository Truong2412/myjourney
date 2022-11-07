import { useRouter } from 'next/router'
import TextShower from '../../components/common/TextShower'
import Layout from '../../components/Layout'
const Topic = () => {
  const router = useRouter()
  const { topicId } = router.query

  return (
    <Layout>
        <TextShower text={`About ${topicId}`} />
    </Layout>
  )
}

export default Topic