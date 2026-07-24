import fs from 'fs';

async function getPoster(movieTitle) {
    try {
        const searchRes = await fetch(`https://es.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(movieTitle + ' película')}&utf8=&format=json`);
        const searchData = await searchRes.json();
        if (searchData.query.search.length === 0) return null;
        
        const title = searchData.query.search[0].title;
        
        const imageRes = await fetch(`https://es.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&format=json&pithumbsize=500`);
        const imageData = await imageRes.json();
        
        const pages = imageData.query.pages;
        const pageId = Object.keys(pages)[0];
        
        if (pages[pageId].thumbnail) {
            return pages[pageId].thumbnail.source;
        }
    } catch(e) {}
    return null;
}

async function test() {
    console.log(await getPoster("Capitán América: El primer vengador"));
    console.log(await getPoster("Iron Man"));
}

test();
