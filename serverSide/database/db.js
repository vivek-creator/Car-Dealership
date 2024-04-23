import { MongoClient } from 'mongodb';

const Connection = async () => {
    
    //const encodedUsername = encodeURIComponent(username);
    //const encodedPassword = encodeURIComponent(password);

    const URL = `mongodb+srv://user:vivekTripathi@car-dealership.ih9etnx.mongodb.net/?retryWrites=true&w=majority&appName=car-dealership`;

    const client = new MongoClient(URL);

    try {
        await client.connect();
        console.log('Connected successfully to database');
        return client;
    } catch (error) {
        console.error('Error while connecting with database', error);
    } finally {
        await client.close();
    }
}

export default Connection;




