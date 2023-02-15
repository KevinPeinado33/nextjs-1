import { Layout } from '@/components/layouts'
import { Container, Text } from '@nextui-org/react'

const FavoritesPage = () => {
  return (
    <Layout title='Mis favoritos'>
        <Container css={{
          display: 'flex',
          flexDirection: 'column',
          height: 'calc(100vh - 100px)',
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center'
        }}>
          <Text h1>No hay favoritos</Text>
        </Container>
    </Layout>
  )
}

export default FavoritesPage