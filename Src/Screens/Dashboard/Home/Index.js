import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import * as Location from 'expo-location';
import { Camera } from 'expo-camera';
import { styles } from './Style';

const Index = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [permission, setPermission] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setPermission(status === 'granted');
    })();
  }, []);

  function toggleCameraType() {
    setType(current => (current === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back));
  }

  async function takePicture() {
    if (cameraRef.current) {
      const options = { quality: 1, base64: true, fixOrientation: true, exif: true };
      const photo = await cameraRef.current.takePictureAsync(options);
      setCapturedImage(photo.uri);
    }
  }

  if (permission === null) {
    // Permission status is still loading
    return <View />;
  }

  if (!permission) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={Camera.requestCameraPermissionsAsync} title="Grant Permission" />
      </View>
    );
  }

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = `Latitude: ${location.coords.latitude}, Longitude: ${location.coords.longitude}`;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{text}</Text>
      <View style={styles.cameraContainer}>
        <Camera ref={cameraRef} style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
              <Text style={styles.text}>Flip Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={takePicture}>
              <Text style={styles.text}>Take Picture</Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
     

      {capturedImage && (
        <View style={styles.imageContainer}>
          <Text style={styles.paragraph}>Captured Image:</Text>
          <Image source={{ uri: capturedImage }} style={styles.image} />
        </View>
      )}
    </View>
  );
};

export default Index;
