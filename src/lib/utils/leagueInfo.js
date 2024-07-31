/*   STEP 1   */
export const leagueID = "1123787150501175296"; // your league ID
export const leagueName = "LastYearCounted"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = false; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Welcome to the LastSeasonCounted Fantasy Football League's official website</p>
  <p>The league consists of 7 friend from Clayton High School in their quest for ppr royalty and bragging rights.</p>
  <p>For Seasons 2018, 2020, 2021, 2022, and 2023, the League consisted of 8 managers and used the NFL.com's fantasy platform. In 2019, the League expanded to 10 
  managers, until reverting back to the original 8. This year (2024) if the League's season using Sleeper's fantasy platform</p>
  <p>The scoring system is 1 point per reception, and dues are $100 per manager. The top 6 records at the end of the regular season advance to the playoffs, where the
  top 2 seeds recieved a bye. The bottom two records battle it out in the toilet bowl, where the loser is subjected to a punishment.</p>

`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    {
      "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Jonah",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Brooklyn, New York", // (optional)
      "bio": "sufjan steven fan account",
      "photo": "/managers/question.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2018, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Max", // Can be anything (usually your rival's name)
        link: 2, // manager array number within this array, or null to link back to all managers page
        image: "https://sleepercdn.com/uploads/3a37e7d29fbb365fedfb9547831476cf.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Cheating is fine",
      "tradingScale": 7, // 1 - 10
      "preferredContact": null // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Ricky",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Charlottesville, Virginia", // (optional)
      "bio": "We view O-lineman as offensive weapons",
      "photo": "https://sleepercdn.com/uploads/af42604367d8dd39c550935f095f45d3.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2018, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Dilaun", // Can be anything (usually your rival's name)
        link: 4, // manager array number within this array, or null to link back to all managers page
        image: "https://sleepercdn.com/uploads/0bac568ea3f2f16a15b982623f0dc730.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "OL", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "What about a weapon? Offensive lineman; we look at as weapons",
      "tradingScale": 3, // 1 - 10
      "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Max",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "St. Louis, Missouri", // (optional)
      "bio": "The K man",
      "photo": "https://sleepercdn.com/uploads/3a37e7d29fbb365fedfb9547831476cf.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2018, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Jonah", // Can be anything (usually your rival's name)
        link: 0, // manager array number within this array, or null to link back to all managers page
        image: "/managers/question.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Clowning jonah is more valuable than winning",
      "tradingScale": 10, // 1 - 10
      "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
        {
      "roster": 4,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Adam",
      "tookOver": 2018, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "St. Louis, Missouri", // (optional)
      "bio": "grrrr writing letter grrrr",
      "photo": "/managers/question.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2018, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Jeremy", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/question.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "trade everyone",
      "tradingScale": 10, // 1 - 10
      "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 5,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Dilaun",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Toronto, Canada", // (optional)
      "bio": "fiscally conservative, socially 'liberal'",
      "photo": "https://sleepercdn.com/uploads/0bac568ea3f2f16a15b982623f0dc730.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2018, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Ricky", // Can be anything (usually your rival's name)
        link: 1, // manager array number within this array, or null to link back to all managers page
        image: "https://sleepercdn.com/uploads/af42604367d8dd39c550935f095f45d3.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Tom Brady is the GOAT",
      "tradingScale": 5, // 1 - 10
      "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 6,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Bryant",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "San Diego, California", // (optional)
      "bio": "Being the smartest and most athletic isn't enough, I need to be the best at fantasy as well",
      "photo": "https://sleepercdn.com/uploads/ac085d4ff4b9861f4a9f02ec5e176f7f.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2018, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Jonah", // Can be anything (usually your rival's name)
        link: 0, // manager array number within this array, or null to link back to all managers page
        image: "/managers/question.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Willing to trade my best player for the Bear's QB",
      "tradingScale": 8, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
        {
      "roster": 7,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Jeremy",
      "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "East Harlem, NY", // (optional)
      "bio": "livin in nyc",
      "photo": "/managers/question.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Adam", // Can be anything (usually your rival's name)
        link: 3, // manager array number within this array, or null to link back to all managers page
        image: "/managers/question.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "LinkedIn > Sleeper",
      "tradingScale": 1, // 1 - 10
      "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 8,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "David",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "St. Louis, MO", // (optional)
      "bio": "traitor",
      "photo": "/managers/question.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2018, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Adam", // Can be anything (usually your rival's name)
        link: 3, // manager array number within this array, or null to link back to all managers page
        image: "/managers/question.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Always have a reliable backup QB",
      "tradingScale": 4, // 1 - 10
      "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    }
  ]
  
  // user info
  // [
  //   {
  //     "avatar": "4f4090e5e9c3941414db40a871e3e909",
  //     "display_name": "rkuehn",
  //     "is_bot": false,
  //     "is_owner": null,
  //     "league_id": "1123787150501175296",
  //     "metadata": {
  //       "allow_pn": "on",
  //       "avatar": "https://sleepercdn.com/uploads/af42604367d8dd39c550935f095f45d3.jpg",
  //       "mention_pn": "on",
  //       "team_name": "sure_bud"
  //     },
  //     "settings": null,
  //     "user_id": "989245677798592512"
  //   },
  //   {
  //     "avatar": "f0edbf4278f53f9425db175073df6584",
  //     "display_name": "maxmax10",
  //     "is_bot": false,
  //     "is_owner": null,
  //     "league_id": "1123787150501175296",
  //     "metadata": {
  //       "allow_pn": "on",
  //       "avatar": "https://sleepercdn.com/uploads/3a37e7d29fbb365fedfb9547831476cf.jpg",
  //       "mention_pn": "on",
  //       "team_name": "Ha Ha Ha (bitch!)"
  //     },
  //     "settings": null,
  //     "user_id": "1062858101293924352"
  //   },
  //   {
  //     "avatar": "4f4090e5e9c3941414db40a871e3e909",
  //     "display_name": "jonahgm",
  //     "is_bot": false,
  //     "is_owner": true,
  //     "league_id": "1123787150501175296",
  //     "metadata": {
  //       "allow_pn": "on",
  //       "mention_pn": "on",
  //       "team_name": "Detroit Pistons"
  //     },
  //     "settings": null,
  //     "user_id": "1123787019148201984"
  //   },
  //   {
  //     "avatar": "e7af4deab0289b4f5505646424895246",
  //     "display_name": "AZ1414",
  //     "is_bot": false,
  //     "is_owner": null,
  //     "league_id": "1123787150501175296",
  //     "metadata": {
  //       "allow_pn": "on",
  //       "allow_sms": "on",
  //       "mention_pn": "on",
  //       "team_name": "Adam "
  //     },
  //     "settings": null,
  //     "user_id": "1124209086314176512"
  //   },
  //   {
  //     "avatar": "82aec8e811b839b8ec25d7b458afd57b",
  //     "display_name": "dilaun",
  //     "is_bot": false,
  //     "is_owner": null,
  //     "league_id": "1123787150501175296",
  //     "metadata": {
  //       "allow_pn": "on",
  //       "avatar": "https://sleepercdn.com/images/v2/avatars/avatar_default_blue.webp",
  //       "mention_pn": "on"
  //     },
  //     "settings": null,
  //     "user_id": "1124211773843841024"
  //   },
  //   {
  //     "avatar": "f0edbf4278f53f9425db175073df6584",
  //     "display_name": "bryantthompson013",
  //     "is_bot": false,
  //     "is_owner": null,
  //     "league_id": "1123787150501175296",
  //     "metadata": {
  //       "allow_pn": "on",
  //       "avatar": "https://sleepercdn.com/uploads/ac085d4ff4b9861f4a9f02ec5e176f7f.jpg",
  //       "mention_pn": "on",
  //       "team_name": "Real Bros of CeedeeValley"
  //     },
  //     "settings": null,
  //     "user_id": "1124230483925192704"
  //   },
  //   {
  //     "avatar": "15d7cf259bc30eab8f6120f45f652fb6",
  //     "display_name": "jerberk",
  //     "is_bot": false,
  //     "is_owner": null,
  //     "league_id": "1123787150501175296",
  //     "metadata": {
  //       "allow_pn": "on",
  //       "mention_pn": "on"
  //     },
  //     "settings": null,
  //     "user_id": "1124366228849610752"
  //   }



  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    