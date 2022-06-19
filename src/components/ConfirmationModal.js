import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from './Modal';

const ConfirmationModal = ({
  isVisible,
  prompt,
  onClose,
  onConfirm,
  onCancel,
}) => {
  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      <View style={styles.question}>
        <Text>{prompt}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.action} onPress={onConfirm}>
          <Text>Sim</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.action} onPress={onCancel}>
          <Text>Não</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  actions: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  action: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
  },
  question: {
    marginBottom: 20,
    padding: 10,
    paddingTop: 20,
  },
});

export default ConfirmationModal;
