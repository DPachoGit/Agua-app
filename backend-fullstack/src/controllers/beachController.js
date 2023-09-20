import User from "../models/user.js";

const addBeach = async (req, res) => {
    const { email, beach } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        if (!user.favBeaches.includes(beach)) {
            user.favBeaches.push(beach);
            await user.save();
        }

        res.status(200).json({ message: "Playa añadida a favoritos correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error interno del servidor", error: error.message });
    }
};

const deleteBeach = async (req, res) => {
    const { email, beach } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        user.favBeaches = user.favBeaches.filter(b => b !== beach);
        await user.save();

        res.status(200).json({ message: "Playa eliminada de favoritos correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error interno del servidor", error: error.message });
    }
};

const getAllBeaches = async () => {
    try {
        const response = await fetch('http://localhost:5000/get_todays_info', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputs)
        });

        if (!response.ok) {
            throw new Error('Error al obtener las playas');
        }

        const beaches = await response.json();
        res.status(200).json(beaches);
    } catch (error) {
        console.error(error);
    }
};

export default {
    addBeach,
    deleteBeach,
    getAllBeaches
};