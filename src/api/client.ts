import axios from "axios";

const baseUrl = "http://localhost:3001"

export async function createNewGame(username: string) {
    const url = baseUrl + "/game"
    const res = await axios.post(url, {type: "create", username: username})
    return res.data;
}

export async function joinGame(gameCode: string) {
    const url = baseUrl + "/game"
    const res = await axios.post(url, {type: "join", code: gameCode})
    return res.data;
}