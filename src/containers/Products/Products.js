import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, FormGroup, Input, Label } from 'reactstrap';

function Products(props) {

    const [productData, setProductData] = useState([]);
    const [search, setSearch] = useState([])

    const getdata = async () => {

        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        setProductData(data);
        setSearch(data);
    }

    useEffect(() => {
        getdata()
    }, [])

    const handleChange = (value) => {

        // console.log(value);
        
        const searchValue = search.filter(v => v.category.toLowerCase().includes(value))
        setSearch(searchValue);
        console.log(searchValue);

        // document.getElementsByClassName("row").innerHTML =       

    }

    return (
        <div className='container'>

            <FormGroup>
                <Label for="exampleSearch">
                    Search
                </Label>
                <Input style={
                    { width: "250px" }
                }
                    id="exampleSearch" name="search" placeholder="search" type="search" onChange={e => handleChange(e.target.value)}
                />
            </FormGroup>

            <div className='row'>
                <h1>Products</h1>

                {
                    productData.map((v, i) => (
                        <div className='col-md-4 gy-5'>
                            <Card >
                                <img src={v.image} height={"240px"} width={"260px"} />
                                <CardBody>
                                    <CardTitle tag="h5">
                                    {v.title.length > 20 ? v.title.substring(0, 20) + "..." : v.title}
                                    </CardTitle>
                                    <CardSubtitle
                                        className="mb-2 text-muted"
                                        tag="h6"
                                    >
                                        {v.price}
                                    </CardSubtitle>
                                    <CardText>
                                        {v.description.substring(0, 40) + "..."}
                                    </CardText>
                                    <Button>
                                        Add to cart
                                    </Button>
                                </CardBody>
                            </Card>
                        </div>

                    ))
                }

            </div>

        </div>
    );
}

export default Products;