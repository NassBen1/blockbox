"use client"
import Web3 from 'web3';
import contractABI from "@/constants/contractABI";
import {contractAddress} from "@/constants/global";
import {useEffect, useState} from "react";


interface CurrentUser {
    username: string;
    bio: string;
}

type DirectMessage = {
    sender: string;
    receiver: string;
    content: string;
    timestamp: number;
};

type UserData = {
    senders: string[];
    receivers: string[];
    contents: string[];
    timestamps: number[];
};



// Définition du composant Page
const Page: React.FC = () => {

    const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
    const [directMessages, setDirectMessages] = useState<UserData | undefined>(undefined);

    const fetchUserData = async (): Promise<void> => {
        try {
            const web3 = new Web3(window.ethereum);
            const contract = new web3.eth.Contract(contractABI, contractAddress);
            const accounts = await web3.eth.getAccounts();
            const userAddress = accounts[0];
            let currentUserInfo:any;

            currentUserInfo = await contract.methods.getCurrentUser().call({ from: userAddress });
            setCurrentUser(currentUserInfo)


        }
        catch (error) {
            console.error("Erreur lors de la récupération de l'utilisateur :", error);

        }

    };
    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchDirectMessages = async (): Promise<UserData | undefined> => {
        try {
            const web3 = new Web3(window.ethereum);
            const contract = new web3.eth.Contract(contractABI, contractAddress);
            const accounts = await web3.eth.getAccounts();
            const userAddress = accounts[0];
            let result : any;
            result = await contract.methods.getAllDirectMessages().call({ from: userAddress });

            // Construire les données utilisateur à partir du résultat de la blockchain
            const userData: UserData = {
                senders: result[0],
                receivers: result[1],
                contents: result[2],
                timestamps: result[3],
            };

            return userData;
        } catch (error) {
            console.error("Erreur lors de la récupération des messages directs :", error);
            return undefined;
        }
    };



    return (
        <div className="w-full container mx-auto shadow-lg rounded-lg">
            {/* Header */}
            <div className="w-full px-5 py-5 flex justify-between items-center bg-dark-4 border-b-2">
                <div className="font-semibold text-2xl text-light-2 text-center mx-auto">Messages privés de : {currentUser?.username}</div>
            </div>
            {/* End Header */}

            {/* Chatting */}
            <div className="flex flex-row justify-between bg-white">
                {/* Chat List */}
                <div className="flex flex-col w-2/5 border-r-2 overflow-y-auto">

                    {/* User List */}
                    <div className="flex flex-row py-4 px-2 justify-center items-center border-b-2">
                        {/* User 1 */}
                        <div className="w-1/4">
                        </div>
                        <div className="w-full">
                            <div className="text-lg font-semibold">Luis1994</div>
                            <span className="text-gray-500">Pick me at 9:00 Am</span>
                        </div>
                    </div>

                    {/* User 2 */}
                    <div className="flex flex-row py-4 px-2 items-center border-b-2">
                        <div className="w-1/4">
                            <img
                                src="https://source.unsplash.com/otT2199XwI8/600x600"
                                className="object-cover h-12 w-12 rounded-full"
                                alt=""
                            />
                        </div>
                        <div className="w-full">
                            <div className="text-lg font-semibold">Everest Trip 2021</div>
                            <span className="text-gray-500">Hi Sam, Welcome</span>
                        </div>
                    </div>

                    {/* User 3 */}
                    <div className="flex flex-row py-4 px-2 items-center border-b-2 border-l-4 border-blue-400">
                        <div className="w-1/4">
                            <img
                                src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
                                className="object-cover h-12 w-12 rounded-full"
                                alt=""
                            />
                        </div>
                        <div className="w-full">
                            <div className="text-lg font-semibold">MERN Stack</div>
                            <span className="text-gray-500">Lusi : Thanks Everyone</span>
                        </div>
                    </div>

                    {/* Additional User Entries */}

                </div>
                {/* End Chat List */}

                {/* Message */}
                <div className="w-full px-5 flex flex-col justify-between">
                    <div className="flex flex-col mt-5">
                        {/* Messages Go Here */}
                    </div>
                    <div className="py-5">
                        <input
                            className="w-full bg-gray-300 py-5 px-3 rounded-xl"
                            type="text"
                            placeholder="type your message here..."
                        />
                    </div>
                </div>
                {/* End Message */}


            </div>
        </div>
    );
};

// Export du composant Page
export default Page;