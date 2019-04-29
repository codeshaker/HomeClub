const users = [
  {
    basicinfo: {
      id: 1,
      name: "Rakesh Khana",
      slug: "Rakesh-Khana",
      location: "MasjidBanda"
    },
    paymentInfo: {
      balance: "100"
    }
  },
  {
    basicinfo: {
      id: 1,
      name: "Ramesh Jain",
      slug: "Ramesh-Jain",
      location: "Gachibowli"
    },
    paymentInfo: {
      balance: "0"
    }
  }
];

const workers = [
  {
    id: 1,
    name: "Kanta Bai",
    slug: "Kanta-Bai"
  }
];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  users,
  workers
};
