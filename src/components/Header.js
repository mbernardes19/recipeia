import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import BackIcon from '../assets/BackIcon';
import TrashIcon from '../assets/TrashIcon';
import ConfirmationModal from './ConfirmationModal';

const Header = ({title, goBackHandler, deleteButtonHandler, layout}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const renderDeleteButton = () => {
    return (
      <>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <TrashIcon style={styles.deleteIcon} />
        </TouchableOpacity>
        <ConfirmationModal
          isVisible={modalVisible}
          onClose={() => setModalVisible(false)}
          prompt="Tem certeza de que deseja deletar esta receita?"
          onConfirm={deleteButtonHandler}
          onCancel={() => setModalVisible(false)}
        />
      </>
    );
  };

  if (goBackHandler) {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={
            layout === 'large' ? styles.largeContainer : styles.titleContainer
          }
          onPress={goBackHandler}
        >
          <BackIcon style={styles.backIcon} />
          <Text style={layout === 'large' ? styles.largeTitle : styles.title}>
            {title}
          </Text>
        </TouchableOpacity>
        {deleteButtonHandler && renderDeleteButton()}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View
        style={
          layout === 'large' ? styles.largeContainer : styles.titleContainer
        }
      >
        <Text style={layout === 'large' ? styles.largeTitle : styles.title}>
          {title}
        </Text>
      </View>
      {deleteButtonHandler && renderDeleteButton()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 40,
  },
  backIcon: {
    marginRight: 10,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontSize: 18,
    color: '#000',
  },
  largeTitle: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  largeContainer: {
    marginTop: 20,
    marginBottom: 30,
  },
  deleteButton: {
    alignSelf: 'center',
    paddingRight: 10,
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 5,
  },
});

export default Header;
