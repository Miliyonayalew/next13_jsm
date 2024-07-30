"use client"
import { formUrlQuery } from "@/sanity/utils"
import { Button } from "./ui/button"
import { use, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"

const Filters = () => {
    const [active, setActive] = useState('')
    const searchParams = useSearchParams()
    const router = useRouter()
    const handleFilter = (filter: string) => {
        let newUrl = ''
        
        if(active === filter){
            setActive('')
           newUrl = formUrlQuery({
                params: searchParams.toString(),
                keysToRemove: ['category'],
                value: null,
            })
        }
        else {
            setActive(filter)
            newUrl = formUrlQuery({
                params: searchParams.toString(),
                key: 'category',
                value: filter.toLocaleLowerCase(),
            })
        }

        router.push(newUrl, { scroll: false })
    }

    const links = [ 'all', 'Next 13', 'frontend', 'backend', 'fullstack']
  return (
    <ul className="text-white-800 body-text no-scrollbar flex w-full gap-2 overflow-auto py-12 sm:max-w-2xl">
        {
            links.map((link) => (
                <button
                    key={link}
                    onClick={() => handleFilter(link)}
                    className={`${active === link ? "gradient_blue-purple" : ""} whitespace-nowrap rounded-lg px-8 py-2.5 capitalize`}
                >
                    {link}
                </button>
            ))}
    </ul>
  )
}

export default Filters