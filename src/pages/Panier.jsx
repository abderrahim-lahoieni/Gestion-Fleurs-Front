import React, { useEffect, useState  }  from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Panier() {
    const [products, setProducts] = useState([{
        id: 1,
        image: '../../public/img_2.png',
        category: 'Flower 1',
        quantity: 1,
        price: 100,

    }]);
    const [showInput, setShowInput] = useState(false);
    const navigate = useNavigate();
    const [deliveryOption, setDeliveryOption] = useState('');

    const handleDeliveryOptionChange = (event) => {
        setDeliveryOption(event.target.value);
    };

    const handleSubmit = () => {
        if (deliveryOption === 'Livraison') {
            navigate('/ClientLogin');
        }
    };

    const increaseQuantity = (product) => {
        const updatedProducts = products.map((p) =>
            p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
        setProducts(updatedProducts);
    };

    const decreaseQuantity = (product) => {
        if (product.quantity > 0) {
            const updatedProducts = products.map((p) =>
                p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p
            );
            setProducts(updatedProducts);
        }
    };

    const GetProducts = () => {
        axios
            .get('https://fakestoreapi.com/products')
            .then((res) => {
                console.log(res);
                const productsWithQuantity = res.data.map((product) => ({
                    ...product,
                    quantity: 0, // set the initial quantity to 0
                }));
                setProducts(productsWithQuantity);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        GetProducts();
    }, []);

    const handleButtonClick = () => {
        setShowInput(true);
    };


    return (
        <div>
            <button
                className="bg-rose-300 text-white font-bold py-2 px-4 rounded mb-4 float-left"
                onClick={handleButtonClick}
            >
                Saisir le code de produit :
            </button>
            {showInput && (
                <input
                    type="number"
                    className="bg-rose-300 text-white font-bold py-2 px-2 w-16 rounded float-left"
                    placeholder="+"
                    min="0"
                />
            )}
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                <tr>
                    <th className="px-6 py-3 bg-gray-100 text-xs font-bold text-black uppercase tracking-wider " >Code</th>
                    <th className="px-6 py-3 bg-gray-100 text-xs font-bold text-black uppercase tracking-wider">Image</th>
                    <th className="px-6 py-3 bg-gray-100 text-xs font-bold text-black uppercase tracking-wider">Libelle</th>
                    <th className="px-6 py-3 bg-gray-100 text-xs font-bold text-black uppercase tracking-wider">Quantité</th>
                    <th className="px-6 py-3 bg-gray-100 text-xs font-bold text-black uppercase tracking-wider">Prix</th>
                    <th className="px-6 py-3 bg-gray-100 text-xs font-bold text-black uppercase tracking-wider">Totale</th>
                </tr>
                </thead>
                <tbody>
                {products.map((product, index) => (
                    <tr key={index}>
                        <td className="px-6 py-3 bg-gray-100 text-xs font-bold text-black uppercase tracking-wider">{index}</td>
                        <td>
                            <img src={product.image} alt={product.title} width={40} />
                        </td>
                        <td className="px-6 py-3 bg-gray-100 text-xs font-bold text-black uppercase tracking-wider">{product.category}</td>
                        <td>
                            <button className="bg-rose-300 text-white font-bold py-2 px-2 w-25 rounded " onClick={() => decreaseQuantity(product)}>-</button>
                            <span className="px-6 py-3 bg-gray-100 text-xs font-bold text-black uppercase tracking-wider" key={product.id}>{product.quantity}</span>
                            <button className="bg-rose-300 text-white font-bold py-2 px-2 w-25 rounded"  onClick={() => increaseQuantity(product)}>+</button>
                        </td>
                        <td className="px-6 py-3 bg-gray-100 text-xs font-bold text-black uppercase tracking-wider">{product.price}DH</td>
                        <td className="px-6 py-3 bg-gray-100 text-xs font-bold text-black uppercase tracking-wider">{product.price * product.quantity}DH</td>
                    </tr>
                ))}
                <tr>
                    <td className="text-black font-bold py-2 px-4 rounded mb-4 float-left">
                        <input
                            type="radio"
                            name="deliveryOption"
                            value="Livraison"
                            checked={deliveryOption === 'Livraison'}
                            onChange={handleDeliveryOptionChange}
                        />
                        Livraison
                    </td>
                    <td className="text-black font-bold py-2 px-4 rounded mb-4 float-left">
                        <input
                            type="radio"
                            name="deliveryOption"
                            value="Sans Livraison"
                            checked={deliveryOption === 'Sans Livraison'}
                            onChange={handleDeliveryOptionChange}
                        />
                        Sans Livraison
                    </td>

                </tr>

                </tbody>
            </table>
            <div>
                <button
                    className="bg-green-400 text-white font-bold py-2 px-4 rounded mb-4 float-right"
                    onClick={() => GetProducts()}
                >
                    Mettre à jour
                </button>


                <button
                    className="bg-green-400 text-white font-bold py-2 px-4 rounded mb-4 float-left"
                    onClick={handleSubmit}
                >
                    Valider
                </button>


            </div>



        </div>
    );
}

export default Panier;
