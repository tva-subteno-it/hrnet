/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
import init_db from "./db/init_db.ts";
import read_table from "./db/read_table.ts";

const server = Bun.serve({
    port: 3000,
    fetch(request){
        const url = new URL(request.url);
        const path = url.pathname;
        const method = request.method;

        if (path === '/') {
            return new Response('Hello world!');
        } else if (path === '/init-db') {
            init_db();
            return new Response('Database initialized');
        } else if (path === '/users' && method === "GET"){
            return new Response(JSON.stringify(read_table()), {headers: {"content-type": "application/json"}})
        }
        return new Response('Not found', { status: 404 });
    }
});

console.log('Server running at http://localhost:3000/')