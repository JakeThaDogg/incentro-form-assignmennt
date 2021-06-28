import axios from "axios";

export const searchAddress = (query) =>
  axios.get(`https://photon.komoot.io/api/?q=${query}`);

export const sendForm = (values) =>
  axios.post("http://mockbin.com/request?incentroForm", { values });
