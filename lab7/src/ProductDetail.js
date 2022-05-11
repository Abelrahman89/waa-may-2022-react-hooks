import { useState, useEffect } from "react";
import axios from "axios";

function ProductDetail(props) {
    const [productDetailState, setProductState] = useState({id:2, name: '', price: 0.0 })

    const url = 'http://localhost:8080/api/v1/products/'+props.selectedId;
    const fetchProducts = async () => {
        const result = await axios.get(url)
        console.log("dataaa"+result.data);
        setProductState(result.data)
    }


    useEffect(() => {
        fetchProducts();
    }, [props.selectedId])

    return (
        <div className="App">
            <div> Product Detail</div>
            <div>
            <div>
                <h1>
                    Name : {productDetailState.name}
                    Price:  {productDetailState.price}
                </h1>
            </div>
            </div>
        </div>
    );
}

export default ProductDetail;