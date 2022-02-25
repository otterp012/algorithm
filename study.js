
const dns = require('dns');
const net = require('net');
const google = dns.lookup('www.google.com', (err, address) => {
    console.log(address);
    receiveData(address);
})

function receiveData(ip, port = 80) {
    const client = new net.Socket();
    client.connect(port, ip, () => { 
    console.log(`Connected`)

    const query =   [`GET /search?q=hello&hi=ko HTTP/1.1`,
                    `Host: www.google.com:80`,
                    '',
                    '',
                    ].join('\r\n');

    console.log(query);     
    client.write(query);
});

client.on('data', data => {
    console.log(`received data from server:`);
    data = data.toString();
    console.log(data);

    client.destroy();
})

client.on('close', () => {
    console.log(`connection closed`)
})
}

