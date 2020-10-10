<img alt="GoStack" src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios-new.png" style="width: 100%;"/>

<h3 align="center">
  Challenge 08: Fundamentals of React Native
</h3>

<blockquote align="center">“There is no finish line, the victory is in keeping running!”</blockquote>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rocketseat/bootcamp-gostack-desafios?color=%2304D361">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/Rocketseat/bootcamp-gostack-desafios/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/rocketseat/bootcamp-gostack-desafios?style=social">
  </a>
</p>

## :rocket: About the challenge

In this challenge, you will develop a new application, the GoMarketplace. This time it's time for you to practice what you've learned so far in React Native along with TypeScript, using routes, Async Storage and the Context API.

### Using a fake API

For the data, we created a file that you can use as a fake API to provide you.

To do this, we leave installed in your package.json a dependency called `json-server`, and a file called `server.json` that contains the data for a route `/products`. To run this server you can execute the following command:

```
yarn json-server server.json -p 3333
```

### Layout

[Layout in Figma](https://www.figma.com/file/VgK3hsmyGbqiGu9FdqfUzF/GoMarketplace?node-id=0%3A1)

### Application requirements

- **List the fake API products**: Your Dashboard page should be able to display a listing through a table, with the `title`, `image_url` and `price` fields.

- **Add items to the cart**: In all your application, you should use the Context called `cart` that we left available. You will need to complete the functionalities inside `hooks/cart.tsx` so that you can add items to the cart.

- **Show cart items**: On the Cart page you should display all the items in the cart, along with the quantity, unique value, subtotal value of the items, and total of all the items.

- **Increase quantity of cart items**: On the Cart page you must allow the user to increase the amount of items of the same product, for this you can use the increment function within its context in `/src/hooks/cart.tsx`.

- **Decrease quantity of cart items**: On the Cart page you must allow the user to decrease the amount of items of the same product, for this you can use the function decrement within its context in `/src/hooks/cart.tsx`.

- **Show the total value of items in the cart**: In the Dashboard and Cart page you should display the total value of all the items in your cart.

## :memo: Licence

This project is under license from MIT. See the archive [LICENSE](LICENSE) to more details.

---

Made with 💜 by Rocketseat :wave: [Join our community!](https://discordapp.com/invite/gCRAFhc)
