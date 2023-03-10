let counter = 0;

self.oninstall = (event) => {
    console.log('установка сервисного исполнителя');
};

self.onactivate = (event) => {
    console.log('активация сервисного исполнителя');
    event.waitUntil(self.clients.claim());
};

self.onfetch = (event) => {
    console.log('fetch', event.request.url);
    if (event.request.url.endsWith('/data.json')) {
        counter++;
        event.respondWith(
			new Response(JSON.stringify({counter}), {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
    );
        return;
    }
// обычный HTTP-запрос
    event.respondWith(fetch(event.request));
};