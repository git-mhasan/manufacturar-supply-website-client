import React, { useState } from 'react';
import { toast } from 'react-toastify';
import url from '../../Shared/Utils/ServerUrl';
import DeleteOrderModal from './DeleteOrderModal';

const ManageOrderRow = ({ order, id, index, refetch }) => {

    const [deleteId, setDeleteId] = useState('');


    const handleShipment = async (id) => {

        await fetch(`${url}orders/ship/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify({ shipment: true })
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('The Order cannot be Shipped.');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success(`The Order is Shipped.`);
                }
            })
        await refetch();
    }

    return (
        <>
            <tr className="hover text-sm">
                <th>{parseInt(index) + 1}</th>
                <td>{order?._id.slice(order?._id.length - 5)}</td>
                <td>{order?.userEmail}</td>
                <td>{order?.productName}</td>
                <td>{order?.orderQuantity}</td>
                <td>{order?.payment ? "Paid" : "Unpaid"}</td>

                <td>{
                    // Shipped wiil be implemented here.
                    order?.shipment
                        ?
                        <button className='btn btn-xs btn-disabled m-1 border-0'>Shipped</button>
                        :
                        <>
                            {
                                order?.payment
                                    ?
                                    <button onClick={() => { handleShipment(id) }} className='btn btn-xs bg-green-500 m-1 border-0'>Ship</button>
                                    :
                                    <>
                                        <label htmlFor="delete-confirm-modal" className="btn modal-button btn-xs m-1 bg-red-500 border-0" onClick={() => { setDeleteId(order._id) }} >Delete</label>
                                    </>
                            }
                        </>
                }

                </td>
            </tr>
            {deleteId && <DeleteOrderModal id={deleteId}
                setDeleteId={setDeleteId} refetch={refetch}
            ></DeleteOrderModal>}
        </>
    );
};

export default ManageOrderRow;