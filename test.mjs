import fs from 'fs';

async function fetchGoogleImage(query) {
    try {
        const url = `https://html.duckduckgo.com/html/?q=${encodeURIComponent(query + ' movie poster')}`;
        const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } });
        const text = await res.text();
        const match = text.match(/<img class="tile--img__img" src="\/\/external-content\.duckduckgo\.com\/iu\/\?u=([^&]+)/);
        if (match && match[1]) {
            return decodeURIComponent(match[1]);
        }
    } catch(e) {}
    return null;
}

async function test() {
    console.log(await fetchGoogleImage("Iron Man"));
    console.log(await fetchGoogleImage("Guardians of the Galaxy"));
}
test();
