import React from 'react';
import { toast } from 'react-toastify';
import url from '../../Shared/Utils/ServerUrl';

const DeleteUserOrderModal = ({ id, setDeleteId, refetch }) => {

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
        setDeleteId('')
        await refetch();

    }

    return (
        <div>
            <input type="checkbox" id="cancel-confirm-modal" className="modal-toggle" />
            <label htmlFor="cancel-confirm-modal" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold">Delete Warning!</h3>
                    <p className="py-4">Are you sure, you want to cancel the order?</p>
                    <div className="modal-action">
                        <label htmlFor="cancel-confirm-modal" onClick={() => { handleCancel(id) }} className="btn btn-sm bg-red-500 border-0">Yes</label>
                    </div>
                </label>
            </label>
        </div>
    );
};

export default DeleteUserOrderModal;