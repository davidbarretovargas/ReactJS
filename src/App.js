const Pet = ({ name, animal, breed }) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed)
    ]);
};
const App = () => {
    return React.createElement(
        "div", { id: "something-important" },[
        React.createElement("h1", {}, "ReactClass1"),
        React.createElement(Pet, { name: "Luna", animal: "dog", breed: "havanese" }),
        React.createElement(Pet, { name: "Luna2", animal: "dog2", breed: "havanese2" }),
        React.createElement(Pet, { name: "Luna3", animal: "dog3", breed: "havanese3" })
        ]);
}
ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
);