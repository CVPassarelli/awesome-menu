## Available Scripts

In the project directory, you can run:

First you must run `npm instal` to install all the project dependencies.

Then you must run:

### `npm start`

It runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## App considerations

My proposal with the project is showing my Front-end develop skills.
Follow the READ.me sent I've justused HTML, CSS, React and React redux to reach the result.

Regarding the code, I'm know made some mistakes and I could do a better approach at some point in app (speacialy at fetch api part, I'm not satified with the result).

## The flow

I started the app with a loading screen where it waits for the client config to return (a service that provides colors and images for the client). Having the products and the client service loaded, the user will be able to see all the client's products split by category. As soon as the app starts, I store all the responses in a Redux store to avoid multiple calls to the backend. Of course, I'm assuming that these services won't change their response until the end.

The categories have a selected circle (that reminds me of Instagram stories). When you click on it, the corresponding tab will open and display all the available items.

I didn't add any routes; everything was made with modals opening over the main content.

When you click to view a product, you will be able to choose an item. In the case of this item having additional options, you can choose by selecting with a radio input.

The selected item is set in the Redux state cart. When you open your cart, you can change the amount, and the new value will be updated.

Besides, I have state to handle some behaviors, like opening tabs. I decided to use mostly pure HTML and CSS to avoid unnecessary code being called in the main thread. The products were set in a summary/detail HTML tag. The menu and mobile basket I did with a CSS property that changes the role according to the checked status.

I could add some more libraries like Tailwind or styled components to help me keep my styles cleaner, but my proposal here is to showcase my skills with the most basic tools.

I hope you enjoy my app, and I'll be waiting to talk more about it!

Best regards.

Caio Passarelli
