import Pagination from '../../components/Pagination';
import Products from '../../components/Products';
import { useRouter } from 'next/router';

export default function ProductsPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  return (
    <div>
      <Pagination page={page || 1} />
      <Products page={page || 1} />
      <Pagination page={page || 1} />
    </div>
  );
}
