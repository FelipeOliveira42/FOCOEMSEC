// // Biblioteca utilizada ser o client de requisições é o "AXIOS"
// // Função para fazer login da aplicação
// import axios from 'axios';

// async function Auth(email, password) {
//   const config = {
//     method: 'post',
//     url: '/authorization',
//     baseURL: 'https://core-foco.herokuapp.com/api/v1/',
//     headers: {'Content-Type': 'application/json'
//     },
//     data: {
//       email: email,
//       password: password
//     }
//   };

//   try {
//     const response = await axios(config);
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// }

// export default Auth;
