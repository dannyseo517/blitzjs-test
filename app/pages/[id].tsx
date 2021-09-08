import { useParam, BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"

const Pokemon: BlitzPage = () => {
  const id = useParam("id")

  return <div>{id}</div>
}

Pokemon.suppressFirstRenderFlicker = true
Pokemon.getLayout = (page) => <Layout title="Pokemon">{page}</Layout>

export default Pokemon
