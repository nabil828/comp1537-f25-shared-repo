
# The Internet 

## 1) What *is* the Internet?

* The Internet is a **network of networks**; thousands of independent networks connected together.
* Devices (laptops, phones, servers) talk by splitting data into **packets** and sending those packets through many intermediate devices.
* **Routers** are special-purpose computers that **forward packets** toward their destination using **routing tables**.
* Your **home router** connects your devices (Ethernet/Wi-Fi) to your ISP’s network (often via a cable/DSL/fiber modem). It does:

  * **Routing** (choosing where packets go),
  * **NAT** (Network Address Translation: many home devices share one public IP),
  * **Firewalling** (basic protection).
* On the global scale, the same ideas apply, just with **much faster links** and **industrial routers**.
* Because there are **multiple possible paths**, the Internet is **fault-tolerant**: if one link fails, packets usually find another way.

### DNS: Human-friendly names

* Internet devices have numeric **IP addresses** (e.g., `142.232.0.0/16` style), which are hard to remember.
* **DNS (Domain Name System)** maps names (e.g., `bcit.ca`) to IP addresses. Think “phone book” for the Internet.

> ✅ **Try it:** In a terminal, run `ping bcit.ca` or `nslookup bcit.ca` to see DNS resolution in action.


## 2) How computers connect (links & speeds)

### Common local links

* **Ethernet (wired):** 100 Mb/s, 1 Gb/s, 2.5/5/10 Gb/s are common; copper cable up to \~100 m.
* **Wi-Fi (wireless):** Actual speed depends on standard (Wi-Fi 5/6/6E/7), interference, and distance. Typical real-world: \~50 Mb/s–800 Mb/s for clients; varies widely.
* **Powerline / MoCA:** Use household wiring/coax to extend networks where running Ethernet is hard.

### Beyond the house

* **Cellular:** 4G/LTE/5G carry IP data to towers; phones can also use Wi-Fi.
* **Fiber optic backbones:** Glass strands carry **light pulses** over long distances with extremely high throughput (Gb/s → Tb/s).

### Units you’ll see (and common confusions)

* **Bit (b)** is the smallest unit: 0 or 1.
* **Byte (B) = 8 bits.**
* Speeds for networks are typically in **bits per second** (e.g., **Mb/s**, **Gb/s**).
* File sizes are typically in **bytes** (e.g., **MB**, **GB**).
* Decimal vs binary:

  * **kilo/mega/giga (k, M, G)** often mean powers of 10 for network rates (1 Mb/s = 1,000,000 bits/s).
  * File sizes may use powers of 2 (1 MiB = 1,048,576 bytes). Many UIs still display **MB** loosely.

### Rough sizes

* Plain email (no big attachments): \~5–50 KB (40–400 Kb on the wire).
* A typical camera image: \~2–6 MB (16–48 Mb).
* A modern web page: **several MB** (images, JS, CSS can add up).
* A song (compressed): \~3–8 MB.
* A movie (HD): \~1–5 GB (or more).

> ✅ **Try it:** Open DevTools → Network tab and reload a page; check **Total transferred** and **DOMContentLoaded** time.

## 3) Protocols: shared rules for talking

A **protocol** defines how two endpoints structure and interpret messages.

