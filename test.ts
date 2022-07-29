// import * as crypto from "crypto"
import axios from "axios"

// const base64URLEncode = str => {
//     return str.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
// };

// const sha256 = (buffer) => {
//     return crypto.createHash("sha256").update(buffer).digest();
// }

// const verifier = base64URLEncode(crypto.randomBytes(32));

// const challenge = base64URLEncode(sha256(verifier));

// console.log(challenge)

const uriEncoded = (data)=> {
  let result = "";
  for (const key in data) {
      result += encodeURIComponent(key) + "=" + encodeURIComponent(data[key]) + "&";
  }
  return result;
}


const options = {
  method: "POST",
  url: "http://localhost:3000/auth",
  headers: {"content-type": "application/x-www-form-urlencoded"},
  data: uriEncoded({
    grant_type: "authorization_code",
    client_id: "foo",
    code_verifier: "1emPukhMPmmyX7JMi5MjUDodlm2fmvu5skuyI5J-ePc",
    code: "bTcFO9JJT762JaWohMRVXAWuc61h8XRJ-ziMFRTFZCt",
    redirect_uri: "http://localhost:3000/auth123/token"
  })
};

// const response = await axios.default.request(options);

// console.log(response)
// axios.
axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});