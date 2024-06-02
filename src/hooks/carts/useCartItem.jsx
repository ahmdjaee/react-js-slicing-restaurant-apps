import { useState, useEffect } from 'react';
import { getCartItem } from '../../services/CartService';
const useCarts = () => {
    const [carts, setCarts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCarts = async () => {
            try {
                const response = await getCartItem();
                if (response) {
                    setCarts(response.data);
                    setLoading(false);
                }
            } catch (error) {
                setLoading(false);
                console.log(error);
            }
        };

        fetchCarts();
    }, []);

    return [carts, loading, setCarts];
};

export default useCarts;