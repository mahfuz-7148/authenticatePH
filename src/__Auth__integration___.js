/**
 * 1. Create a context. so that we can share the state of User across the application. 
 * 2. Create a provider to re-use the context
 * 
 * 3. set CreateUser via context provided function
 * 
 * 4. login user via context provided function
 * 
 * 5. observe: one single place (inside the provider) ==> if the user state on firebase changes you can update the user information in your state
 * 
 * 6. use observer inside useEffect ==> 
 *   6.1 ==> set the observer one time
 *   6.2 ==> clean up memory after unmount
 * 
 * 
*/