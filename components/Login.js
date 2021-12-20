import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
    const { authenticate } = useMoralis();

    return (
        <div className="bg-black relative text-white">
            <h1>WELCOME TO THE METAVERSE</h1>
            <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
                <Image
                    className="object-cover rounded-full"
                    src="https://thumbs.dreamstime.com/b/ethereum-crypto-currency-logo-over-abstract-low-poly-background-d-render-ethereum-currency-logo-d-illustration-111600303.jpg"
                    height={200}
                    width={200}
                />
                <button
                    onClick={() => authenticate()}
                    className="bg-blue-700 rounded-lg p-5 text-bold animate-pulse">
                    Login to the METAVERSE
                </button>
            </div>

            <div className="w-full h-screen">
                <Image
                    src="https://links.papareact.com/55n"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </div>
    );
}

export default Login;
// https://links.papareact.com/55n 3pi