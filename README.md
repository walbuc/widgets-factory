# widgets-factory

This project has been Deployed to:

Client built with Reactjs using Nextjs for Server Side Rendering.
Apollo client to perform data fetching, mutations and cache data locally.

The backend is implemented using Express and Apollo Yoga GraphQL server used to implement the Queries and mutations.
I also use a Prisma server that works as database interface and provides a set of useful queries and mutations.


Besides not required, I implemented authentication flow.
You can sign up/in and create new widgets, you can also later edit those widgets.
Pagination feature has also been implemented so we can have a more real world example.
The user can search for all the available items in th search bar.
The user can also add and remove items to the cart.
When the user has finished, the checkout button will create a new order.
The user can later check all the orders created by himself in the order list.
The user can check the details of an individual order.

You can create a new user with sign/up, or if you want to log in already created orders
you can log in with the next user credentials

```
email: buczacka.walter@gmail.com
pass: walter123  (yeah dont blame me, it is just a test)
```

Local development:
clone this repo

Install server and client dependencies
```
npm install --prefix frontend
npm install --prefix backend
```

Then for each folder run:
```
cd backend && npm run dev
cd frontend && npm run dev

```
