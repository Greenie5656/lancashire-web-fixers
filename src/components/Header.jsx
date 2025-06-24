import { FullLogo, SymbolLogo } from "./Logo"

const Header = () => {
    return (
        <header className="bg-black py-6 px-4 mb-2 md:mb-4">
            <div className="max-w-6xl mx-auto">
                <div className="hidden md:block text-center">
                    <FullLogo />
                </div>

                <div className="md:hidden flex justify-center">
                    <SymbolLogo />
                </div>
            </div>
        </header>
    );
};

export default Header;