import { Link, useRouteError } from "react-router-dom";

export default function BrokenPage() {
  const theError = useRouteError()
  // console.log("Broken page",theError)
  // console.log("Broken Page",theError)
  return (
    <div style={styles.container}>
      <div style={styles.brokenIcon}>💥</div>
      <h1 style={styles.heading}>Oops! Something went wrong.</h1>
      <p style={styles.subtext}>This page is broken or couldn't load properly. <br /><br />
          <span>=&gt;</span>
          <strong>{theError?.message || theError?.statusText || "Unknown error occurred."}</strong></p>
      <p style={styles.subtext}></p>
      {/* <Link to="/" style={styles.button}>🔙 Go Back Home</Link> */}
    </div>
  );
}

const styles = {
  container: {
    // height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#fefefe",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "2rem"
  },
  brokenIcon: {
    fontSize: "80px",
    animation: "shake 0.5s infinite",
    marginBottom: "20px"
  },
  heading: {
    fontSize: "2rem",
    color: "#333"
  },
  subtext: {
    color: "#777",
    fontSize: "1rem",
    margin: "10px 0 30px"
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#ff5252",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    transition: "background 0.3s",
  }
};
