 // 1 element________________________
      // const heading = React.createElement('h1', {id: 'heading'}, 'Hello world from React!')
      // const root = ReactDOM.createRoot(document.querySelector('#root'))
      // root.render(heading)
      // console.log(heading);

      //   nested of element________________________
      //   const parent = React.createElement(
      //     "div",
      //     { id: "parent" },
      //     React.createElement(
      //       "div",
      //       { id: "child" },
      //       React.createElement("h1", {}, "I am a h1")
      //     )
      //   );
      //   const root = ReactDOM.createRoot(document.querySelector("#root"));
      //   root.render(parent);
      //   console.log(parent);

      // nested of element and sibling ____________________________
    //   const parent = React.createElement(
    //     "div",
    //     { id: "parent" },
    //     React.createElement(
    //       "div",
    //       { id: "child" },
    //       [
    //       React.createElement("h1", {}, "I am an h1"),
    //       React.createElement("h2", {}, "I am an h2")
    //       ]
    //     )
    //   );
    //   const root = ReactDOM.createRoot(document.querySelector("#root"));
    //   root.render(parent);
    //   console.log(parent);

    // Nested of children and sibling _______________________________
    const parent = React.createElement("div",{ id: "parent" },[
        React.createElement("div",{ id: "child1" },
           [
           React.createElement("h1", {}, "I am an h1"),
           React.createElement("h2", {}, "I am an h2")
           ]
         ),
         React.createElement("div",{ id: "child2" },
           [
           React.createElement("h1", {}, "I am an h1"),
           React.createElement("h2", {}, "I am an h2")
           ]
         )
        ]
       );
       const root = ReactDOM.createRoot(document.querySelector("#root"));
       root.render(parent);
       console.log(parent);