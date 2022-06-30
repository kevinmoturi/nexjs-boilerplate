import type { NextPage } from 'next'
import BreedCard from '../components/organisms/BreedCard/index'
import Layout from '../components/organisms/Layout/index'
import { useSelector, useDispatch } from "react-redux"
import {wrapper} from '../redux/store'
import { increment } from '../redux/breeds/breedSlice';
import { fetchBreedsData } from '../redux/breeds/breedActions';

const Home: NextPage = (props: any) => {
  const dispatch = useDispatch()
  const { count, breeds } = useSelector((state: any) => state.breeds)
  return (
    <Layout>
      <div className='w-full flex flex-row justify-between items-center mb-6'>
        <h1 className='text-gray-900 dark:text-white'>Count: {count}</h1>
        <button className='px-8 py-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded' onClick={() => dispatch(increment())}>Add</button>
      </div>
      <div className='w-full grid md:grid-cols-4 grid-cols-1 gap-5'>
        {breeds && breeds.map((breed: any, i: any) => 
          <BreedCard key={i} breed={breed} url={`/breeds/${breed?.name}`} />
        )}
      </div>
    </Layout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch(fetchBreedsData());
    return { props: { } };
})

export default Home
