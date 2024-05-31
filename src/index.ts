import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono js to me!');
})

app.get('/home', async (c) => {
  // const body = await c.req.json()
  // console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.json({ msg: "Ok from home" });
})


export default app;
