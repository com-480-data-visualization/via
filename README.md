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
> - Why is your approach original?
> - What source of inspiration do you take? Visualizations that you found on other websites or magazines (might be unrelated to your data).
> - In case you are using a dataset that you have already explored in another context (ML or ADA course, semester project...), you are required to share the report of that work to outline the differences with the submission for this class.

## Milestone 2 (17th April, 5pm)

**10% of the final grade**


## Milestone 3 (29th May, 5pm)

**80% of the final grade**


## Late policy

- < 24h: 80% of the grade for the milestone
- < 48h: 70% of the grade for the milestone

