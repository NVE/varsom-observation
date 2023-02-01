export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export async function getDataFromApiById(id: string){
let data = `{RegId: ${id}}`
  let response = await fetch('https://api.regobs.no/v5/Search', {
  method: 'POST',
  body: data,
  headers: {
    'Content-Type': 'application/json',
  },
});
let json = await response.json();

return json[0];

}
