//import firebase from "firebase"; cet import est daté d'un vieux versionnage de firebase. celui ci-dessous est comptatible avec la nouvelle version (9.0.2) de firebase
import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: "AIzaSyDsuliXndvhklkwH25DDeNINhOaX7RFmKU",
    authDomain: "todo-list-app-89abd.firebaseapp.com",
    projectId: "todo-list-app-89abd",
    storageBucket: "todo-list-app-89abd.appspot.com",
    messagingSenderId: "731720285104",
    appId: "1:731720285104:web:969ef93fead20a4d1f3475"
  };

  export default class Fire {
    constructor(callback) {
        if(!firebase.apps.lenght) {
            firebase.initializeApp(firebaseConfig);
        }
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                callback(null);
            } else {
                firebase.auth().signInAnonymously.catch(error => {
                    callback(error)
                });
            }
            
        });
    }
    get ref() {
        return firebase.firestore().collection("lists");//ici le nom lists doit être le même que sur la collection créée sur le site firebase
    }

    getLists(callback) {
        let ref = this.ref.orderBy("name");
        this.unsubscribe = ref.onSnapshot(snapshot => {
            let lists = [];
            snapshot.forEach(doc => {
                lists.push({ id: doc.id, ...doc.data() })
            });
            callback(lists);
        },  function(error) {
            callback(error);
        });
    }

    addList(list) {
        this.ref.add(list);
    }

    deleteList(list) {
        this.ref.doc(list.id).delete();
    }

    updateList(list) {
        this.ref.doc(list.id).update(list);
    }

    detach() {
        this.unsubscribe();
    }
  }
/*tout ce code compliqué est trouvable dans les documentations de firebase, ce n'est pas le genre de chose que l'on apprend par coeur ! c'est à considérer comme une boîte à outils pour FIREBASE*/