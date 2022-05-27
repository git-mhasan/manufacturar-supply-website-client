import React from 'react';
import { toast } from 'react-toastify';
import url from '../../Shared/Utils/ServerUrl';

const DeleteProductModal = ({ id, setDeleteId, refetch }) => {

    const handleDelete = async (id) => {
        await fetch(`${url}product/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('The product could not be deleted.');
                }
                return res.json()
            })
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`The product is deleted.`);
                }
            })
        setDeleteId('');
        await refetch();
    }

    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <label htmlFor="delete-confirm-modal" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold">Delete Warning!</h3>
                    <p className="py-4">Are you sure, you want to delete the product?</p>
                    <div className="modal-action">
                        <label htmlFor="delete-confirm-modal" onClick={() => { handleDelete(id) }} className="btn btn-sm bg-red-500 border-0">Delete</label>
                    </div>
                </label>
            </label>
        </div>
    );
};

export default DeleteProductModal;