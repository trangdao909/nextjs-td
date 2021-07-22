import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';
import Head from 'next/head';
import { Fragment } from 'react';



function HomePage(props) {
    return (
    <Fragment>
        <Head>
            <title>React Meetups</title>
            <meta 
                name='description'
                content='Browse a list of highly active React meetups'
            />
        </Head>
        <MeetupList meetups={props.meetups} />      
    </Fragment>
   )
}

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;
//     //fetch data from API
//     return {
//         props:{
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }

export async function getStaticProps() {
    // fetch data from API
    const client = await MongoClient.connect('mongodb+srv://trangdao909:Bluebaby123!@cluster0.zv8xl.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollections = db.collection('meetups'); // create a collection if not exist.
    const meetups = await meetupsCollections.find().toArray(); // get all data from the database
    client.close()

    return {
        props: {
        meetups: meetups.map(meetup => ({
            title: meetup.title,
            image: meetup.image,
            address: meetup.address,
            id: meetup._id.toString()
        }))
        },
        revalidate: 10
    };
}
export default HomePage;