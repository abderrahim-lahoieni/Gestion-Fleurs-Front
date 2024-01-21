import React, { useState } from 'react';

function FlowerTable() {
    const [flowers, setFlowers] = useState([
        {
            id: 1,
            image: '../../public/img_2.png',
            name: 'Flower 1',
            origin: 'Origin 1',
            discount: 10,
            price: 100,
            stockQuantity: 10,
            categoryId: 1,
            familyId: 1,
        }
    ]);

    const [newFlower, setNewFlower] = useState({ id: '', name: '', origin: '', discount:'', price: '', stockQuantity: '', categoryId:'', familyId: '',image:'null' });
    const [editingFlower, setEditingFlower] = useState(null);
    const [addingFlower, setAddingFlower] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleInputChange = (e) => {
        if (e.target.name === "image") {
            const file = e.target.files[0];
            setSelectedImage(file);
        } else {
            setNewFlower({ ...newFlower, [e.target.name]: e.target.value });
        }
    };

    const addFlower = () => {
        const flower = { ...newFlower, id: Date.now(), image :URL.createObjectURL(selectedImage) };
        setFlowers([...flowers, flower]);
        setNewFlower({ id: '', name: '', origin: '', discount: 0, price: 0, stockQuantity: 0, categoryId: 0, familyId: 0 });
         setSelectedImage(null);
        setAddingFlower(true);

    };

    const deleteFlower = (id) => {
        setFlowers(flowers.filter((flower) => flower.id !== id));
    };

    const editFlower = (flower) => {
        setEditingFlower({ ...flower });
    };

    const updateFlower = () => {
        setFlowers(
            flowers.map((flower) =>
                flower.id === editingFlower.id ? editingFlower : flower
            )
        );
        setEditingFlower(null);
    };

    return (

        <div className="container mx-auto p-4">
            {!addingFlower && (
                <button
                    onClick={() => setAddingFlower(true)}
                    className="py-2 px-4 bg-rose-300 text-white rounded"
                >
                    Add Flower
                </button>
            )}
            {addingFlower && (
            <div className="mb-4">
                <h2 className="text-lg font-bold mb-2">Management Flower</h2>
                <div>
                <input
                    type="text"
                    name="id"
                    placeholder="ID"
                    className="mr-2 p-2 border"
                    value={newFlower.id}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="mr-2 p-2 border"
                    value={newFlower.name}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="origin"
                    placeholder="Origin"
                    className="mr-2 p-2 border"
                    value={newFlower.origin}
                    onChange={handleInputChange}
                />
                </div>
                <div>
                <input
                    type="number"
                    name="discount"
                    placeholder="Discount"
                    className="mr-2 p-2 border"
                    value={newFlower.discount}
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    className="mr-2 p-2 border"
                    value={newFlower.price}
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    name="stockQuantity"
                    placeholder="Stock Quantity"
                    className="mr-2 p-2 border"
                    value={newFlower.stockQuantity}
                    onChange={handleInputChange}
                />
                </div>
                <input
                    type="file"
                    name="image"
                    className="mr-1 p-1 border"
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    name="categoryId"
                    placeholder="Category ID"
                    className="mr-2 p-2 border"
                    value={newFlower.categoryId}
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    name="familyId"
                    placeholder="Family ID"
                    className="mr-2 p-2 border"
                    value={newFlower.familyId}
                    onChange={handleInputChange}
                />
                <button
                    onClick={addFlower}
                    className="py-2 px-4 bg-rose-300 text-white rounded"
                >
                  Add
                </button>
                <button
                    onClick={() => setAddingFlower(false)} // Set addingFlower to false when canceling
                    className="py-2 px-4  bg-gray-500 text-white rounded"
                >
                    Cancel
                </button>
            </div>
            )}


            <table className="table-auto w-full">
                <thead>
                <tr>
                    <th className="px-4 py-2">ID</th>
                    <th className="px-4 py-2">Image</th>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Origin</th>
                    <th className="px-4 py-2">Discount</th>
                    <th className="px-4 py-2">Price</th>
                    <th className="px-4 py-2">Stock Quantity</th>
                    <th className="px-4 py-2">Category ID</th>
                    <th className="px-4 py-2">Family ID</th>
                    <th className="px-4 py-2">Actions</th>
                </tr>
                </thead>
                <tbody>
                {flowers.map((flower) => (
                    <tr key={flower.id}>
                        <td className="border px-4 py-2">{flower.id}</td>
                        <td className="border px-4 py-2"><img src={flower.image} alt='' width={60} /></td>
                        <td className="border px-4 py-2">{flower.name}</td>
                        <td className="border px-4 py-2">{flower.origin}</td>
                        <td className="border px-4 py-2">{flower.discount}</td>
                        <td className="border px-4 py-2">{flower.price}DH</td>
                        <td className="border px-4 py-2">{flower.stockQuantity}</td>
                        <td className="border px-4 py-2">{flower.categoryId}</td>
                        <td className="border px-4 py-2">{flower.familyId}</td>
                        <td className="border px-4 py-2">
                            <button
                                onClick={() => editFlower(flower)}
                                className="mr-2 py-1 px-2 bg-rose-300 text-white rounded"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => deleteFlower(flower.id)}
                                className="py-1 px-2 bg-red-500 text-white rounded"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {editingFlower && (
                <div className="mt-4">
                    <h2 className="text-lg font-bold mb-2">Edit Flower</h2>
                    <div>
                        <input
                            type="text"
                            name="id"
                            placeholder="ID"
                            className="mr-2 p-2 border"
                            value={editingFlower.id}
                            onChange={(e) =>
                                setEditingFlower({ ...editingFlower, id: e.target.value })
                            }
                        />
                        <input
                            type="file"
                            name="image"
                            className="mr-2 p-2 border"
                            onChange={(e) =>
                                setEditingFlower({
                                    ...editingFlower, image: URL.createObjectURL(e.target.files[0])
                                })
                        }
                        />
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="mr-2 p-2 border"
                            value={editingFlower.name}
                            onChange={(e) =>
                                setEditingFlower({ ...editingFlower, name: e.target.value })
                            }
                        />
                        <input
                            type="text"
                            name="origin"
                            placeholder="Origin"
                            className="mr-2 p-2 border"
                            value={editingFlower.origin}
                            onChange={(e) =>
                                setEditingFlower({ ...editingFlower, origin: e.target.value })
                            }
                        />
                        <input
                            type="number"
                            name="discount"
                            placeholder="Discount"
                            className="mr-2 p-2 border"
                            value={editingFlower.discount}
                            onChange={(e) =>
                                setEditingFlower({ ...editingFlower, discount: e.target.value })
                            }
                        />
                        <input
                            type="number"
                            name="price"
                            placeholder="Price"
                            className="mr-2 p-2 border"
                            value={editingFlower.price}
                            onChange={(e) =>
                                setEditingFlower({ ...editingFlower, price: e.target.value })
                            }
                        />
                        <input
                            type="number"
                            name="stockQuantity"
                            placeholder="Stock Quantity"
                            className="mr-2 p-2 border"
                            value={editingFlower.stockQuantity}
                            onChange={(e) =>
                                setEditingFlower({ ...editingFlower, stockQuantity: e.target.value })
                            }
                        />
                        <input
                            type="number"
                            name="categoryId"
                            placeholder="Category ID"
                            className="mr-2 p-2 border"
                            value={editingFlower.categoryId}
                            onChange={(e) =>
                                setEditingFlower({ ...editingFlower, categoryId: e.target.value })
                            }
                        />
                        <input
                            type="number"
                            name="familyId"
                            placeholder="Family ID"
                            className="mr-2 p-2 border"
                            value={editingFlower.familyId}
                            onChange={(e) =>
                                setEditingFlower({ ...editingFlower, familyId: e.target.value })
                            }
                        />
                        <button
                            onClick={updateFlower}
                            className="py-2 px-4 bg-rose-300 text-white rounded"
                        >
                            Update
                        </button>
                        <button
                            onClick={() => setEditingFlower(null)}
                            className="py-2 px-4 bg-gray-500 text-white rounded"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FlowerTable;