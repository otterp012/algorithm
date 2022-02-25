const dns = require("dns");
const net = require("net");
const port = 80;
const url = "www.disney.co.kr";

const searchDNS = dns.lookup(url, (err, addresses, family) => {
  console.log(addresses, port);
});

class HttpRequest {
  constructor(url, method = "GET") {
    this.url = url;
    this.method = method;
    this.requestMsg = "";
    this.socket;
    this.init();
  }
  init() {
    this.makeRequestLine();
    this.makeHeader();
  }
  makeRequestLine() {
    return `${this.method} / HTTP/1.1\n`;
  }
  makeHeader() {
    return `Host: ${this.url}`; //필수헤더?
  }
  returnRequestMessage() {
    return (this.requestMsg =
      this.makeRequestLine() + this.makeHeader() + "\r\n\r\n");
  }
  makeSocket() {
    this.socket = new net.Socket();
  }
  sendRequestMsg2TCP() {
    this.socket.connect(port, this.url, () => {
      console.log(`[client] Connected`);
      this.socket.write(this.requestMsg);
    });
  }
  responseTCP2Msg() {
    this.socket.on("data", (serverData) => {
      console.log(`[client] received data from server: ${serverData}`);
      this.socket.destroy();
    });
  }
  closeSocket() {
    this.socket.on("close", () => {
      console.log(`[client] connection closed`);
    });
  }
}

const httpRequest = new HttpRequest(url);
httpRequest.returnRequestMessage();
httpRequest.makeSocket();
httpRequest.sendRequestMsg2TCP();
// httpRequest.responseTCP2Msg();
// httpRequest.closeSocket();