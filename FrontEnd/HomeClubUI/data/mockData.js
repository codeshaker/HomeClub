import { worker } from "cluster";

export const users = [
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

export const workers = [
  {
    id: 1,
    name: "Kanta",
    gender: "F",
    workertype: "m",
    identification: "y",
    PoliceVerified: "y"
  },
  {
    id: 2,
    name: "Shakku",
    gender: "F",
    workertype: "m",
    identification: "y",
    PoliceVerified: "y"
  },
  {
    id: 3,
    name: "Churu",
    gender: "F",
    workertype: "m",
    identification: "y",
    PoliceVerified: "y"
  },
  {
    id: 4,
    name: "Ramesh",
    gender: "M",
    workertype: "c",
    identification: "y",
    PoliceVerified: "n"
  },
  {
    id: 5,
    name: "Ranjeet",
    gender: "M",
    workertype: "c",
    identification: "n",
    PoliceVerified: "y"
  }
];
