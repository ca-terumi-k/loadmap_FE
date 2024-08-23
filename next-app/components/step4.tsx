import React from "react";
import Link from "next/link";
import {
    Home,
    FileText,
    Settings,
    HelpCircle,
    User,
    Mail,
    BookOpen,
    ShoppingBag,
} from "lucide-react";

const NavigationLink = ({
    href,
    icon: Icon,
    text,
}: {
    href: string;
    icon: any;
    text: string;
}) => (
    <Link href={href}>
        <span className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition duration-300">
            <Icon className="mr-2" size={12} />
            {text}
        </span>
    </Link>
);

const Navigation = () => {
    const links = [
        { href: "/", icon: Home, text: "ホーム" },
        { href: "/test1", icon: FileText, text: "テスト1" },
        { href: "/test2", icon: Settings, text: "テスト2" },
        { href: "/test3", icon: HelpCircle, text: "テスト3" },
    ];

    return (
        <>
            <nav className="bg-white shadow-md w-full">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center items-center h-16">
                        <div className="hidden md:block">
                            <div className="flex space-x-4">
                                {links.map((link) => (
                                    <NavigationLink key={link.href} {...link} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navigation;
