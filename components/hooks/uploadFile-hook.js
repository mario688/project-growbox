import React, { useState, useEffect } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { storage } from "../../firebase";
export default function useUploadImage() {
  const [image, setImage] = useState();
  const [progress, setProgress] = useState();
  const [uploadFile, setUploadFile] = useState({ type: "", file: null });
  const { type, file } = uploadFile;
  useEffect(() => {
    if (file) {
      const storageRef = ref(storage, `/files/${type}/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
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
            setImage(downloadURL);
          });
        }
      );
    }
  }, [type, file]);

  return { image, progress, setUploadFile };
}
