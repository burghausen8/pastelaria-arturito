import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import AppStatus from './index';
import AppStateEnum from '@/constants/AppState';
import testIds from '@/constants/AppTestIds';


jest.mock('lottie-react-native', () => 'LottieView');

describe('AppStatus Component ->', () => {

 it('should render correctly with success state', () => {
  const { getByTestId, getByText } = render(
   <AppStatus state={AppStateEnum.success} message="Pedido realizado com sucesso!" />
  );
  expect(getByTestId(testIds.appStatus)).toBeTruthy();
  expect(getByText('Pedido realizado com sucesso!')).toBeTruthy();
 });

 it('should render correctly with error state', () => {
  const { getByTestId, getByText } = render(
   <AppStatus state={AppStateEnum.error} message="Erro ao buscar produtos!" />
  );
  expect(getByTestId(testIds.appStatus)).toBeTruthy();
  expect(getByText('Erro ao buscar produtos!')).toBeTruthy();
 });

 it('should render correctly with empty state', () => {
  const { getByTestId, getByText, debug } = render(
   <AppStatus state={AppStateEnum.empty} message="Listagem vazia!" />
  );
  const result = screen.queryByTestId(testIds.appStatus);

  console.log(result?.instance);
  expect(getByTestId(testIds.appStatus)).toBeTruthy();
  expect(getByText('Listagem vazia!')).toBeTruthy();
 });


 it('should show the button and call onButtonPress when pressed', () => {
  const mockOnButtonPress = jest.fn();
  const { getByText, getByTestId } = render(
   <AppStatus
    state={AppStateEnum.error}
    message="Seu carrinho está vazio!"
    showButton={true}
    onButtonPress={mockOnButtonPress}
    buttonTitle="Voltar" />
  );
  const button = getByText('Voltar');
  fireEvent.press(button);

  expect(mockOnButtonPress).toHaveBeenCalled();
  expect(mockOnButtonPress).toHaveBeenCalledTimes(1);
  expect(getByText('Voltar')).toBeTruthy();
  expect(getByTestId(testIds.appButton)).toBeTruthy();
 });

 it('should not show the button when showButton is false', () => {
  const { queryByText } = render(
   <AppStatus
    state={AppStateEnum.error}
    message="Erro ao listar produtos!"
    showButton={false} />
  );

  const button = queryByText('qualquer texto');
  expect(button).toBeNull();
 });

});