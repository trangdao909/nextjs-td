// our-domain.com/new-meetup
import {useRouter} from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import Head from 'next/head';
import {Fragment} from 'react';


function NewMeetupPage (){
         
    const router = useRouter();

    async function addMeeupHandler (enteredMeetupData) {
   
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        console.log(data);

        router.push('/');
    }

    return (
        <Fragment>
            <Head>
                <title>Add a new Meetups</title>
                <meta 
                    name='description'
                    content='Add your own meetups and create amazing networking opportunities.'
                />
            </Head>
            <NewMeetupForm onAddMeetup = {addMeeupHandler} />
        </Fragment>
       )   
    
}
export default NewMeetupPage;