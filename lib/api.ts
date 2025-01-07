export async function fetchGreeting() {
  const response = await fetch('/api/hello');
  return response.json();
}