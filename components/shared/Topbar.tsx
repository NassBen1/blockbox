'use client'
import Link from "next/link";
import Image from "next/image";
import {OrganizationSwitcher, SignedIn, SignOutButton} from "@clerk/nextjs";
import {useRouter} from "next/navigation";
<<<<<<< HEAD
import { dark } from "@clerk/themes"
=======
>>>>>>> 195b88da8f76ad7b420efc90660efba4075f58ed

function Topbar() {

    const router = useRouter()
    return (

        <nav className="topbar">
            <Link href="/" className="flex items-center gap-3">
                <Image src="/assets/logo.svg" alt="logo" width={28} height={28} />
                <p className="text-heading3-bold text-light-1 max-xs:hidden">BlockBox</p>
            </Link>
            <div className="flex items-center gap-1">
                <div className="block md:hidden">
                    <SignedIn>
                        <SignOutButton signOutCallback={() => router.push('sign-in')}>
                            <div className="flex cursor-pointer">
                                <Image src="/assets/logout.svg" alt="logout" width={24} height={24}>

                                </Image>
                            </div>
                        </SignOutButton>
                    </SignedIn>
                </div>
                <OrganizationSwitcher
                    appearance={{
<<<<<<< HEAD
                        baseTheme: dark,
=======
>>>>>>> 195b88da8f76ad7b420efc90660efba4075f58ed
                        elements: {
                            organizationSwitcherTrigger:
                                "py-2 px-4"
                        }
                    }}/>
            </div>
        </nav>

    )
}

export default Topbar;
