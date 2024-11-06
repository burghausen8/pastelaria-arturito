
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { CartItemList } from './index';
import testIds from '@/constants/AppTestIds';
import { CartProduct } from '@/core/types/cart';
import { cartStore } from '@/state/hooks/cart.hook';

const products: CartProduct[] = [
 {
  id: "1",
  name: "Queijo",
  description: "Ingredientes: 1 xícara de chá de leite, 1 xícara de chá de óleo, 2 ovos, 2 xícaras de chá de farinha de trigo, 1 colher de chá de sal, 1 colher de sopa de fermento em pó, 1 xícara de chá de queijo ralado. Modo de preparo: Bata no liquidificador o leite, o óleo e os ovos. Em uma tigela, misture a farinha de trigo, o sal, o fermento e o queijo ralado. Junte a mistura do liquidificador e mexa bem. Coloque em forminhas untadas e leve ao forno médio por 20 minutos.",
  listPrice: "R$ 12,00",
  discount: "R$ 1,00",
  discountPercentage: "20%",
  bestPrice: "R$ 4,00",
  image: "https://pastelariaquata.servecompras.com.br/_core/_uploads//2022/11/2111111122h0eeigkdck.jpg",
  combo: true,
  category: "Ofertas da Semana",
  bestPriceValue: 4,
  quantity: 1
 },
 {
  id: "2",
  name: "Frango com Catupiry",
  description: "Ingredientes: 1 xícara de chá de frango desfiado, 1/2 xícara de chá de catupiry, 1/2 cebola picada, 1 colher de sopa de azeite, 1 xícara de chá de farinha de trigo, 1 colher de chá de sal, óleo para fritar. Modo de preparo: Refogue o frango com a cebola e o azeite. Recheie a massa do pastel com o frango e o catupiry, dobre e frite em óleo quente.",
  listPrice: "R$ 15,00",
  discount: "R$ 2,00",
  discountPercentage: "10%",
  bestPrice: "R$ 13,50",
  image: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-pastel-de-frango.jpg",
  combo: false,
  category: "Ofertas da Semana",
  bestPriceValue: 13.5,
  quantity: 1
 }
];




jest.mock('@/state/hooks/cart.hook', () => ({
 cartStore: jest.fn().mockReturnValue({
  cart: {
   products: products
  },
  cartId: 'cart123',
  cartInfo: { products, total: 17.5, totalPriceFormatted: 'R$ 17,50', totalItems: 2 },
  handleCartProducts: jest.fn(),
  removeToCart: jest.fn()
 }),
}));

describe('CartItemList Component ->', () => {

 test('renders CartItemList with products', () => {
  const { getByText, getByTestId } = render(<CartItemList products={products} />);

  expect(getByTestId(testIds.cartItemList)).toBeTruthy();
  expect(getByTestId(testIds.appButton)).toBeTruthy();
  expect(getByTestId(testIds.summary)).toBeTruthy();

  expect(getByText('Queijo')).toBeTruthy();
  expect(getByText('Frango com Catupiry')).toBeTruthy();
 });
});