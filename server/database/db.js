import mongoose from 'mongoose';

const DBConnection = async () => {
    const MONGODB_URI = `mongodb://user:@ac-1xh0rb0-shard-00-00.tynu7dq.mongodb.net:27017,ac-1xh0rb0-shard-00-01.tynu7dq.mongodb.net:27017,ac-1xh0rb0-shard-00-02.tynu7dq.mongodb.net:27017/?ssl=true&replicaSet=atlas-tuxmrf-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
       await mongoose.connect(MONGODB_URI, { useNewUrlParser: true});
       console.log('Database Connected Successfully');
    } catch(error){
        console.error('Error while connecting with the database', error.message);
    }
}

export default DBConnection;