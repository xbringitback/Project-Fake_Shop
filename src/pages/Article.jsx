import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Article = () => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <section>
                {data?.map((el, i) => (
                    <div key={i}>
                        <h1>{el.title}</h1>
                        <img src={el.image} alt="img" />
                        <p>{el.price} $</p>
                        <Link to={`/ArticleDetails/${el.id}`}>Read More</Link>
                    </div>
                ))}
            </section>
        
        </>
    )
};

export default Article


