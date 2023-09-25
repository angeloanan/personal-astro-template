
export async function get({ params, request }) {
  return {
    body: JSON.stringify({
      hello: 'world!'
    })
  }
}
