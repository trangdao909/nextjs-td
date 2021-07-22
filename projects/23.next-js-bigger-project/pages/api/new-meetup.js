// /api/new-meetup
import {MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST'){
    const data = req.body;

    const client = await MongoClient.connect('mongodb+srv://trangdao909:Bluebaby123!@cluster0.zv8xl.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollections = db.collection('meetups'); // create a collection if not exist.

    const result = await meetupsCollections.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({message:'Meetup inserted'}); // send back a response



  }
      
}
export default handler;