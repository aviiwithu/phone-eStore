import React,{ useContext} from 'react'
import Product from './Product'
import Title from './Title'
import {RootContext} from './ContextReducer'


const ProductList = () => {

    const [state,dispatch] = useContext(RootContext);
    // console.log(state);

    const {store} = state;

    return (
        <>
        <div className="py-5">
            <div className="container">
                <div className="row">
                    <Title name='our' title='products' />
                    <div className="row">
                        {store.map(data=>{
                            return <Product key={data.id} data = {data} store={store} dispatch={dispatch} />
                        })}
                    </div>                    
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductList