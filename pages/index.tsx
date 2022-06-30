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
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Add</button>
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
