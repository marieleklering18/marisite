import Link from "next/link";
import LandingPage from "../components/LandingPage";

export default function Home() {
    return (
        <div>
            <nav>
                <Link href="/landing">
                    <a className="text-violet-600 font-semibold hover:underline">Go to Landing Page</a>
                </Link>
            </nav>
            <LandingPage />
        </div>
    );
}
