import { json } from '@sveltejs/kit'
import { BEACHES } from '$lib/data/beach';

// /api/beach GET

export async function GET(event) {
  const options: ResponseInit = {
    status: 200,
    headers: {
      X: 'Gon give it to ya',
    }
  }
  return json({ 
    success: true, 
    data: BEACHES,
    count: BEACHES.length,
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
