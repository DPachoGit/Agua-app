import User from "../models/user.js";

const addBeach = async (req, res) => {
    const { email, beach } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (!user.favBeaches.includes(beach)) {
            user.favBeaches.push(beach);
            await user.save();
        }

        res.status(200).json({ message: "Beach added to favorites successfully", favBeaches: user.favBeaches });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
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

        res.status(200).json({ message: "Beach deleted from favorites successfully", favBeaches: user.favBeaches });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};


const getAllBeaches = async (req, res) => {
    try {
        const response = await fetch('http://backend-data:5000/get_todays_info');
        
        if (!response.ok) {;
            throw new Error('Error getting beaches');
        }
        const beaches = await response.json();
        res.status(200).json(beaches);
    } catch (error) {
        console.error(error);
    }
};

const getfavbeaches = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const favBeaches = user.favBeaches;
        res.status(200).json({ favBeaches });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

export default {
    addBeach,
    deleteBeach,
    getAllBeaches,
    getfavbeaches
};