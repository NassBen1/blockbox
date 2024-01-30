"use client"
import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Web3 from 'web3';
import { contractAddress } from "@/constants/global";
import contractABI from "@/constants/contractABI";

interface Post {
    postId: number;
    content: string;
    author: string;
    likeCount: number;
}

interface ContractResponse {
    postIds: number[];
    contents: string[];
    authors: string[];
    likeCounts: number[];
}

interface FormValues {
    content: string;
    comment: string;
}

const Home: React.FC = () => {
    const { register, handleSubmit, reset } = useForm<FormValues>();
    const [posts, setPosts] = React.useState<Post[]>([]);
    const [commentingPostId, setCommentingPostId] = useState<number | null>(null);

    const likePost = async (postId: number) => {
        try {
            if (window.ethereum) {
                const web3 = new Web3(window.ethereum);
                await window.ethereum.enable();
                const contract = new web3.eth.Contract(contractABI, contractAddress);
                const accounts = await web3.eth.getAccounts();
                const userAddress = accounts[0];

                // Appeler la fonction likePost du smart contrat
                await contract.methods.likePost(postId).send({ from: userAddress });

                // Mettre à jour la liste des posts après le like
                getAllPosts();
            } else {
                console.error('MetaMask n\'est pas installé');
            }
        } catch (error) {
            console.error('Erreur lors du like du post sur la blockchain :', error);
        }
    };

    const getAllPosts = async () => {
        try {
            if (window.ethereum) {
                const web3 = new Web3(window.ethereum);
                await window.ethereum.enable();
                const contract = new web3.eth.Contract(contractABI, contractAddress);

                // Appeler la fonction getAllPosts du smart contrat
                const result: { 0: number[], 1: string[], 2: string[], 3: number[]} = await contract.methods.getAllPosts().call();


                const postIds = result[0];
                const contents = result[1];
                const authors = result[2];
                const likeCounts = result[3];

                // Vérifier si les données attendues sont présentes dans la réponse

                // Mettre à jour l'état des posts dans le composant
                const newPosts: Post[] = postIds.map((postId, index) => ({
                    postId: Number(postId),
                    content: contents[index],
                    author: authors[index],
                    likeCount: Number(likeCounts[index]),
                }));
                console.log(newPosts)
                setPosts(newPosts);

            } else {
                console.error('MetaMask n\'est pas installé');
            }
        } catch (error) {
            console.error('Erreur lors de la récupération des posts depuis la blockchain :', error);
        }
    };

    const commentOnPost = async (postId: number, comment: string) => {
        console.log("Trying to comment on post with ID:", postId);
        try {
            if (window.ethereum) {
                const web3 = new Web3(window.ethereum);
                await window.ethereum.enable();
                const contract = new web3.eth.Contract(contractABI, contractAddress);
                const accounts = await web3.eth.getAccounts();
                const userAddress = accounts[0];

                console.log("Calling commentOnPost function in the smart contract...");
                await contract.methods.commentOnPost(postId, comment).send({ from: userAddress });

                // Mettre à jour la liste des posts après le commentaire
                getAllPosts();

                // Réinitialiser le formulaire de commentaire
                reset();
                // Désactiver le mode commentaire après avoir ajouté le commentaire
                setCommentingPostId(null);
                console.log("Comment added successfully!");

            } else {
                console.error('MetaMask n\'est pas installé');
            }
        } catch (error) {
            console.error('Erreur lors du commentaire sur le post sur la blockchain :', error);
        }
    };

    useEffect(() => {
        // Appeler la fonction getAllPosts au chargement du composant
        getAllPosts();
    }, []);

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

                // Mettre à jour la liste des posts après l'ajout du post
                getAllPosts();

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
                <label htmlFor="content">Contenu du Post :</label>
                <textarea
                    rows={5}
                    id="post"
                    className="text-black bg-light-2 h-40 w-full"
                    {...register('content', { required: 'Contenu du post requis' })}
                />
                <button type="submit" className="gap-10 bg-primary-500 w-full">
                    Ajouter un Post
                </button>
            </form>

            {/* Afficher la liste des posts */}
            {posts.map((post) => (
                <div key={post.postId} className="bg-dark-2 mt-3">
                    <div className="w-full text-left text-xl text-light-2 font-semibold mb-2">
                        {post.author} a posté :
                    </div>
                    <div className="bg-dark-2 border shadow p-5 text-xl text-light-2 font-semibold">{post.content}</div>
                    <div className="bg-primary-500 p-1 rounded-b-lg border shadow flex flex-row flex-wrap">
                        <div className="w-1/3 hover:bg-light-2 text-center text-xl text-black font-semibold"
                             onClick={() => likePost(post.postId)}>
                            Like ({post.likeCount})
                        </div>
                        <div className="w-1/3 hover:bg-light-2 border-l-4 text-center text-xl text-black font-semibold"
                             onClick={() => setCommentingPostId(post.postId)}>
                            Comment
                        </div>
                        <div
                            className="w-1/3 hover:bg-light-2 border-l-4 text-center text-xl text-black font-semibold">Share
                        </div>
                    </div>
                    {commentingPostId === post.postId && (
                        <div className="mt-3 text-light-2">

                            <textarea
                                rows={3}
                                id="comment"
                                className="text-black bg-light-2 h-20 w-full"
                                {...register('comment', {required: 'Commentaire requis'})}
                            />
                            <button
                                onClick={() => {
                                    const commentElement = document.getElementById('comment');
                                    if (commentElement instanceof HTMLTextAreaElement) {
                                        const commentValue = commentElement.value;
                                        if (commentValue) {
                                            commentOnPost(post.postId, commentValue);
                                            reset();  // Réinitialiser le textarea
                                            setCommentingPostId(null);
                                        }
                                    }
                                }}
                                className="bg-primary-500 mt-2 px-4 py-2 text-white"
                            >
                                Ajouter un commentaire
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </>
    );
};

export default Home;
