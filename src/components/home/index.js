import React from "react"
import { useLazyQuery } from "@apollo/client"
import { GET_INFO_ABOUT_SPACEX } from '../../graphql/queries'

const Home = () => {

  const [getAPIResp, { data }] = useLazyQuery(GET_INFO_ABOUT_SPACEX, {
    variables: { limit: 10 }
  })

  return (
    <div className={data ? 'bg-colour' : ''}>
      <div className="card text-center">
        <h2>Welcome To SpaceX</h2>
        <button onClick={() => getAPIResp()}>Show more details</button>
      </div>
      {data ? <div className="card">
        <h2>SpaceX Mission Names:</h2>{data.launchesPast.map((val => (<div><li>{val.mission_name}</li></div>)))}
        <h2>SpaceX Launch Site:</h2>{data.launchesPast.map((val => (<div><li>{val.launch_site.site_name_long}</li></div>)))}
        <h2>SpaceX Video Ref:</h2>{data.launchesPast.map((val => (<div><li><a href={val.links.video_link} rel="noreferrer" target="_blank">{val.links.video_link}</a></li></div>)))}
        <h2>SpaceX Rocket Names:</h2>{data.launchesPast.map((val => (<div><li>{val.rocket.rocket_name}</li></div>)))}
      </div> : ''
      }
    </div >
  )
}

export default Home