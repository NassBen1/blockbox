import {ClerkProvider} from "@clerk/nextjs";
import {Inter} from "next/font/google";
import '../globals.css'
<<<<<<< HEAD
import Topbar from "@/components/shared/Topbar";
=======
>>>>>>> 195b88da8f76ad7b420efc90660efba4075f58ed

export const metadata = {
    title: 'BlockBox',
    description: 'Le réseau social décentralisé'
}

const inter = Inter({subsets: ["latin"]})

export default function RootLayout({children }: { children: React.ReactNode}) {

    return (
        <ClerkProvider>
            <html lang="en">
<<<<<<< HEAD
            <Topbar />
            <body className={`${inter.className} bg-dark-1`}>
            {children}
            </body>
=======
                <body className={`${inter.className} bg-dark-1`}>
                    {children}
                </body>
>>>>>>> 195b88da8f76ad7b420efc90660efba4075f58ed
            </html>
        </ClerkProvider>
    )

}