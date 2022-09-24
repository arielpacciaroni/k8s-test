import useConnectToBackend from "../src/hooks/useConnectToBackend"

export default function Home() {
  const { success, error, loading } = useConnectToBackend();

  return (
    <main className="my-16">
      <div className="container mx-auto">
        <h1 className="text-2xl text-zinc-500">Frontend</h1>
        {loading && <p className="text-blue-600">Loading...</p>}
        {!loading && success && <p className="text-green-600">Connected to Backend!</p>}
        {!loading && !success && <p className="text-green-600">{error?.message ?? "An error happened"}</p>}
      </div>
    </main>
  )
}