import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('PUT request to update the database');
  const jateDb = await openDB('jate', 1); // Open the database
  const tx = jateDb.transaction('jate', 'readwrite'); // Start a transaction
  const store = tx.objectStore('jate'); // Access the object store
  const request = store.put({ content }); // Add or update content in the database
  const result = await request; // Await the result
  console.log('🚀 - data saved to the database', result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET request to fetch all data from the database');
  const jateDb = await openDB('jate', 1); // Open the database
  const tx = jateDb.transaction('jate', 'readonly'); // Start a readonly transaction
  const store = tx.objectStore('jate'); // Access the object store
  const request = store.getAll(); // Get all data from the store
  const result = await request; // Await the result
  console.log('🚀 - data retrieved from the database', result);
  return result;
};

initdb();
