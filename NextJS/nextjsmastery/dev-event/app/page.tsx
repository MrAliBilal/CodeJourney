import ExploreBtn from "@/components/ExploreBtn"

const page = () => {
  return (
      <section>
        <h1 className="text-center">The Hub For Every Dev <br/> Event You Can't Miss</h1>
        <p className="text-center">Hackathon, Meetups and Conferences All In One Place.</p>
        
        < ExploreBtn />

        <div className="mt-20 space-x-7">
          <h3>Featured Events</h3>
          <ul className="events">
            {[1, 2, 3, 4].map((event) => (
              <li key={event} className="event-card">
                <h4>Event {event}</h4>
              </li>
            ))}
          </ul>
        </div>
      </section>
  )
}

export default page
