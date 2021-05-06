import books from "./books.router";
import authors from "./authors.router";

export default app => {

    app.use("/",books);
    app.use("/",authors);
}