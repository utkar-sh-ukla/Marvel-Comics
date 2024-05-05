# Marvel Comics

This is a Marvel Comics Explorer application built with React and the Marvel Comics API. It allows users to browse comics and characters from the Marvel universe.

## Technologies Used

- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [React Query](https://react-query.tanstack.com/): A data fetching library for React.
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS): Used for styling the components.

## Features

- Browse comics and characters from the Marvel universe.
- Search for specific comics using the search bar.
- Support for pagination when browsing through different pages of comics.
- A carousel for comic characters that allows filtering by characters. Multiple selections are supported for more refined searches.
- Support for infinite scroll in the carousel upon arrow click.
- Fetches 20 cards at once and displays 8 on the screen. Scroll to view more.


## Setup

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the required dependencies with `npm install`.
4. Start the development server with `npm start`.
5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## API Key

This project uses the Marvel Comics API, which requires an API key. You can obtain a key by signing up at the [Marvel Developer Portal](https://developer.marvel.com/). Once you have the key, replace the [`API_KEY`](command:_github.copilot.openSymbolFromReferences?%5B%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22d%3A%5C%5CProjects%5C%5Cmarvel-comics%5C%5Csrc%5C%5Cservices%5C%5Capi.js%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fd%253A%2FProjects%2Fmarvel-comics%2Fsrc%2Fservices%2Fapi.js%22%2C%22path%22%3A%22%2Fd%3A%2FProjects%2Fmarvel-comics%2Fsrc%2Fservices%2Fapi.js%22%2C%22scheme%22%3A%22file%22%7D%2C%7B%22line%22%3A4%2C%22character%22%3A0%7D%5D "src/services/api.js") variable in the [`src/services/api.js`](command:_github.copilot.openSymbolInFile?%5B%22src%2Fservices%2Fapi.js%22%2C%22src%2Fservices%2Fapi.js%22%5D "src/services/api.js") file with your own key.

```javascript
const API_KEY = "your-marvel-api-key";
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
