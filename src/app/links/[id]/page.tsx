
import { LinksDeInteres } from '@/app/ui/LinksInteres'
import { redirect } from 'next/navigation'

export function generateStaticParams() {
    return LinksDeInteres.map((link) => ({
        params: {
            id: link.namebetacode
        }
    }))
}

export default async function LinkPage({ params }: { params: {id: string} }) {
    
    const link = LinksDeInteres.find((link) => link.namebetacode === params.id);
    
    if (link) {
        redirect(link.path)
    }
    redirect('/links')
}  
