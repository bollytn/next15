import Link from "next/link";
import Counterx from "../components/Counterx"; // Corrected import

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <nav>
                    <Link href="/">
                        Home {/* Corrected Link usage */}
                    </Link>
                    <Link href="/about">
                        About {/* Corrected Link usage */}
                    </Link>
                    <Link href="/blog">
                        Blog {/* Corrected Link usage */}
                    </Link>
                </nav>
                <main>{children}</main>
                <Counterx /> {/* Ensure this is intentional */}
                <footer>
                    <h2>Footer</h2>
                </footer>
            </body>
        </html>
    );
}