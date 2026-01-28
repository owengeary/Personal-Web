import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
    return (
        <footer className="border-t py-12 mt-auto">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
                <div className="flex justify-center space-x-6 mb-8">
                    <Link href="https://github.com/owengeary" className="hover:text-gray-900 transition-colors">
                        <Github className="h-6 w-6" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="https://www.linkedin.com/in/owen-geary-19a77626a" className="hover:text-gray-900 transition-colors">
                        <Linkedin className="h-6 w-6" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="mailto:ob.geary@gmail.com" className="hover:text-gray-900 transition-colors">
                        <Mail className="h-6 w-6" />
                        <span className="sr-only">Email</span>
                    </Link>
                </div>
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Owen Geary.
                </p>
            </div>
        </footer>
    )
}
