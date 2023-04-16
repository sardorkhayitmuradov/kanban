// See https://github.com/typicode/json-server#module
import pkg from 'json-server'
const { create, router: _router, defaults, rewriter } = pkg;
const server = create()
const router = _router('db.json')
const middlewares = defaults()

server.use(middlewares)
// Add this before server.use(router)
server.use(rewriter({
    '/api/*': '/$1',
    '/tasks/:id': '/:id'
}))
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})

// Export the Server API
export default server