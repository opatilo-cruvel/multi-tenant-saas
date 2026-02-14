const API_PORT = 3000;

const BASE_URL = `${window.location.protocol}//${window.location.hostname}:${API_PORT}`;

export const api = {
  async getEstablishment() {
    const res = await fetch(`${BASE_URL}/`);
    return res.json();
  },

  async getServices() {
    const res = await fetch(`${BASE_URL}/services`);
    return res.json();
  },
};
