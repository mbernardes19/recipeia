import React from 'react';
import {
  Modal as RnModal,
  View,
  StyleSheet,
  useWindowDimensions,
  TouchableWithoutFeedback,
} from 'react-native';

const Modal = ({children, isVisible, onClose}) => {
  const {height} = useWindowDimensions();

  const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    overlay: {
      position: 'absolute',
      backgroundColor: '#000',
      width: '100%',
      height: '100%',
      opacity: 0.5,
    },
    modal: {
      display: 'flex',
      backgroundColor: '#fff',
      alignSelf: 'center',
      zIndex: 2,
      top: height / 2 - 130,
      height: 130,
      width: '80%',
      borderRadius: 12,
      justifyContent: 'center',
    },
  });

  return (
    <RnModal
      style={styles.wrapper}
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modal}>{children}</View>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>
    </RnModal>
  );
};

export default Modal;
