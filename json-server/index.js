const fs = require('fs')
const jsonServer = require('json-server')
// const jwt = require('jsonwebtoken')
const path = require('path')

const server = jsonServer.create()
const router = jsonServer.router(path.resolve(__dirname, 'db.json'))

//  задержка сервера
server.use(async (req, res, next) => {
    // eslint-disable-next-line promise/param-names
    await new Promise((res) => {
        setTimeout(res, 800)
    })
    next()
})

// проверка авторизации пользователя
server.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({message: 'AUTH ERROR'})
    }
    next()
})

server.use(jsonServer.defaults())
server.use(router)

// енд поинт для логина

server.post('/login', (req, res) => {
    const {username, password} = req.body
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'))
    const {user} = db

    const userFromBd = user.find((user) => user.username === username && user.password === password)

    if (userFromBd) {
        return res.json(userFromBd)
    }

    return res.status(403).json({message: 'AUTH ERROR'})
})

// запуск сервера
server.listen(8000, () => {
    console.log('JSON Server is running on port 8000')
})
