import path from 'path'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

function Home() {
  return (

    <>
      <div className="min-h-screen">
        <Nav />

        <div className='container mx-auto pb-10 pt-4'>

          <div className='class="flex w-full flex-col gap-y-4"'>
            <div className="text-lg font-semibold text-black">效率工具</div>
            <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 p-7'>
              <Card  index={"week"}/>
              <Card  index={"red-book"}/>
             

            </div>
          </div>


        </div>

        <Footer />
      </div>




      
    </>

  )
}

export default Home

export function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      messages: {
        ...require(`../messages/${locale}.json`),
      },
    },
  }
}
