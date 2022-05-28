import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteUserOrderModal from './DeleteUserOrderModal';

const OrderRow = ({ order, index, refetch }) => {

    const [deleteId, setDeleteId] = useState('');


    return (
        <>
            <tr className="hover text-sm">
                <th>{parseInt(index) + 1}</th>
                <td>{order?._id.slice(order?._id.length - 5)}</td>
                <td>{order?.userEmail}</td>
                <td>{order?.productName}</td>
                <td>{order?.totalPrice} Tk.</td>

                <td>{
                    order?.payment
                        ?
                        <button className='btn btn-xs btn-disabled m-1 border-0'>Paid</button>
                        :
                        <>
                            <Link to={`/dashboard/payment/${order._id}`} className='btn btn-xs bg-green-500 m-1 border-0'>Pay</Link>
                            <label htmlFor="cancel-confirm-modal" class="btn modal-button btn-xs bg-red-500 m-1 border-0" onClick={() => { setDeleteId(order._id) }}>X</label>



                        </>
                }
                </td>

            </tr>

            {deleteId && <DeleteUserOrderModal id={deleteId}
                setDeleteId={setDeleteId} refetch={refetch}
            ></DeleteUserOrderModal>}
        </>
    );
};

export default OrderRow;