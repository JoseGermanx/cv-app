
import { LinksDeInteres } from '@/app/ui/LinksInteres'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function LinkPage({ params }: { params: any }) {
    console.log(LinksDeInteres);
    console.log(params);
    const link = LinksDeInteres.find((link) => link.namebetacode === params.id);
    console.log(link)
    if (link) {
        redirect(link.path)
    }
}   