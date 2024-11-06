
import { render, screen, fireEvent } from '@testing-library/react-native';
import { Button } from './index';
import testIds from '@/constants/AppTestIds';
import appColors from '@/constants/Colors';

describe('Button Component ->', () => {

 it('deve renderizar corretamente com o rótulo fornecido', () => {
  const { getByText } = render(<Button label="Clique aqui" handleSubmit={() => { }} />);
  expect(getByText('Clique aqui')).toBeTruthy();
 });

 it('deve chamar a função handleSubmit quando o botão for pressionado', () => {
  const mockHandleSubmit = jest.fn();
  const { getByTestId } = render(<Button label="Clique aqui" handleSubmit={mockHandleSubmit} />);

  const button = getByTestId(testIds.appButton);
  fireEvent.press(button);

  expect(mockHandleSubmit).toHaveBeenCalled();
  expect(mockHandleSubmit).toHaveBeenCalledTimes(1);
 });

 it('deve aplicar a cor padrão quando nenhuma cor for passada', () => {
  const { getByTestId } = render(<Button label="Clique aqui" handleSubmit={() => { }} />);

  const button = getByTestId(testIds.appButton);
  expect(button.props.style.backgroundColor).toBe(appColors.primary);
 });

 it('deve aplicar a cor personalizada quando fornecida', () => {
  const customColor = 'red';
  const { getByTestId } = render(<Button label="Clique aqui" handleSubmit={() => { }} color={customColor} />);

  const button = getByTestId(testIds.appButton);
  expect(button.props.style.backgroundColor).toBe(customColor);
 });

});

