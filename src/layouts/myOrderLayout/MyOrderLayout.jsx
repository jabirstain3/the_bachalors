import { useContext, useEffect, useState } from 'react';
import OrdersTable from '../../components/ordersTable/OrdersTable';
import Loader from '../../components/loader/Loader';
import { AuthContext } from '../../contexts/AuthContextProvider';

const MyOrderLayout = () => {
    const [ loading, setLoading ] = useState(false)
    const [ orders, setOrders ] = useState([])
    console.log(orders);
    const { user } = useContext(AuthContext);

    document.title = "Equi Sports - My Orders";

    useEffect(() => {
        setLoading(true)
        fetch(`${import.meta.env.VITE_DOMAIN}/${user?.email}/orders`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setOrders(data);             
                setLoading(false)
            })
            .catch((error) => {
                    console.error('Error fetching Services:', error);
            });
    }, []);

    return (
        <div className="sectionBase mx-auto my-4">
            <h1 className="text-[2.2rem] font-bold md:text-center border-b-2 border-gray-300">All Orders</h1>

            {
                loading ? 
                ( <div className="w-full rounded-lg flex justify-center items-center h-[360px]">
                    <Loader /> 
                </div> ) :
                ( <OrdersTable orders={orders} /> )
            }
        </div>
    );
};

export default MyOrderLayout;