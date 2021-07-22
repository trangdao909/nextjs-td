import {MongoClient, ObjectId} from 'mongodb';
import MeetupDetail from "../../components/meetups/MeetupDetail";
import Head from 'next/head';
import { Fragment } from 'react';


    function MeetupDetails(props) {
    return (
        <Fragment>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta 
                    name='description'
                    content={props.meetupData.description}
                />
            </Head>
            <MeetupDetail 
                image = {props.meetupData.image}
                title = {props.meetupData.title}
                address = {props.meetupData.address}
                description = {props.meetupData.description} />   

        </Fragment>
       )   
    }

export async function getStaticPaths(){
    const client = await MongoClient.connect('mongodb+srv://trangdao909:Bluebaby123!@cluster0.zv8xl.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollections = db.collection('meetups'); // create a collection if not exist.
    const meetups = await meetupsCollections.find({}, {_id: 1}).toArray(); // get all data from the database
    client.close()

    return {
        fallback: false,
        paths: meetups.map(meetup => ({ params : { meetupId: meetup._id.toString() }}))       
    } 
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;   
    const client = await MongoClient.connect('mongodb+srv://trangdao909:Bluebaby123!@cluster0.zv8xl.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollections = db.collection('meetups'); // create a collection if not exist.
    const selectedMeetup = await meetupsCollections.findOne({_id: ObjectId(meetupId)}); // get 1 document from the database
    client.close()

    // fetch data from API
    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                description: selectedMeetup.description,
                image: selectedMeetup.image
        },
        revalidate: 10
    }
}}
export default MeetupDetails;