import SingleProduct from '../../components/SingleProduct';
import { useRouter } from 'next/router';

export default function SingleProductPage({}) {
  const { query } = useRouter();

  return <SingleProduct id={query.id} />;
}
