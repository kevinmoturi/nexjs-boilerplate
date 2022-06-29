import { useRouter } from 'next/router'
import Layout from '../../components/organisms/Layout/index'

const Cat = () => {
  const router = useRouter()
  const { id } = router.query

    return (
        <Layout>
            <p>Cat Breed: {id}</p>
        </Layout>
    )
}

export default Cat