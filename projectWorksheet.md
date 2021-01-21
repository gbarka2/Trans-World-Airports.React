# Project Overview

[My Current State...](https://media.giphy.com/media/SYLhgk0xEszPtERw9P/giphy.gif)

## Project Links

- [Github](https://github.com/gbarka2/project2)
- [Netlify](https://transworldairports.netlify.app/)

## Project Description

This app is born out of my needs as a former travel agency manager. When training new agents, I often found it difficult to teach the intricacies of airport codes to inexperienced new hires. There was not an easy way to teach this as some airports (PVG in Shanghai and ORD in Chicago) do not necessarily follow a uniform pattern. If only there was a way to search a given city and it would return with possible airports to search for... And now there is! Welcome to [INSERT TITLE HERE]! This app is designed to return the entry points of a searched city, including train stations if applicable. In addition to returning the entry points into a given city, the app can also be used to search for airport codes of cities infrequently searched, for example Huntsville, Alabama can be searched for the airport code of HSV. Simply input the city's name into the search bar and the results are then delivered to page for the agent to check against in their GDS system. 

The app also provides a favorite feature. If the airport is frequently used but giving the agent a headache trying to remember the code, clicking on the heart icon in the bottom right of the card will add the airport code to the favorites page for reference later. If the airport code is no longer needed in the favorites page, simply clicking the hear icon again will remove the airport code from the favorites list.

## API

The API chosen to complete this project comes from Aviation Edge, using their autocomplete API to complete the city search. This returns an array of two objects, one for the airports by city and one for the city itself. The airports by city object will be used in this project, as it contains an array of objects containing the airport information per city. For example, New York City returns an array of 14 objects characterizing the information for the airports and train stations in the New York metropolitan area, which includes the names, IATA codes, latitude and longitude coordinates, and timezone information for those airports. 

[Example Of API Return](https://res.cloudinary.com/decffa3wj/image/upload/v1610737161/project2/Snip20210115_3_v8qas5.png)


## Wireframes

The frame of the website consists of two pages, one main page containing the search area and the search results, and a favorite page consisting of airports that the user has selected to favorite. The main page will consist of three components, a nav, search, and result, while the favorite page will contain the nav component and favorited result component.

- [Photo of Wireframe](https://res.cloudinary.com/decffa3wj/image/upload/v1610737352/project2/Snip20210115_4_l4tixk.png)

The React architecture is comprised of a GlobalState file, the index file, the App file, and a pages and components folder. Pages will contain the Main page and the Favorites page. Components will contain the Search, Results, Airport, and favoriteAirport components. 

GlobalState will house the state of the city and send the setCity function via context to the search component. When the search component is submitted, it will set the city's state, passing the updated city to Global State, which will in turn send that city's data to the results component via context. Results will the map they returned array into airport components. 

GlobalState will also house the state of the favorited items. When the Airport component is favorited, airport will use the setFavorite of GlobalState to set the favorite, which in turn will pass the favorite array to the Favorites page. Favorites will then map the array and return the FavoriteAirport component. 

- [React Architecture](https://res.cloudinary.com/decffa3wj/image/upload/v1610738956/project2/Snip20210115_5_ffvyeu.png)

#### MVP

- Find and use external API
- Complete project2 markdown
- Build components and pages
- Render data to page
- Enable the favoriting feature
- Remove unnecessary code
- CSS styling

#### PostMVP

- Enable unfavoriting feature
- Learn some CSS animations

## Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| GlobalState | This will house the state information, pull API data, and provide context to other components |
| App | This will house the pages Main and Favorites and the Nav component | 
| Nav | Comprised of the logo, "back to main" and "to favorites" links | 
| Main | Page housing the Search and Results components |
| Search | Sets the city to be pulled from the API from GlobalState |
| Results | Houses the Airport component(s) and maps the city array received from GlobalState |
| Airport | Renders the mapped data from Results to a component per array element. Also sets the favorite state to send to GlobalState |
| Favorites | Page housing the FavoriteAirport component(s). Receives the favorite state from GlobalState to map into FavoriteAirport component(s) |
| FavoriteAirport | Renders the mapped data from Favorites to a component per array element |

## Time Frames

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Finding API | H | 2hrs| 3.5hrs | 3.5hrs |
| Complete Markdown | H | 1hrs| 2.5hrs | 2.5hrs |
| Build Pages and Components | H | 5hrs | 4hrs | 4hrs |
| Render Data | H | 6hrs | 6hrs | 6hrs |
| Enable Favoriting | H | 4hrs | 5hrs | 5hrs |
| Find Icons | L | 2hrs | 1hr | 1hr |
| Remove Unnecessary Code | H | 1hrs | 1hr | 1hr |
| Enable Unfavoriting | M | 6hrs | 4hrs | 4hrs |
| CSS Styling | H | 4hrs | 5hrs | hrs |
| Total | H | 31hrs| 32hrs | 32hrs |

- Find and use external API
- Complete project2 markdown
- Build components and pages
- Render data to page
- Enable the favoriting feature
- Remove unnecessary code
- CSS styling

## Additional Libraries

- Fontawesome
- Google Fonts

## Code Snippet

- Not necessarily a snippet, but I am proud of my use of context and global state. I was able to render data in multiple components and keep the files clean by doing this, and it gave me a much greater understanding as to how it can benefit a complex project.

```
  const handleFavorites = () => {
    const addFavorites = CityContext.favorites.slice()
    if (addFavorites.indexOf(airport) === -1) {
      airport.color = 'red'
      addFavorites.push(airport)
      CityContext.setFavorites(addFavorites)
    } else {
      const index = addFavorites.indexOf(airport)
      airport.color = 'rgb(184, 180, 180)'
      addFavorites.splice(index, 1)
      CityContext.setFavorites(addFavorites)
    }
  }
```
