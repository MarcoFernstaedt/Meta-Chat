import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

const Header = () => {
    const { user } = useMoralis();

    return (
        <div className=" sticky top-0 p-5 z-50 bg-black shadow-sm text-pink-500 border-b-2 border-pink-700">
            <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
                <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
                    <Image
                        layout="fill"
                        objectfit="cover"
                        className="rounded-full"
                        src="https://thumbs.dreamstime.com/b/ethereum-crypto-currency-logo-over-abstract-low-poly-background-d-render-ethereum-currency-logo-d-illustration-111600303.jpg"
                    />
                </div>
                <dic className="col-span-4 text-left lg:text-center">
                    <div className="relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full">
                        <Avatar logoutOnPress />
                    </div>
                    <h1 className="text-3xl">Welcome to the Metaverse</h1>
                    <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>
                    <ChangeUsername />
                </dic>
            </div>
        </div>
    );
};

export default Header;
