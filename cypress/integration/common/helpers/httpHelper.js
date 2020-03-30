export const HttpHelper = {
    get: function (url, headers) {
        cy.log(`HttpHelper.get ${url}`)
        return this.request(url, 'GET', headers)
    },
    post: function (url, body, headers) {
        cy.log(`HttpHelper.post ${url}`)
        return this.request(url, 'POST', headers, body)
    },
    delete: function (url, headers) {
        cy.log(`HttpHelper.delete ${url}`)
        return this.request(url, 'DELETE', headers)
    },
    request: function (url, method, headers, body) {
        const mergedHeaders = this.mergeDeafultHeaders(headers);
        let options = {
            method,
            url,
            headers: mergedHeaders,
        };
        if (body) {
            options['body'] = body;
        }
        return cy.request(options)
    },
    mergeDeafultHeaders: function (headers) {
        return Cypress._.merge(this.defaultHeaders, headers)
    },
    defaultHeaders: {
        "Pragma": "no-cache",
        "Sec-Fetch-Site": "same-origin",
        "Origin": Cypress.config().baseUrl,
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36",
        "Accept": "application/json, text/plain, */*",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Referer": Cypress.config().baseUrl,
    },
}
