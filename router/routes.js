import Home from "../src/components/Home/Home";
import NoteList from "../src/components/Note/NoteList";
import TodoList from "../src/components/Todo/TodoList";
import About from "../src/components/About/About";
import Header from "../src/components/Header/Header";
import Sidebar from "../src/components/Sidebar/Sidebar";
import Footer from "../src/components/Footer/Footer";

export default [
    { path: "/", components: {
        default: Home,
        header: Header,
        sidebar: Sidebar,
        footer: Footer
    } },
    { path: "/notes", components: {
        default: NoteList,
        header: Header,
        sidebar: Sidebar,
        footer: Footer
    } },
    { path: "/todos", components: {
        default: TodoList,
        header: Header,
        sidebar: Sidebar,
        footer: Footer
    } },
    { path: "/about", components: {
        default: About,
        header: Header,
        sidebar: Sidebar,
        footer: Footer
    } }
];
