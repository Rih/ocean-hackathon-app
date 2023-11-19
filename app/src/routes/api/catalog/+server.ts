import { json } from '@sveltejs/kit'
import { CATALOG } from '$lib/data/catalog';

// /api/catalog GET

export async function GET(event) {
  const options: ResponseInit = {
    status: 200,
    headers: {
      X: 'Gon give it to ya',
    }
  }
  const paramPage = Number(event.url.searchParams.get('page'));
  console.log(paramPage);
  const currentPage = paramPage == 1 || paramPage == 0 || !paramPage ? 0: paramPage - 1;
  const perSize = 5;
  const offset = (currentPage * perSize)
  const chunk = CATALOG.slice(offset, offset + perSize);
  return json({ 
    success: true, 
    data: chunk,
    count: chunk.length,
  })
//   return new Response('Hello', options)
}

// /api/beach POST

export async function POST(event) {
  const data = await event.request.formData()
  const email = data.get('email')

  // subscribe the user to the newsletter
  console.log(email)

  // return success
  return new Response(JSON.stringify({ success: true }), {
    headers: {
      'Content-Type': 'application/json'
    }
  })

  // it's common to return JSON, so SvelteKit has a helper
  return json({ success: true })
}
