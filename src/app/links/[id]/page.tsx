
import { LinksDeInteres } from '@/app/ui/LinksInteres'
import { redirect } from 'next/navigation'

// incluir generateStaticParams()

export default async function generateStaticParams() {
    return LinksDeInteres.map((link) => ({
        params: {
            id: link.namebetacode
        }
    }))
}

// export async function LinkPage({ params }: { params: any }) {
    
//     const link = LinksDeInteres.find((link) => link.namebetacode === params.id);
    
//     if (link) {
//         redirect(link.path)
//     }
//     redirect('/')
// }  
