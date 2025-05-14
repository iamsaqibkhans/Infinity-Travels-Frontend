import Head from 'next/head'

export default function Home({ flights }) {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Head>
        <title>Infinity Travels - Fixed Departures</title>
      </Head>
      <h1 className="text-3xl font-bold text-center mb-6">Fixed Departures</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {flights.map((flight) => (
          <div key={flight.sys.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{flight.fields.title}</h2>
            <p>{flight.fields.description}</p>
            <p className="text-sm mt-2">Price: ₹{flight.fields.price}</p>
            <p className="text-sm">Departure: {new Date(flight.fields.departureDate).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`https://cdn.contentful.com/spaces/wcob8kix6id4/environments/master/entries?access_token=NiGt1sEeyQ71YC6326g_dovKJLJs3163fvlvZHtI02E&content_type=fixedDeparture`)
  const data = await res.json()
  return {
    props: {
      flights: data.items || []
    }
  }
}