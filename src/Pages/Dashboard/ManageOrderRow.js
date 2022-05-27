import React from 'react';
import { toast } from 'react-toastify';
import url from '../../Shared/Utils/ServerUrl';

const ManageOrderRow = ({ order, index, refetch }) => {

    const handleDelete = async (id) => {
        await fetch(`${url}orders/ship/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('The order cannot be deleted.');
                }
                return res.json()
            })
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`The Order is deleted.`);
                }
            })
        await refetch();
    }


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
                <td>{order?.productId.slice(order?.productId.length - 5)}</td>
                <td>{order?.userEmail}</td>
                <td>{order?.productName}</td>
                <td>{order?.payment ? "Paid" : "Unpaid"}</td>
                <td>{order?.orderQuantity}</td>

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
                                    <button onClick={() => { handleShipment(order._id) }} className='btn btn-xs bg-green-500 m-1 border-0'>Ship</button>
                                    :
                                    <label htmlFor="delete-confirm-modal" className="btn modal-button btn-xs m-1 bg-red-500 border-0">Delete</label>
                            }
                        </>
                }

                </td>
            </tr>

            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <label htmlFor="delete-confirm-modal" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold">Delete Warning!</h3>
                    <p className="py-4">Are you sure, you want to delete the order?</p>
                    <div className="modal-action">
                        <label htmlFor="delete-confirm-modal" onClick={() => { handleDelete(order._id) }} className="btn btn-sm bg-red-500 border-0">Delete</label>
                    </div>
                </label>
            </label>
        </>
    );
};

export default ManageOrderRow;