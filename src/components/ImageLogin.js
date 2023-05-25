
// Componente criado para fazer a imagen de login
import { Image} from 'native-base';

// function ImageLogin() {
//     return <Center>
//         <Image source={{
//         uri: 'https://s3-alpha-sig.figma.com/img/a42d/0926/1182ea21a67d7b3afb4ff52a20a13131?Expires=1684713600&Signature=BFvUqHTvOFYlm32yb4bqiWbd4cWX~y18-GwZ2OEvq2jdORQa0ruj93DM3ZnFZx-ZUsoZc9ne9YYfV2zeitIXnHCWLgZwA9N-BZqkQP~EPLhWN1H111VDcpSxkMs8ZbaL0MyJI9C3dTJLgAm6luN-a0883HJP0eK7U189oM4HPPMIISghnYojeXWRSw43tRnDVgRiY7gBb8fH~9CkqUTGkLaZR6sbn7SEjRQfyVAK6aQ1nm3KVCwW-BD-UOcCCdZ8pswG~rteK~VSKXea~vPcjC-FEuRFbAWAFKOIxOFy8kB-azzoGT7I2hzTUwILWjZIEZ6r0P~FkAeBI5eEeA2sWw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
//       }} alt="Alternate Text" size="xl" />
//       </Center>;
//   }

export function ImageLogin(){
    return(
        <Image
            mt={1}
            size={220}
            source={require('../../assets/logoinicial.png')} // Substitua "nome-da-imagem.jpg" pelo nome correto do seu arquivo de imagem local
            alt="Alternate Text"
            />
    )
}