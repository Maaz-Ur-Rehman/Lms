import app from './firebaseconfig'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword ,onAuthStateChanged} from "firebase/auth";
import { getDatabase, ref, set, onValue,push } from "firebase/database";


const auth = getAuth(app);
const database = getDatabase(app)
let signUpUser = (obj) => {

   let { email, password, username, contact } = obj
   return new Promise((resolve, reject) => {
      createUserWithEmailAndPassword(auth, email, password, username, contact)
         .then((userCredential) => {

            const user = userCredential.user
               const refrence=ref(database,`users/${user.uid}`)
               obj.id=user.uid
               set(refrence,obj)
               .then(() => {
                  resolve("user created successfull into database")
               })
               .catch((err) => {
                  reject(err)
               })
         })
         .catch((err) => {
            reject(err)
         })

   })



}
let logInUser = (obj) => {
   let { email, password } = obj
   return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
            const user = userCredential.user
            const reference = ref(database, `users/${user.uid}`);
            onValue(reference, (e) => {
               let status = e.exists()
               console.log(status)
               if (status) {
                  resolve(e.val())
               }
               else {
                  reject("Data not found")
               }

            })
         })
         .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
            reject("Email and Password is Incorect");
         })

   })

}

let CheckUser=()=>{
   return new Promise((resolve,reject)=>{

      onAuthStateChanged(auth, (user) => {
         if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            resolve(uid);
            // ...
         } else {
            reject("no user Login");
            // User is signed out
            // ...
         }
      });
   })
   }

   let sendData=(obj,nodename,id)=>{
      let postListref;
      

      return new Promise((resolve,reject)=>{
         if(id){
            postListref=ref(database,`${nodename}/${id}`)
         }
         else{
            let addRef=ref(database,`${nodename}`)
            obj.id=push(addRef).key

            postListref=ref(database,`${nodename}/${obj.id}`)
         }
         set(postListref,obj)
         .then(()=>{
            resolve(`Data Send Successfully on this node ${nodename}/${obj.id}`);
         })
         .catch((err)=>{
            reject(err)
         })
      })


   }
   let getData = (nodeName, id) => {
      let reference = ref(database, `${nodeName}/${id ? id : ""}`);
      return new Promise((resolve, reject) => {
        onValue(
          reference,
          (snapshot) => {
            if (snapshot.exists()) {
              let data = snapshot.val();
              if (id) {
                resolve(data);
              } else {
                let arr = Object.values(data);
                resolve(arr);
              }
            } else {
              // no data found
              reject("No Data Found");
            }
          },
          {
            onlyOnce: false,
          }
        );
      });
    };

export { signUpUser, logInUser,CheckUser,sendData,getData}