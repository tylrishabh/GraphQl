import { gql } from '@apollo/client'

export const GET_INFO_ABOUT_SPACEX = gql`
query launchesPast($limit: Int!) {
  launchesPast(limit: $limit){
    mission_name
    launch_date_local
    launch_site {
      site_name_long
    }
    links {
      article_link
      video_link
    }
    rocket {
      rocket_name
    }
  }
}
`
