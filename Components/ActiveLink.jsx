import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const style = {
    color: '#0070f3',
    
}

export default function ActiveLink({ text, href }) {

    const { asPath } = useRouter();


    return (
        <Link href={href}>
            <a style={asPath === href ? style: null}>{text}</a>
        </Link>

    )
}
