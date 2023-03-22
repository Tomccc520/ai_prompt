import path from 'path'
import { useEffect, useState } from 'react'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

function Home() {
  return (

    <>
    <script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
      <div className="min-h-screen">
        <Nav />

        <div className='container mx-auto pb-10 pt-4'>
          <CardJson />
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


const CardJson = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const jsonData = require('../messages/zh.json');
    setData(jsonData);
  }, []);

  return (
    <div className='class="flex w-full flex-col gap-y-4"'>
      {Object.keys(data).map((key) => (
        <>
          <div key={key + "text"} className="text-lg font-semibold text-black">{key}</div>
          <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 p-7'>
            {Object.keys(data[key]).map((subKey) => (
              <Card key={subKey + "content"} index={key + "." + subKey} />
            ))}
          </div>
        </>

      ))}
    </div>

  );
};
