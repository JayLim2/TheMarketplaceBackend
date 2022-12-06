const express = require('express')
const app = express()
const port = 3000

const header = "TheMarketplace";

const styles = `
    <style>
        * {
            font-family: Arial, serif;
        }
        body {
            padding: 50px 150px;
        }
        nav {
            display: flex;
            justify-content: flex-start;
            column-gap: 10px;
        }
        nav a {
            display: block;
            background: #aaa;
            padding: 20px;
            color: white;
            text-decoration: none;
            border-radius: 5px;
        }
        nav a:hover {
            color: yellow;
            background: indigo;
        }
        .content {
            box-shadow: 1px 3px 5px 1px #aaa;
            padding: 30px 15px;
            margin: 20px 0;
            border-radius: 15px;
        }
    </style>
`

app.get('/', (req, res) => {
    let html = `
        ${styles}
        <h1>${header}</h1>
        <nav>
            <a href="/">Home page</a>
            <a href="/about">About company</a>
            <a href="/unknown">Unknown page</a>
        </nav>
        <div class="content">
            "Hello world" page
        </div>
    `;
    res.send(html)
})

app.get('/about', (req, res) => {
    let html = `
        ${styles}
        <h1>${header}</h1>
        <nav>
            <a href="/">Home page</a>
            <a href="/about">About company</a>
            <a href="/unknown">Unknown page</a>
        </nav>
        <div class="content">
            "About company" page
        </div>
    `;
    res.send(html)
})

app.post('/getCustomers', (req, res) => {
    // res.type('application/json')
    res.send([
        {
            id: 1,
            name: 'Ivan Ivanov'
        },
        {
            id: 2,
            name: 'Petr Petrov'
        }
    ])
})

app.listen(port, () => {
    console.log(`Backend service is listening on port ${port}`)
})