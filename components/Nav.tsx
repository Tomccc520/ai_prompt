

export default function Nav () {
    return (
        <nav className="sticky top-0 left-0 w-full flex-none border-b border-slate-900/10  backdrop-blur">
        <div className="max-w-8xl mx-auto"><div className="py-2 px-4">
            <div className="relative flex h-10 items-center">
                <a className="font-semibold text-black" href="/">
                    <img src="/logo.png" width="40" height="40" alt="icon " /></a>
                <div className="ml-auto flex">
                    <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:ru:" data-state="closed" className="rounded-lg  px-4 py-2 text-base font-semibold disabled:cursor-not-allowed bg-black text-white">登录</button>
                </div></div></div></div></nav>
    )

}