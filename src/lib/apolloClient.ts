import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import useAuthStore from "../store/useAuthStore";

const httpLink = createHttpLink({
  uri: "https://api.escuelajs.co/graphql",
});

//Ссылка контекста для добавления заголовка авторизации
const authLink = setContext((_, { headers }) => {
  const accessToken = useAuthStore.getState().accessToken;
  // Возвращаем новые заголовки, включая заголовок авторизации, если токен присутствует
  return {
    headers: {
      ...headers, // Сохраняем существующие заголовки
      Authorization: accessToken ? `Bearer ${accessToken}` : "", // Добавляем заголовок Authorization, если есть токен
    },
  };
});

// Инициализируем экземпляр ApolloClient
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(), // Создаем кэш для хранения данных клиента в памяти
});

export default client;
