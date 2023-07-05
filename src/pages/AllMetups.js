import MeetupList from "../components/meetups/MeetupList";
import {useEffect, useState} from "react";

function AllMetupsPage () {
    const [isLoading, setIsLoading] =  useState(false);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://react-course-91b98-default-rtdb.europe-west1.firebasedatabase.app/meetups.json').then(response => {
            return response.json();
        }).then(data => {
            const meetups = [];
            for (const key in data) {
                const meetup = {
                    id: key,
                    ...data[key]
                };
                meetups.push(meetup);
            }
            setIsLoading(false);
            setLoadedMeetups(meetups);
        })
    }   , [] /*external dependencies*/   );

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    return (
        <div>
            <h1>All Metups Page</h1>
            <MeetupList meetups={loadedMeetups}/>
        </div>
    );
}

export default AllMetupsPage;