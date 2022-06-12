import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import AddIconSmall from '../assets/AddIconSmall';
import CancelIcon from '../assets/CancelIcon';
import {launchImageLibrary} from 'react-native-image-picker';

const ImageFormField = ({onImageChange}) => {
  const [selectedImage, setSelectedImage] = useState();

  const openImageLibrary = async () => {
    try {
      const {didCancel, errorCode, errorMessage, assets} =
        await launchImageLibrary({mediaType: 'photo'});

      if (didCancel || errorCode || errorMessage) {
        return;
      }

      setSelectedImage(assets[0]);
      onImageChange && onImageChange(assets[0].uri);
    } catch (err) {
      console.log('Error while loading image', err);
    }
  };

  const clearImage = () => {
    setSelectedImage(null);
    onImageChange && onImageChange(null);
  };

  const renderImage = () => {
    return (
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{uri: selectedImage.uri}}
          resizeMode="cover"
        />
        <TouchableOpacity style={styles.cancelButton} onPress={clearImage}>
          <CancelIcon />
        </TouchableOpacity>
      </View>
    );
  };

  const renderImagePlaceholder = () => {
    return (
      <TouchableOpacity
        style={styles.createImageContainer}
        onPress={openImageLibrary}
      >
        <AddIconSmall />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.formLabel}>Imagem</Text>
      {selectedImage ? renderImage() : renderImagePlaceholder()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
  formLabel: {
    color: '#000',
    marginBottom: 5,
  },
  createImageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 95,
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'dashed',
    borderRadius: 6,
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
  },
  cancelButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ImageFormField;
