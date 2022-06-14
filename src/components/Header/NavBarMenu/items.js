import { nanoid } from "nanoid";

export const items = [
    {
        id: nanoid(),
        to: "/",
        text: "Home",
        private: true
    },
    {
        id: nanoid(),
        to: "/useful-info",
        text: "Materials",
        private: true
    },
    {
        id: nanoid(),
        to: "/contacts",
        text: "Contacts",
        private: false
    }
]