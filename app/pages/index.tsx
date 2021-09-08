import { BlitzPage } from "blitz"
import { Suspense } from "react"
import Layout from "app/core/layouts/Layout"
import PokemonList from "app/core/components/PokemonList"

const Home: BlitzPage = () => {
  return (
    <div className="container">
      <Suspense fallback="loading">
        <PokemonList />
      </Suspense>
    </div>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
