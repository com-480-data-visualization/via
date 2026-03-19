# Project of Data Visualization (COM-480)

| Student's name | SCIPER |
| -------------- | ------ |
| Maëlys Bühler | 387090 |
| Nima Dekhli | 326426 |
| Alexandre Maquet | 394705 |

[Milestone 1](#milestone-1) • [Milestone 2](#milestone-2) • [Milestone 3](#milestone-3)

## Milestone 1 (20th March, 5pm)

**10% of the final grade**

This is a preliminary milestone to let you set up goals for your final project and assess the feasibility of your ideas.
Please, fill the following sections about your project.

*(max. 2000 characters per section)*

### Dataset

> Find a dataset (or multiple) that you will explore. Assess the quality of the data it contains and how much preprocessing / data-cleaning it will require before tackling visualization. We recommend using a standard dataset as this course is not about scraping nor data processing.
>
> Hint: some good pointers for finding quality publicly available datasets ([Google dataset search](https://datasetsearch.research.google.com/), [Kaggle](https://www.kaggle.com/datasets), [OpenSwissData](https://opendata.swiss/en/), [SNAP](https://snap.stanford.edu/data/) and [FiveThirtyEight](https://data.fivethirtyeight.com/)).

#### Description

The dataset we chose for our project is the GTFS timetable of the Swiss train network of this year. 
It is made available on the opentransportdata.swiss platform.
This provides us with a comprehensive overview of the train routes, schedules, connections and station location 
in Switzerland. [Timetable 2026](https://data.opentransportdata.swiss/en/dataset/timetable-2026-gtfs2020)

#### Data structure

The GTFS (General Transit Feed Specification) format is widely used for public transportation data. 
It consists of several text files, each containing specific information about the transit system. 
Some of the key files include all the stops, routes, trips, and stop times. The files are linked together through unique identifiers, allowing us to reconstruct the entire transit network and its schedule.

[GTFS Reference](https://gtfs.org/documentation/schedule/reference/)

#### Assess quality

Since the dataset is provided by the official swiss public transportation authority and
since it is being used by many applications and services, we can assume that 
the data is of very high quality. It is updated twice a week.

#### Processing

As is, the GTFS dataset is clean and well structured, but it is *raw* and not directly usable for our visualization.
Moreover, the dataset is quite large and contains many details and informations that are not relevant for our project.
We will need to process the data to extract the relevant information and create a more compact and efficient
representation of the train network. Moreover, since all the app rendering will be executed on the client side, we need 
to make sure to optimize the data for performance and avoid unnecessary data transfers.

### Problematic

> Frame the general topic of your visualization and the main axis that you want to develop.
> - What am I trying to show with my visualization?
> - Think of an overview for the project, your motivation, and the target audience.

This visualization aims to create an interactive, gamified experience exploring the Swiss train network. The objective is to expand users' understanding beyond their usual routes, encouraging discovery of the entire national network.

The concept is a game where users start at a random Swiss station with a specific destination objective. They must navigate the network by selecting the correct trains to reach their target. Players are provided with the distance (in km) and the fastest possible travel time to the destination, but the target station's location remains hidden on the map.

Users must easily identify available trains from their current location, understand their routes, and see all intermediate stops. With each move, the remaining distance to the objective updates dynamically, guiding the player toward their goal.

The visualization features an interactive map displaying visited stations and accessible next stops. Zoom functionality allows users to contextualize their general location within Switzerland while examining local connections from their current station.

The primary target audience includes train enthusiasts eager to explore the network through gameplay. The design ensures accessibility for users with varying levels of knowledge, offering an engaging learning experience for beginners while providing a strategic advantage to those already familiar with the Swiss network.

### Exploratory Data Analysis

> Pre-processing of the data set you chose
> - Show some basic statistics and get insights about the data

### Related work


> - What others have already done with the data?

This dataset is used in both the scientific and commercial domains. For instance, the smart ticketing company [Fairtiq](https://data.opentransportdata.swiss/en/showcase/fairtiq) uses timetables and transport networks data to optimize journey detection within their automatic fare billing application. On a more academic side, the [Institute for Transport Planning and Systems at ETH Zürich](https://data.opentransportdata.swiss/en/showcase/eth-zuerich) frequently uses this dataset to conduct studies on the Swiss railway network. Notably, they relied on it to analyze the repercussions of the 2017 Rastatt track subsidence, an incident that severely disrupted international rail freight traffic.

Regarding its previous use within the Data Visualization course, a group of students carried out in 2025 a project called [Cartarail](https://github.com/com-480-data-visualization/Cartarail) aiming to visualize the impact of terrain geography and relief on the travel times of various railways connections.


> - Why is your approach original?

GTFS datasets are primarily used in an utilitarian manner, such as in applications that provide services, schedules and itineraries to passengers, or analytically for research purposes, like optimizing train networks and understanding transportation flows.

Our approach is original because it repurposes this data to create a playful experience. The goal is to encourage the user to explore the rail network in an interactive and gamified way, rather than presenting them with static information through traditional charts and metrics.


> - What source of inspiration do you take? Visualizations that you found on other websites or magazines (might be unrelated to your data).

Our first source is [GeoGuessr](https://www.geoguessr.com/), a browser-based game where the user is dropped at a random location on the planet. Using Google Maps Street View only, they must successfully orient themselves within their environment to deduce their precise location on Earth. This idea of initial disorientation and spatial investigation perfectly matches the starting mechanic of our project.

Our second inspiration is [Wiki Game](https://en.wikipedia.org/wiki/Wikipedia:Wiki_Game), which requires for the user, starting from a random Wikipedia article, to navigate to another article on a precise subject as a destination using only hyperlinks. This node-based navigation constraint directly inspires the core mechanic of our project, which is to connect two train stations navigating by exclusively through the connections of the railway network.


> - In case you are using a dataset that you have already explored in another context (ML or ADA course, semester project...), you are required to share the report of that work to outline the differences with the submission for this class.

We haven't used this dataset in a previous project

## Milestone 2 (17th April, 5pm)

**10% of the final grade**


## Milestone 3 (29th May, 5pm)

**80% of the final grade**


## Late policy

- < 24h: 80% of the grade for the milestone
- < 48h: 70% of the grade for the milestone

