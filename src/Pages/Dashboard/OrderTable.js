import React from 'react';
import OrderRow from './OrderRow';

const OrderTable = ({ orders, refetch }) => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Order No.</th>
                            <th>Email</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.length > 0 ? orders.map((order, index) =>
                                <OrderRow key={order._id}
                                    index={index}
                                    order={order}
                                    refetch={refetch}
                                ></OrderRow>)
                                :
                                <div><h2 className='text-xl'>No User Found</h2></div>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderTable;