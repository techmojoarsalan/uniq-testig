import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ProductCard from './ProductCard';
import { useAppContext } from '../Context'


export default function Products() {

  const { products } = useAppContext();
  const [brand, setBrand] = useState([]);
  const copyProductData = JSON.parse(JSON.stringify(products));
  const [filteredData, setFilteredData] = useState([...copyProductData]);
  const handleChange = (e) => {
    if (e.target.checked) {
      setBrand([...brand, e.target.value])
    }
    else {
      setBrand(brand.filter((brand) => brand !== e.target.value));
    }
  }
  const inputSearch = (e) => {
    const { value } = e.target;
    const searchFilter = products.filter((item) => item.title.toLowerCase().startsWith(value.toLowerCase()));
    setFilteredData(searchFilter)

  }
  const priceSort = () => {
    setFilteredData([...products].sort((a, b) => {
      return a.price > b.price ? 1 : -1
    }))

  }
  const ratingSort = () => {
    setFilteredData([...products].sort((a, b) => {
      return a.rating > b.rating ? 1 : -1
    }))
  }
  const discountSort = () => {
    setFilteredData([...products].sort((a, b) => {
      return a.discountPercentage > b.discountPercentage ? 1 : -1;
    }))
  }
  const sortDecending = () => {
    setFilteredData([...products].sort((a, b) => {
      return a.id > b.id ? -1 : 1
    }))
  }
  const Sortascending = () => {
    setFilteredData([...products].sort((a, b) => {
      return a.id > b.id ? 1 : -1
    }))
  }
  useEffect(() => {
    if (brand.length === 0) {
      setFilteredData(products)
    }
    else {
      const newfilterdata = products.filter((item) => brand.some(cat => [item.brand].includes(cat)));
      setFilteredData(newfilterdata)
    }
  }, [brand])
  return (
    <>
    <Row >
      <Col>
      <h1 className='text-center text-warning bg-primary w-100 ' >Sasta Flipkart</h1>
      </Col>
    </Row>
      <Row className='gap-0'>
        <Col sm={4} md={2}  className='bg-warning'>
          <div className='inputContainer'>
            <br />
            <input type="text" placeholder='Search Products' onChange={inputSearch} />
            <br />
            <label>OPPO </label>
            <input type="checkbox" name="oppo" value="OPPO" onChange={handleChange} />
            <br />
            <label >Samsung </label>
            <input type="checkbox" name="Samsung" value="Samsung" onChange={handleChange} />
            <br />
            <label>Huawei </label>
            <input type="checkbox" name="Huawei" value='Huawei' onChange={handleChange} />
            <br />
            <Button variant='primary' onClick={priceSort}>Price </Button>
            <Button variant='primary' onClick={ratingSort}>Rating</Button>
            <Button variant='primary' onClick={discountSort}>Discount</Button>
            <Button variant='primary' onClick={sortDecending}>Decending </Button>
            <Button variant='primary' onClick={Sortascending}>Ascending  </Button>

          </div>
        </Col>
        <Col sm={8} md={10} >
          <ProductCard products={filteredData} />
        </Col>
      </Row>



      {/* <div className="itemFlex"> */}
      {/* {filteredData && filteredData.map((item) =><ProductCard key={item.id} {...item} />)} */}

      {/* </div> */}
    </>
  )
}
