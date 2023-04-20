import httpProxy from "http-proxy";

export const proxy = httpProxy.createProxyServer({});

export const REGISTRY_URL = [
  {
    url: "http://localhost:3000",
    port: 3000,
  },
  {
    url: "http://localhost:3001",
    port: 3001,
  },
  {
    url: "http://localhost:3002",
    port: 3002,
  },
  {
    url: "http://localhost:3003",
    port: 3003,
  },
];
