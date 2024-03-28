import { app } from './app'

app
  .listen({
    port: 3000,
    host: '0.0.0.0',
  })
  .then((address) => {
    console.log(`Server listening at ${address}`)
  })
