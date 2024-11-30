export async function fetchGreeting() {
  console.log('abc')
  const response = await fetch('/api/hello');
  return response.json();
}