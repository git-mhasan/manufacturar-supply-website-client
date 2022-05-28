import React from 'react';
import { toast } from 'react-toastify';
import url from '../../Shared/Utils/ServerUrl';

const DeleteOrderModal = ({ id, setDeleteId, refetch }) => {

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
        setDeleteId('');
        await refetch();
    }

    return (
        <>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <label htmlFor="delete-confirm-modal" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold">Delete Warning!</h3>
                    <p className="py-4">Are you sure, you want to delete the order?</p>
                    <div className="modal-action">
                        <label htmlFor="delete-confirm-modal" className="btn btn-sm bg-red-500 border-0" onClick={() => { handleDelete(id) }}>Delete</label>
                    </div>
                </label>
            </label>
        </>
    );
};

export default DeleteOrderModal;