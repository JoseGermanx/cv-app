
import { LinksDeInteres } from '@/app/ui/LinksInteres'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function LinkPage({ params }: { params: any }) {
    
    const link = LinksDeInteres.find((link) => link.namebetacode === params.id);
    
    if (link) {
        redirect(link.path)
    }
    redirect('/')
}  
