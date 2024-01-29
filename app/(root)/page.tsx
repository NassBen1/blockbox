"use client"
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Web3 from 'web3';
import { contractAddress } from "@/constants/global";
import contractABI from "@/constants/contractABI";

interface FormValues {
    content: string;
}

const Home: React.FC = () => {
    const { register, handleSubmit, reset } = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = async (values) => {
        try {
            if (window.ethereum) {
                const web3 = new Web3(window.ethereum);
                await window.ethereum.enable();
                const contract = new web3.eth.Contract(contractABI, contractAddress);
                const accounts = await web3.eth.getAccounts();
                const userAddress = accounts[0];

                // Appeler la fonction createPost du smart contrat
                await contract.methods.createPost(values.content).send({ from: userAddress });

                // Réinitialiser le formulaire
                reset();

                console.log('Post ajouté avec succès sur la blockchain!');
            } else {
                console.error('MetaMask n\'est pas installé');
            }
        } catch (error) {
            console.error('Erreur lors de l\'ajout du post sur la blockchain :', error);
        }
    };

    return (
        <>
            <h1 className="head-text text-left">Accueil</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="content">Contenu du Post:</label>
                <textarea rows={5}
                          id="post"
                          className="text-black bg-light-2 h-40 w-full"
                          {...register('content')} />

                <button type="submit" className="gap-10 bg-primary-500 w-full">Ajouter un Post</button>
            </form>
            <div className="bg-dark-2 mt-3">

                <div className="bg-dark-2 border shadow p-5 text-xl text-light-2 font-semibold">
                    A Pretty Cool photo from the mountains. Image credit to @danielmirlea on Unsplash.
                </div>
                <div className="bg-primary-500 p-1 rounded-b-lg border shadow flex flex-row flex-wrap">
                    <div className="w-1/3 hover:bg-light-2 text-center text-xl text-black font-semibold">Like</div>
                    <div
                        className="w-1/3 hover:bg-light-2 border-l-4 border-r- text-center text-xl text-black font-semibold">Share
                    </div>
                    <div
                        className="w-1/3 hover:bg-light-2 border-l-4 text-center text-xl text-black font-semibold">Comment
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;