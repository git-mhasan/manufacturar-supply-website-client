import React, { useState } from 'react';
import DeleteProductModal from './DeleteProductModal';

const ProductRow = ({ product, index, refetch }) => {
    const [deleteId, setDeleteId] = useState('');

    return (
        <>
            <tr className="hover text-sm">
                <th>{parseInt(index) + 1}</th>
                <td>{<img className='w-[50px] h-[50px]' src={product?.img} alt='' />}</td>
                <td>{product?.name}</td>
                <td>{product?.available}</td>
                <td>{product?.unitPrice}</td>

                <td>{
                    <label htmlFor="delete-confirm-modal" className="btn modal-button btn-xs m-1 bg-red-500 border-0" onClick={() => { setDeleteId(product._id) }}>Delete</label>
                }
                </td>

                {deleteId && <DeleteProductModal id={deleteId}
                    setDeleteId={setDeleteId} refetch={refetch}
                ></DeleteProductModal>}
            </tr>


        </>
    );
};

export default ProductRow;