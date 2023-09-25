import connection from '../db/mongoose.js';

const UserSchema = new connection.Schema({
    email: {
        type:String,
        required:true,
        unique:true
    },
    password: {
        type:String,
        required:true
    },
    favBeaches: {
        type:Array,
        default:[],
        required:false
    }
})

const User = connection.model('User', UserSchema);

export default User;