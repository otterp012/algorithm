const url = 'www.disney.co.kr';
const dns = require('dns');
const net = require('net');
class Request {
    constructor(host, port, method = 'GET', path = '/') {
      this.options = { HOST: host, PORT: port, METHOD: method, PATH: path }
  
      this.startLine = this.writeStartLine();
      this.headers = [`Host: ${this.options.HOST}:${this.options.PORT}`];
      this.emptyLine = '';
      this.body = '';
    }
  
    // IP주소로 요청하는 경우 Request Target은 어떻게 해야될까...
    writeStartLine() {
      return `${this.options.METHOD} ${this.options.PATH} HTTP/1.1`
    }
  
    writeHeader(key, value) {
      this.headers.push(`${key}: ${value}`);
    }
    
    message() {
      return `${this.startLine}\n${this.headers.join('\n')}\n${this.emptyLine}\n${this.body}`
    }
  }
  
// lookup안에 client를 넣지않고 만드는 방법을 찾자...
dns.lookup(url, (err, address, family) => {
  console.log(`URL: ${url}`);

  const client = new net.Socket();
  
  const HOST = address;
  const PORT = 80;

  client.connect(PORT, HOST, () => { 
    console.log(`TCP Connection: HOST=${HOST} / PORT=${PORT}\n`);

    const request = new Request(HOST, PORT);
    request.writeHeader('Connection', 'keep-alive');

    console.log(`[Client: Request]\n${request.message()}`);
    client.write(request.message());
  });

  client.on('data', data => {
    console.log(`[Server: Response]\n${data}`);
    client.destroy();
  });

  client.on('close', () => {
    console.log(`[Connection Closed]`);
  });
});
