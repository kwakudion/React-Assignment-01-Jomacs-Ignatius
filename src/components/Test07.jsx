/**
Task: Change the code so:

If isLoggedIn is true ➔ show "Welcome back!"

If isLoggedIn is false ➔ show "Please log in."
 */

function Test07() {
  const isLoggedIn = false;
  if (!isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please log in</h1>;
  }
  
}

export default Test07;
