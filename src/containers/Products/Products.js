import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, FormGroup, Input, Label } from 'reactstrap';

function Products(props) {

    const [productData, setProductData] = useState([]);
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('');
    let [category, setCategory] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        getdata()
    }, [])

    const getdata = async () => {

        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        let uniqCategory = [];

        data.map((v) => {
            if (!uniqCategory.includes(v.category)) {
                uniqCategory.push(v.category);
            }
        });
        
        setCategory(uniqCategory);
        setProductData(data);

    }

    const handleChange = () => {

        let fData = []
        fData = productData.filter((v) =>
            v.category.toLowerCase().includes(search.toLowerCase()) ||
            v.price.toString().includes(search) ||
            v.description.toLowerCase().includes(search.toLowerCase()))


        fData.sort((a, b) => {
            if (sort === 'lh') {
                return a.price - b.price
            } else if (sort === 'hl') {
                return b.price - a.price
            } else if (sort === 'az') {
                return a.title.localeCompare(b.title)
            } else if (sort === 'za') {
                return b.title.localeCompare(a.title)
            }
        })

        if (selectedCategory) {
            fData = fData.filter((v) => v.category === selectedCategory);
        }

        return fData

    }

    const finalData = handleChange()

    return (
        <div className='container'>

            <h1>Products</h1>

            <div className='row'>

                <Input style={{ width: "250px" }}
                    id="exampleSearch" name="search" placeholder="search" type="search" onChange={event => setSearch(event.target.value)}
                />

                <select onChange={event => setSort(event.target.value)} className='p-1 ml-1' style={{ width: "20%", marginLeft:"40px" }}>
                    <option value=""> ---Select Sort---</option>
                    <option value="lh">Price: Low - Heigh</option>
                    <option value="hl">Price: Heigh - Low </option>
                    <option value="az">Title : A to Z</option>
                    <option value="za">Title : Z to A</option>
                </select>

            </div>

            <div className='row justify-content-between'>
                <button className='mt-3 py-1'
                    style={{ background: selectedCategory === "" ? "lightGrey" : "none", width: "16%", borderRadius:"5px" }}
                    onClick={() => setSelectedCategory("")}
                >
                    All Selected
                </button>
                {
                    category.map((v) => (
                        <button className='mt-3 py-1'
                            style={{ background: v === selectedCategory ? "lightGrey" : "none", width: "16%", borderRadius:"5px" }}
                            onClick={() => setSelectedCategory(v)}
                        >
                            {v}
                        </button>
                    ))}

            </div>


            <div className='row'>
                {
                    finalData.map((v, i) => (
                        <div className='col-md-4 gy-5'>
                            <Card >
                                <img src={v.image} height={"240px"} width={"230px"} className='mx-auto mt-3' />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        {v.title.length > 20 ? v.title.substring(0, 20) + "..." : v.title}
                                    </CardTitle>
                                    <CardSubtitle
                                        className="mb-2 text-muted"
                                        tag="h6"
                                    >
                                        {v.price}
                                    </CardSubtitle>
                                    <CardText>
                                        {v.description.length > 40 ? v.description.substring(0, 40) + "..." : v.description}
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