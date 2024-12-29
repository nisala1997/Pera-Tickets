import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import { listProducts } from '../actions/productActions'
import {products} from '../products'


// function HomeScreen({ history }) {
//     const dispatch = useDispatch()
//     // const productList = useSelector(state => state.productList)
//     // const { error, loading, products, page, pages } = productList

//     let keyword = history.location.search

//     useEffect(() => {
//         dispatch(listProducts(keyword))

//     }, [dispatch, keyword])

//     return (
//         <div>
//             {!keyword && <ProductCarousel />}

//             <h1>Upcoming Events</h1>
            
//                     <div>
//                         <Row>
//                             {products.map(product => (
//                                 <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
//                                     <Product product={product} />
//                                 </Col>
//                             ))}
//                         </Row>
//                         <Paginate page={page} pages={pages} keyword={keyword} />
//                     </div>

//         </div>
//     )
// }

// export default HomeScreen



function HomeScreen({ history }) {
   

    return (
        <div>
            {/* Show carousel only if there's no search keyword */}
            {!history.location.search && <ProductCarousel />}

            <h1>Upcoming Events</h1>

            <div>
                <Row>
                    {products.map((product) => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                    ))}
                </Row>
                {/* Pass pages and page to Paginate */}
                {/* <Paginate
                    pages={pages}
                    page={page}
                    keyword={history.location.search}
                /> */}
            </div>
        </div>
    )
}

export default HomeScreen