import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = ({ products, refetch }) => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Stock</th>
                            <th>Unit Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.length > 0 ? products.map((product, index) =>
                                <ProductRow key={product._id}
                                    index={index + 1}
                                    product={product}
                                    refetch={refetch}
                                ></ProductRow>)
                                :
                                <div><h2 className='text-xl'>No User Found</h2></div>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductTable;