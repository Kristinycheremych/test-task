import { gql, ApolloClient } from "@apollo/client";
import useAuthStore from "../store/useAuthStore";

// Определяем GraphQL мутацию для обновления токена
const REFRESH_TOKEN_MUTATION = gql`
  mutation RefreshToken($refreshToken: String!) {
    refreshToken(refreshToken: $refreshToken) {
      access_token
      refresh_token
    }
  }
`;

// Функция для обновления токена доступа
const refreshToken = async (client: ApolloClient<any>) => {
  const refreshToken = useAuthStore.getState().refreshToken;

  if (!refreshToken) {
    return null;
  }

  try {
    // Выполняем GraphQL мутацию для обновления токена
    const { data } = await client.mutate({
      mutation: REFRESH_TOKEN_MUTATION,
      variables: { refreshToken },
    });

    // Проверяем, если обновленные токены получены
    if (data?.refreshToken) {
      const { access_token, refresh_token } = data.refreshToken;
      // Обновляем токены в хранилище состояния
      useAuthStore.getState().setTokens(access_token, refresh_token);
      // Возвращаем новый access token
      return access_token;
    }
  } catch (err) {
    console.error("Ошибка обновления токена", err);
  }
  return null;
};

export { refreshToken };
