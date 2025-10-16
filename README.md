## Get User Info API

This project implements a simple **GET** endpoint `/me` that returns user information along with a random cat fact fetched from the [Cat Facts API](https://catfact.ninja/fact).


### Endpoint

#### `GET /me`

**Response Example:**

```json
{
  "name": "Uche",
  "email": "uche@example.com",
  "stack": "Full Stack Developer",
  "timestamp": "2025-10-16T15:24:32.000Z",
  "fact": "Cats have five toes on their front paws, but only four on the back ones."
}
```

### Setup Instructions

#### 1. Clone the repository

```bash
git clone <repo-url>
cd <project-folder>
```

#### 2. Install dependencies

Make sure you have **Node.js** and **npm** installed. Then run:

```bash
npm install
```


### Dependencies

| Package     | Purpose                                                    |
| ----------- | ---------------------------------------------------------- |
| **express** | For creating the HTTP server and defining routes           |
| **axios**   | For fetching cat facts from the external API               |
| **morgan**  | For logging HTTP requests                                  |
| **nodemon** | For automatically restarting the server during development |
| **dotenv**  | For managing environment variables                         |
| **cors**    | For enabling Cross-Origin Resource Sharing                 |

Install manually if needed:

```bash
npm install express axios morgan dotenv cors
npm install --save-dev nodemon
```


### Environment Variables

Create a `.env` file in the root of your project:

```
PORT=3000
NAME=Uche
EMAIL=uche@example.com
STACK=Full Stack Developer
```

You can adjust these values as needed.


### Run Locally

Start the development server with:

```bash
npm run dev
```

If you haven’t set up a `scripts` section yet, add this to your **package.json**:

```json
"scripts": {
  "dev": "nodemon index.js"
}
```

Then visit:

```
http://localhost:3900/me
```

### How It Works

* The `/me` route responds with details from your `.env` file (`NAME`, `EMAIL`, `STACK`).
* The server makes an HTTP GET request to the **Cat Facts API** using **Axios**.
* The final response merges your info with the cat fact and a current timestamp.
