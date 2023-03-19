import Footer from '../components/Footer'
import Week from './week'

function Home() {
  return (

    <><nav className="sticky top-0 left-0 w-full flex-none border-b border-slate-900/10 bg-white/80 backdrop-blur">
      <div className="max-w-8xl mx-auto"><div className="py-2 px-4">
        <div className="relative flex h-10 items-center">
          <a className="font-semibold text-black" href="/">
            <img src="/logo.png" width="40" height="40" alt="icon " /></a>
          <div className="ml-auto flex">
            <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:ru:" data-state="closed" className="rounded-lg  px-4 py-2 text-base font-semibold disabled:cursor-not-allowed bg-black text-white">登录</button>
          </div></div></div></div></nav>

      <div className='container mx-auto pb-10 pt-4'>
      <div className='class="flex w-full flex-col gap-y-4"'>
      <div className="text-lg font-semibold text-black">效率工具</div>
        <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 p-7'>
          
          <a className="rounded-lg bg-white shadow-xl shadow-black/5 ring-1 ring-slate-700/10" href="/week">
            <div className="flex flex-col p-4">
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold text-black">周报生成器🔥</span>
              </div>
              <span className="mt-4 text-sm text-gray-500">输入工作内容，小助手帮你快速完成周报。</span>
            </div>
          </a>
        </div>
      </div>
      </div>
      


      <Footer />
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
