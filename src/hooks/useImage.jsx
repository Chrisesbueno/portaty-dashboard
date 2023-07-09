import React, { useState, useEffect } from "react";
// Amplify
import { Storage } from "aws-amplify";

const useImage = () => {
  const selectImage = (data) => {
    const file = data.target.files[0];
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];

    if (file && allowedTypes.includes(file.type)) {
      console.log(file.name);
      return file;
    } else {
      alert("El archivo tiene que ser una imagen");
    }
  };

  const fetchImageFromUri = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    return blob;
  };

  const uploadImage = async (name, file) => {
    const { key } = await Storage.put(name, file, {
      level: "public",
      contentType: file.type,
      progressCallback(progress) {
        console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
      },
    });
    return key;
  };

  return { selectImage, fetchImageFromUri, uploadImage };
};

export default useImage;
