// create your App component here
import React, {useEffect, useState} from "react";

function App()
{
    const [isLoaded, setIsLoaded] = useState(false);
    const [imageurl, setImageUrl] = useState(null);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random").then((response) => response.json()).then((response) => {
            console.log("response = ", response);
            setImageUrl(response.message);
            setIsLoaded(true);
        }).catch((err) => {
            console.err("there was a problem getting the data!");
            console.error(err);
            alert("failed to load the data, see log for details!");
        });
    }, []);

    if (isLoaded)
    {
        return (
            <div>
                <p>Here is a random dog:</p>
                <img src={imageurl} alt="A Random Dog" />
            </div>
        );
    }
    else
    {
        return (
            <p>Loading...</p>
        );
    }
}

export default App;
