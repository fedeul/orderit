import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("image.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTs  image (id INTEGER PRIMARY KEY  NOT NULL, image TEXT NOT NULL"
      ),
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        };
    });
  });
  return promise;
};

export const insertImage = (image) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        " INSERT INTO image (image) VALUES(?);",
        [image],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      );
    });
  });
  return promise;
};

export const updateImage = (image) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "UPDATE image SET image = ? WHERE ID = 1",
        [image],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      );
    });
  });
  return promise;
};

export const fetchImage = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM image;",
        [],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      );
    });
  });
  return promise;
};

// export const deleteImage = (id) => {
//   const promise = new Promise((resolve, reject) => {
//     db.transaction((tx) => {
//       console.log(id);
//       tx.executeSql(
//         "DELETE FROM image WHERE id = ?",
//         [id],
//         (_, result) => resolve(result),
//         (_, err) => reject(err)
//       );
//     });
//   });
//   return promise;
// };
