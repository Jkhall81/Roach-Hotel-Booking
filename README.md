# Roach Hotel Booking Project

This is a fullstack application build with Next.js, Tailwind CSS, typescript, Next Auth, and Sanity as a backend / CMS. This is the second time I have worked with Sanity. It is very fast and convenient, but doesn't offer the customization options that working with something like Django offers. Sanity is also very easy to use.

This features OAUTH login via a google or github account. There is a user already set up if you wish to login using credentials:

username: MistyH@gmail.com
password: password123

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Frontend](#frontend)
- [Backend](#backend)
- [Deployment](#deployment)
- [Testing](#testing)
- [Bugs](#bugs)
- [License](#license)

## Features

This site has stripe payment functionality built in. Stripe is currently in test mode on the project, obviously. Next Auth is used to handle user authentication. The project is made using Next.js and Sanity. Content, new hotel rooms, can be added via the Sanity Studio CMS system, which has been integrated into the project and can be accessed via the /studio route. Users can view available hotel rooms, book a hotel room, pay via stripe, leave a review / rating of a hotel room, and view their own booking history.

## Technologies

- Frontend

  - Next.js
  - Tailwind CSS

- Backend
  - Sanity

## Getting Started

The Project code can be found here: https://github.com/Jkhall81/Roach-Hotel-Booking. To actually use this project you would need a Sanity account. Also you would need a stripe account to make the payment part of the project work.

## Frontend

This project's front end was created using Next.js and Tailwind CSS.

https://roach-hotel-booking.vercel.app/

## Backend

The backend for this project is Sanity. Sanity handles the database and the API. It is very easy to use and quick to set up.

## Deployment

The front end is deployed on a free Vercel account. The Backend is Sanity which I am using via a free account as well.

## Testing

Work in progress.

## Bugs

Using the Google or Github Oauth login feature currently logins in the user registered with Sanity.

## License

This project use an MIT license.