* **SMTP**: sends email *between* mail servers.
* **IMAP/POP**: retrieves mail *to* your client.
* **NTP**: keeps clocks in sync.
* **Game protocols**: near-real-time updates for positions/events.
* **HTTP**/**HTTPS**: the Web’s application protocol.

> Layering mental model:
>
> * **Physical/Link (Ethernet/Wi-Fi)** → move bits on a link
> * **Internet (IP)** → move packets between networks
> * **Transport (TCP/UDP)** → ensure delivery/ordering (TCP) or speed (UDP)
> * **Application (HTTP, SMTP, …)** → human-meaningful data


<!-- Here’s the relationship 

---

<!-- ### 1. **Protocols “live” at specific layers**

Each **layer** in the network stack has a **role**, and protocols are the concrete rules/mechanisms that operate at that layer.

* Example: At the **Transport Layer**, **TCP** and **UDP** define how applications exchange data reliably or quickly.
* At the **Application Layer**, **HTTP**, **SMTP**, and **IMAP** define how human-meaningful tasks (web browsing, email) happen.

---

### 2. **Layers hide complexity**

A higher layer doesn’t need to know how the lower layer works in detail—it just trusts its service.

* HTTP doesn’t care whether the message crosses Wi-Fi, Ethernet, or fiber; it only cares that TCP provides a reliable stream.
* SMTP relies on TCP for ordering and delivery, but focuses only on *email message structure*.

---

### 3. **Protocols build on each other**

Protocols often **stack vertically** across layers. For example:

* **HTTP** (Application) runs on **TCP** (Transport), which runs on **IP** (Internet), which runs on **Ethernet/Wi-Fi** (Link/Physical).
* Each layer adds headers or formatting for its purpose, then hands data down to the next.

---

### 4. **Mental model**

* **Layer = abstraction / service.**
* **Protocol = implementation / rules.**

So, you can think of **layers as “what needs to be done”** (move bits, deliver packets, deliver messages), and **protocols as “how it’s done”** at that layer (Ethernet, IP, TCP, HTTP).
 -->


## 4) HTTP & HTTPS (the Web)

* **HTTP (HyperText Transfer Protocol)** defines how browsers (**clients**) request resources from **servers** and how servers respond.
* A browser sends an **HTTP request** (e.g., “GET /index.html”), the server sends an **HTTP response** (status + headers + body).

### Common HTTP methods

* **GET**: retrieve a resource
* **POST**: submit data (forms/APIs)
* **PUT/PATCH/DELETE**: modify/delete resources (APIs)

### Common HTTP status codes

* **200 OK** – success
* **301/308** – permanent redirect
* **302** – temporary redirect
* **404 Not Found** – no such resource
* **500 Internal Server Error** – server crashed/bug
* **403 Forbidden / 401 Unauthorized** – auth issues

### HTTPS = HTTP + TLS (encryption)

* **HTTPS** encrypts the connection so intermediaries (Wi-Fi hotspots, ISPs) can’t read/alter content.
* Uses **TLS** and **certificates** issued by trusted Certificate Authorities; browsers show a **lock icon** when valid.

> ✅ **Try it:** Visit a site with DevTools → Security tab; inspect the **certificate** and TLS details.


## 5) URLs: locating resources

A **URL** (Uniform Resource Locator) tells the client where/how to get a resource.

```
https://www.example.com:443/blog/articles?id=3#comments
└scheme┘  └──── host (domain) ───┘└port┘└── path ─────┘└query┘└fragment┘
```

* **Scheme**: protocol (e.g., `http`, `https`, `mailto`, `sftp`).
* **Host/Domain**: the server name (resolved via DNS).
* **Port**: optional; defaults are 80 (HTTP), 443 (HTTPS).
* **Path**: which resource on the server.
* **Query**: `?key=value&...` pairs (filters, parameters).
* **Fragment**: `#anchor`—client-side navigation (no server round-trip).

### Absolute vs relative

* **Absolute**: `https://example.com/assets/logo.png` (works from anywhere)
* **Relative**: `assets/logo.png`, `../images/map.svg` (relative to current page)

> ✅ **Try it:** In a simple site folder, link two pages with relative paths. Move the folder to a different machine—links still work.


## 6) The Web Tech Trio: HTML, CSS, JavaScript

* **HTML** (content & structure): headings, paragraphs, lists, forms, images, links.
* **CSS** (presentation): colors, layout, spacing, responsive behavior.
* **JavaScript** (behavior): interactivity, dynamic content, API calls.

### Why separate them?

* **Single responsibility**: each language excels at its job.
* **Reusability**: one CSS/JS bundle across many pages.
* **Performance**: browsers cache CSS/JS.
* **Maintainability**: change the look (CSS) without touching content (HTML).

> ✅ **Try it:** Create `index.html`, `styles.css`, `app.js`. Link CSS/JS. Change a CSS rule—watch the whole site update instantly.


## 7) End-to-end journey: what happens when you visit a page

1. You enter a URL in the browser.
2. Browser checks cache; if stale, it asks DNS for the site’s **IP**.
3. Browser opens a connection (TCP, then TLS for HTTPS).
4. Browser sends an **HTTP request** (e.g., `GET /`).
5. Server responds with **HTML**; browser parses it.
6. Browser discovers **CSS, JS, images** → sends more requests.
7. JS might request **JSON APIs** (still HTTP/HTTPS).
8. Everything renders; **DevTools** helps you observe the whole flow.



## Quick glossary

* **IP address:** numeric identifier for a device on a network.
* **Router:** device that forwards packets between networks.
* **Packet:** a small chunk of data with addressing info.
* **DNS:** system that translates names (domains) to IPs.
* **HTTP/HTTPS:** web application protocols for requests/responses.
* **TLS:** encryption/authentication layer for HTTPS.
* **URL:** a complete address to a web resource.
* **Latency vs bandwidth:** delay vs maximum data rate.


## Summary

* The Internet relies on **routing** and **redundancy** to deliver packets end-to-end.
* **DNS** maps human names to IP addresses.
* **Protocols** (HTTP/HTTPS, SMTP, etc.) standardize how data is exchanged.
* **URLs** locate resources; **HTML/CSS/JS** define what you’ll build in this course.

