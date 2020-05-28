import firebase from "../config/firebase";

let db = firebase.firestore();

export const getCollection = (collectionName) => {
  return new Promise((resolve, reject) => {
    db.collection(collectionName)
      .get()
      .then((querySnapshot) => {
        let data = [];
        querySnapshot.forEach((doc) => {
          data.push({ ...doc.data(), documentId: doc.id });
        });
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const addCollectionDocument = (collectionName, collectionDocument) => {
  return new Promise((resolve, reject) => {
    db.collection(collectionName)
      .add(collectionDocument)
      .then((docRef) => {
        resolve(docRef.id);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const setCollectionDocument = (
  collectionName,
  collectionDocumentId,
  collectionDocument
) => {
  return new Promise((resolve, reject) => {
    db.collection(collectionName)
      .doc(collectionDocumentId)
      .set(collectionDocument)
      .then(() => {
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const updateCollectionDocument = (
  collectionName,
  collectionDocumentId,
  collectionDocument
) => {
  return new Promise((resolve, reject) => {
    db.collection(collectionName)
      .doc(collectionDocumentId)
      .update(collectionDocument)
      .then(() => {
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
};