import {useState} from "react";


// Définition du composant Page
const Page: React.FC = () => {

    return (
        <div>
            <h1>Page</h1>
            <input type="text" value={inputText} onChange={handleInputChange} />
            <button onClick={fetchDataHandler}>Fetch Data</button>
            <div>
                {/* Affichage de la donnée récupérée depuis Redux */}
                <p>Data: {data}</p>
            </div>
        </div>
    );
};

// Export du composant Page
export default Page;