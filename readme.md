
# Web LastFM Authentication 🌎

This repository is an example and tutorial of how to authenticate and validate your LastFM session using Express.



## Referece

 - [LastFM Official API Documentation](https://www.last.fm/api/)
 - [LastFM Support Forum](https://support.last.fm/)
 - [Express Documentation](https://expressjs.com/)




## API Access

To run the project, you must replace "YOUR API KEY" and "YOUR SECRET KEY" in the code with your API Key and Secret API Key.

- [public/javascript/index.js](https://github.com/vergonha/lastfm-auth-example/tree/main/public/javascript/index.js)
- [public/javascript/callback.js](https://github.com/vergonha/lastfm-auth-example/tree/main/public/javascript/callback.js)

`API_KEY`: `SECRET_API_KEY`  

You can get it at: https://www.last.fm/api/account/create.
## Demonstration


![](https://i.imgur.com/X8DhENT.gif)


## Authorization Step by Step

**1 - Get an API Key**

You can create a LastFM account and get your key from [this](https://www.last.fm/api/account/create) link. You can see your keys [here](https://www.last.fm/api/account/).

**2 - Prepare your request**

You need to request authorization from the user. You can do this in many ways, here is an example: 

```javascript
function auth(){

    const body = new URLSearchParams({
        api_key: "YOUR API KEY",
        cb: "YOUR CALLBACK URL"
    }).toString()

    return window.location.href = "https://www.last.fm/api/auth?" + body
}; 

// Location ==> public/javascript/index.js 
```


**3 - Handle callback Token**

After authenticating using the link above, you will receive a Token as a response, which will be used in the next step. You must store it in such a way that you can access it later.

Example, I stored the token as a session cookie: 

```javascript
controller.callback = (req, res) => {
    res
        .status(200)
        .cookie('token', req.query.token)
        .render('callback')
    };

// Location ==> controllers/callback.js
```

**4 - Auth Get Session method**

Here you must organize your keys and methods to authenticate your session.

```javascript
let body = new URLSearchParams({

    method: "auth.getSession()"
    token: "STEP 3 TOKEN",
    api_key: "YOUR API KEY",
    api_sig: md5((`api_key${keys.api_key}method${keys.method}token${keys.token}${keys.secret_key}`))

}).toString()
```

The API signature (api_sig) is an MD5 Hash encoded following the example:

`"` `apikey` + your api key + `method` auth.getSession + `token` + Step 3 Token + Your Secret API Key `"`

Without space, quotes and plus symbol.

The response should be something like this:
```xml
<lfm status="ok">
  <session>
    <name>MyLastFMUsername</name>
    <key>d580d57f32848f5dcf574d1ce18d78b2</key>
     <subscriber>0</subscriber>
  </session>
</lfm>
```
## Run

To start the project, you must run the following commands:

```bash
  $ git clone https://github.com/vergonha/lastfm-auth-example.git
  $ cd my-project
  $ npm install
  $ npm start
```


Remember to add your API Key and Secret Key.

## The end

Stay positive.  

![Footer](https://i.pinimg.com/originals/b8/33/67/b8336706bb860591ef8ee739ce0cd79b.gif)
