import React from "react";
import { connect } from "react-redux";

function Home(props) {
  const { } = props;

  return (
    <>
      <h1>yay home page</h1>
    </>
  );
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, null)(Home);
