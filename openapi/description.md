# Introduction

<p class="larger">The <strong>Pumpkin APIe</strong> is about pumpkins and pies and whatever else I feel like. It is also not real.</p>

This is a fake API specification written with OpenAPI v2.0 (Swagger) whose purpose is to test generating and hosting docs using Redocly and GitHub Pages, respectively. Pumpkin APIe is designed to be RESTful, have predictable resource-oriented URLs, and use standard HTTP response codes and terminology. It accepts and returns JSON-encoded payloads. Authentication is not a thing because this API doesn't actually exist.

In addition to Pumpkin APIe, I wrote a couple other APIs to test some different features:

* [Closet API](closet.html)
    > Experiments with a dark theme and aims to be the simplest approach with the least customization. Watch out for spiders.

* [Fancy API](fancy.html)
    > Uses OpenAPI v3 so that I can familiarize myself more with new features. Goes all out with the customization - dress-code is black tie only.

<p>
<img src="icons/favicon-16x16.png" class="inline-icon" />
<small><a href="https://www.flaticon.com/free-icon/pie_1075840" title="Pie">Pumpkin pie icon</a> made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>.</small>
</p>

<mark>TODO: helpful links to resources</mark>

# Authentication

lol

# Errors

All of these sample APIs (Pumpkin, Closet, Fancy) use conventional HTTP response codes, specifically following this standard: <mark>TODO</mark>. TL;DR:

- **2xx response** = Success!
    - `200` is a general success. You'll (hopefully) see this most often.
    - `201` indicates a successful "create" action, typically the response for a POST.

- **4xx response** = Client-side error _(aka You're the Problem TM)_
    - `400` means the request wasn't understood. Check that you're using the right URL and look for typos.
    - `401` means "permission denied" or "unauthorized." Log in, ya dingus.
    - `403` is also an auth error, but for authentication. Maybe you tried to bake a pie as a farmer, but only bakers should have access to the oven.
    - `404` is a not found error. You knew this one.
    - `409` is a conflict error. Maybe you tried to bake a pie that had already been baked by someone else - you couldn't take that specific action with that specific pie anymore, so the server was in conflict. (Might also be called a "state error.")
    - `412` means "precondition failed" - an error specific to APIs that use Optimistic Locking/Concurrency Control. You can read more about that here. <mark>TODO</mark>
    - `422` is an invalid input error. You tried to send a request with goofed up data in it.

- **5xx response** = Server-side error _(I was the problem_ 😞 _)_
    - `500` means the server imploded for some reason. There are other error codes that pop up occasionally in other APIs, but this is the only one I'm using.

Sample `code line` and block:

```javascript
const newVar = 20;
```
