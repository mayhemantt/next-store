import Link from 'next/link';
import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';
import DeleteProduct from './DeleteProduct';
import Image from 'next/image';
import AddToCart from './AddToCart';

export default function Product({ product }) {
  return (
    <ItemStyles>
      <Image
        src={product?.photo?.image?.publicUrlTransformed}
        alt={product.name}
        width="300"
        height="400"
      />
      <Title>
        <Link href={`/product/${product.id}`}>
          <a>{product.name}</a>
        </Link>
      </Title>
      <PriceTag>{formatMoney(product.price)}</PriceTag>
      <p
        style={{
          textAlign: 'center',
          // backgroundColor: 'red',
          marginRight: 'auto',
          marginLeft: '10%',
          fontSize: '2rem',
          // eslint-disable-next-line prettier/prettier
        }}>
        {product.description}
      </p>
      <div className="buttonList">
        <Link
          href={{
            pathname: 'update',
            query: {
              id: product.id,
            },
          }}>
          Edit ✏️
        </Link>
        <AddToCart id={product.id} />
        <DeleteProduct id={product.id}>Delete</DeleteProduct>
      </div>
    </ItemStyles>
  );
}
