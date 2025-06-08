import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Leaf, Award, Truck, Headset } from "lucide-react";

export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-5 row-start-2 items-center sm:items-start">
                <h1 className="font-bold text-5xl">An Ecommerce for foodstuff</h1>
                <p className="text-xl">Agricart is a platform for buying food items</p>
                <div className="flex gap-4">
                    <Link href="/shop" className="cursor-pointer">
                        <Button className="rounded-4xl bg-green-500 hover:bg-green-400">Shop Now</Button>
                    </Link>
                    <Link href="/contact" className="cursor-pointer">
                        <Button variant="outline" className="rounded-4xl">
                            Contact Us
                        </Button>
                    </Link>
                </div>

                {/* Features List */}
                <ul className="mt-16 space-y-4 text-lg">
                    <li className="flex items-center gap-3">
                        <Leaf className="w-6 h-6 text-green-600" />
                        <span>Environment – we use only 100% environment friendly materials</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <Award className="w-6 h-6 text-green-600" />
                        <span>Best Quality Product – we guarantee best quality of our products</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <Truck className="w-6 h-6 text-green-600" />
                        <span>Free Worldwide shipping – we ship everywhere, no matter where you live</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <Headset className="w-6 h-6 text-green-600" />
                        <span>24/7 Support – we are here to help you with any questions you might have at any time</span>
                    </li>
                </ul>
            </main>
        </div>
    );
}
