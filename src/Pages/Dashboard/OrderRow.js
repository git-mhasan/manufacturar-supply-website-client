import React from 'react';
import { toast } from 'react-toastify';
import url from '../../Shared/Utils/ServerUrl';

const OrderRow = ({ order, index, refetch }) => {

    const handleCancel = async (id) => {

        await fetch(`${url}orders/ship/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('The order cannot be canceled.');
                }
                return res.json()
            })
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`The Order is canceled.`);
                }
            })
        await refetch();

    }
    const handlePayment = () => {

        refetch();
    }

    return (
        <>
            <tr className="hover text-sm">
                <th>{parseInt(index) + 1}</th>
                <td>{order?.productId.slice(order?.productId.length - 5)}</td>
                <td>{order?.userEmail}</td>
                <td>{order?.productName}</td>
                <td>{order?.orderQuantity}</td>

                <td>{


                    order?.payment
                        ?
                        <button className='btn btn-xs btn-disabled m-1 border-0'>Paid</button>
                        :
                        <>
                            <button onClick={handlePayment} className='btn btn-xs bg-green-500 m-1 border-0'>Pay</button>
                            <button onClick={() => { handleCancel(order._id) }} className='btn btn-xs bg-red-500 m-1 border-0'>X</button>
                        </>


                }
                </td>

            </tr>
        </>
    );
};

export default OrderRow;