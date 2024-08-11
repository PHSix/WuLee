import { Hono } from '@hono/hono'

const app = new Hono()

app.get('/ping', (c) => c.text('pong'))

Deno.serve(app.fetch)