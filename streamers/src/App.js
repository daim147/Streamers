import React from "react";
import { Route } from "react-router";
import StreamCreate from "./Component/Streams/StreamCreate";
import StreamDelete from "./Component/Streams/StreamDelete";
import StreamDisplay from "./Component/Streams/StreamDisplay";
import StreamLists from "./Component/Streams/StreamLists";
import StreamEdit from "./Component/Streams/StreamEdit";
import Header from "./Component/Header/Header";

function App() {
  return (
    <div className="ui container">
      <Header />
      <Route path="/" exact component={StreamLists} />
      <Route path="/stream/display/:id" exact component={StreamDisplay} />
      <Route path="/stream/delete/:id" exact component={StreamDelete} />
      <Route path="/stream/create" exact component={StreamCreate} />
      <Route path="/stream/edit/:id" exact component={StreamEdit} />
    </div>
  );
}

export default App;
