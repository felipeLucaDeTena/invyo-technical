import mongoose from 'mongoose';

export async function mongoConnect() {
    const uri = `mongodb+srv://fkltd:felipe@cluster0.89hok.mongodb.net/Invyo?retryWrites=true&w=majority`;
    return await mongoose.connect(uri);
}

export async function mongoDisconnect() {
    return mongoose.disconnect();
}
