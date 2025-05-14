const clients = [];

class Client {
    constructor(name, phone, address) {
        this.name = name;
        this.phone = phone;
        this.address = address;

        clients.push(this); // Добавляем *экземпляр* класса в массив
        console.log(clients[0]?.address)
    }

    getAddress() {
        const foundClient = clients.find(client => client.name === this.name && client.phone === this.phone);
        if (foundClient) {
            return foundClient.address;
        } else {
            return 'Клиент не найден'; // Обработка случая, когда клиент не найден
        }
    }
}


const iClient = new Client('Dmitriy', 89033922229, 'Orenburg');
console.log(iClient.getAddress());
const data = new Map; data.set(11); console.log(data.set(11));