import { useTranslations } from "next-intl";
import Link from "next/link";




export default function Card({index}) {
    const t = useTranslations(index)
    
    return (
        <Link className="rounded-lg bg-white shadow-xl shadow-black/5 ring-1 ring-slate-700/10" href={{ pathname: "/custom", query: { index: index } }}>
        <div className="flex flex-col p-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-black">{t("title")}</span>
          </div>
          <span className="mt-4 text-sm text-gray-500">{t("slogan")}</span>
        </div>
      </Link>
    )
}

export function getStaticProps({ locale }: { locale: string }) {
    return {
      props: {
        messages: {
          ...require(`../messages/${locale}.json`),
        },
      },
    }
  }