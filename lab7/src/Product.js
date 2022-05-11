
function CreateProduct(props) {


    return (
        <div className="App">
            <div>
                <h1>
                   <span> Name : {props.name}</span>
                      <span>    Price:  {props.price}</span>
                </h1>
            </div>



        </div>
    );
}

export default CreateProduct;