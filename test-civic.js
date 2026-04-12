const url = new URL('https://www.googleapis.com/civicinfo/v2/voterinfo');
url.searchParams.set('key', 'AIzaSyBsRai1rj2OPA0rYhXNHNnp3baGJp2msrA');
url.searchParams.set('address', '200 S College St, Italy, TX 76651');
url.searchParams.set('electionId', 'ocd-election/country:us/state:tx/2026-03-03_primary');
fetch(url).then(r => r.json()).then(r => console.log(JSON.stringify(r))).catch(e => console.error(e));
