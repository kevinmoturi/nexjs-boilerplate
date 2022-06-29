import { useRouter } from 'next/router'
import Layout from '../../components/organisms/Layout/index'
import instance from '../../utils/instance'

const getCatBreeds = async () => {
    try {
      let response = await instance.get('breeds?limit=20');
      return response?.data;
    } catch (error) {
      throw error;
    }
  };

const Cat = (props: any) => {
console.log(props.breeds);
  const router = useRouter()
  const { id } = router.query

    return (
        <Layout>
            <p className='text-white'>Cat Breed: {id}</p>
        </Layout>
    )
}

export async function getServerSideProps() {
    let breeds = await getCatBreeds();
    // let breeds = await getCatBreeds();
    // let breeds = await getCatBreeds();
    // let breeds = await getCatBreeds();
    // let breeds = await getCatBreeds();
    return {
      props: {
        breeds
      }
    }
  };

export default Cat