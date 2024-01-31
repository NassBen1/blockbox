"use client";
import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import Web3 from 'web3';
import { contractAddress } from "@/constants/global";
import contractABI from "@/constants/contractABI";


interface CurrentUser {
    username: string;
    bio: string;
    // ... autres propriétés de currentUser
}
const Page = () => {
    const { user } = useUser();
    const isConnectedWithMetamask = user?.publicMetadata?.ethAddress != null;
    const [followerCount, setFollowerCount] = useState<number | null>(null);
    const [currentUser, setCurrentUser] = useState<any | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [postCount, setPostCount] = useState<number | null>(null);

    const fetchFollowerCount = async (): Promise<void> => {
        try {
            const web3 = new Web3(window.ethereum);
            const contract = new web3.eth.Contract(contractABI, contractAddress);
            const accounts = await web3.eth.getAccounts();
            const userAddress = accounts[0];

            const count = await contract.methods.getFollowerCount(userAddress).call();

            // Vérification de type pour s'assurer que count est un nombre
            if (!isNaN(Number(count))) {
                setFollowerCount(Number(count));
            } else {
                console.error('Le nombre de followers récupéré n\'est pas un nombre valide.');
            }

            // Récupérer les informations de l'utilisateur actuel
            const currentUserInfo = await contract.methods.getCurrentUser().call({ from: userAddress });
            setCurrentUser(currentUserInfo);
            setIsLoading(false);  // Marquer que le chargement est terminé

        } catch (error) {
            console.error('Erreur lors de la récupération du nombre de followers :', error);
            setIsLoading(false);  // Marquer que le chargement est terminé en cas d'erreur
        }
    };



    useEffect(() => {
        fetchFollowerCount();
    }, []);

    const fetchPostCountByUsername = async (user: CurrentUser | null): Promise<number | null> => {
        try {
            if (!user) {
                console.error('CurrentUser is null');
                return null;
            }

            const web3 = new Web3(window.ethereum);
            const contract = new web3.eth.Contract(contractABI, contractAddress);
            const accounts = await web3.eth.getAccounts();
            const userAddress = accounts[0];

            const postCountResult = await contract.methods.getPostCountByUsername(user.username).call({ from: userAddress });
            const postCount = Number(postCountResult);

            if (!isNaN(postCount)) {
                return postCount;
            } else {
                console.error('Le nombre de posts récupéré n\'est pas un nombre valide.');
                return null;
            }
        } catch (error) {
            console.error('Erreur lors de la récupération du nombre de posts :', error);
            return null;
        }
    };

    useEffect(() => {
        fetchFollowerCount();
        fetchPostCountByUsername(currentUser).then((count) => {
            if (count !== null) {
                setPostCount(count);
            }
        });
    }, [currentUser]);

    return (
        <>
            {isLoading ? (
                // Afficher un indicateur de chargement ici
                <div>Loading...</div>
            ) : (
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full px-4 flex justify-center">
                            <div className="relative">
                                <img
                                    alt=""
                                    src={isConnectedWithMetamask ? '/metamask-profile-picture.jpg' : '/default-profile-picture.jpg'}
                                    className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                                />
                            </div>
                        </div>
                        <div className="w-full px-4 text-center mt-20">
                            <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                <div className="mr-4 p-3 text-center">
                                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                        {followerCount}
                                    </span>
                                    <span className="text-sm text-blueGray-400">Followers</span>
                                </div>

                                <div className="lg:mr-4 p-3 text-center">
                                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                        {postCount}
                                    </span>
                                    <span className="text-sm text-blueGray-400">Blocks</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-12">
                        <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                            <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                            {currentUser.username}
                        </div>
                    </div>
                    <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full lg:w-9/12 px-4">
                                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                    {currentUser.bio}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Page;
