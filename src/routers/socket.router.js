import { socketServer } from "../../index.js";
import usersManager from "../data/fs/users.fs.js";

// SERVER SIDE
export default async (socket) => {
    console.log(`Client ${socket.id} connected`)

    const users = await usersManager.readAll();

    socket.emit("register", users)

    socket.on("new register", async(user) => {
        try {
            await usersManager.create(user);

            const usersNew = await usersManager.readAll();

            socketServer.emit("update users", usersNew)
        } catch (error) {
            console.log("Error en el registro", error);
        }
    })

}