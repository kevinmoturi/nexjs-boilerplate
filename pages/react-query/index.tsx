import type { NextPage } from 'next'
import Layout from '../../components/organisms/Layout/index'
import  { useQuery, dehydrate, QueryClient } from 'react-query'
import instance from '../../utils/instance'
import BreedCard from '../../components/organisms/BreedCard/index'

const getCatBreeds = async () => {
  try {
    let response = await instance.get('breeds?limit=20');
    return response?.data;
  } catch (error) {
    throw error;
  }
};

const Index: NextPage = (props: any) => {
  // console.log(props.breeds);
  // const { data } = useQuery("catbreeds", getCatBreeds, {
  //   initialData: [],
  //   refetchOnMount: false,
  //   refetchOnWindowFocus: false
  // });
  return (
    <Layout>
      <div className='w-full md:col-span-4'>
        <h1 className='text-xl font-bold my-3 text-white'>React Query Data Fetching Example</h1>
      </div>
      {props.breeds && props.breeds.map((breed: any, i: any) => 
        <BreedCard key={i} breed={breed} url={`/react-query/${breed?.id}`} />
      )}
    </Layout>
  )
}

export async function getServerSideProps() {
  // const queryClient = new QueryClient();
  // await queryClient.prefetchQuery("catbreeds", getCatBreeds)
  let breeds = await getCatBreeds();
  // await queryClient.prefetchQuery("catbreeds", getCatBreeds)
  // await queryClient.prefetchQuery("catbreeds", getCatBreeds)
  // await queryClient.prefetchQuery("catbreeds", getCatBreeds)
  return {
    props: {
      // initialData: dehydrate(queryClient),
      breeds
    }
  }
};

export default Index