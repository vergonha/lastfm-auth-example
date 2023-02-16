function auth(){
    const body = new URLSearchParams({
        api_key: "YOUR API KEY",
        cb: "http://127.0.0.1:3000/callback"
    }).toString()
    return window.location.href = "https://www.last.fm/api/auth?" + body
}