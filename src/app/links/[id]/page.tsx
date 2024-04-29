
import { LinksDeInteres } from '@/app/ui/LinksInteres'
import { redirect } from 'next/navigation'

// incluir generateStaticParams()

export function generateStaticParams() {
    return LinksDeInteres.map((link) => ({
        params: {
            id: link.namebetacode
        }
    }))
}

export default async function LinkPage({ params }: { params: any }) {
    
    const link = LinksDeInteres.find((link) => link.namebetacode === params.id);
    
    if (link) {
        redirect(link.path)
    }
    redirect('/')
}  
