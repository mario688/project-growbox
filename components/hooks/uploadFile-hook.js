import React, { useState, useEffect } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { storage } from "../../firebase";

export default function useUploadImage() {
  const [image, setImage] = useState([]);

  const [progress, setProgress] = useState();
  const [uploadFile, setUploadFile] = useState({ type: "", file: null });
  const { type, files, user } = uploadFile;
  let filesArr;
  console.log(type + " " + files + " " + user);
  useEffect(() => {
    if (files) {
      for (let i = 0; i < files.length; i++) {
        filesArr = files[i];
        let storageRef = ref(
          storage,
          `/files/${type}/${user}/${filesArr.name}`
        );
        const uploadTask = uploadBytesResumable(storageRef, filesArr);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const prog = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(prog);
          },
          (error) => console.log(error),
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setImage((prevState) => [...prevState, downloadURL]);
            });
          }
        );
      }
    }
  }, [type, files]);

  return { image, progress, setUploadFile };
}
