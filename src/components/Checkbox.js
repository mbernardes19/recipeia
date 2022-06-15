import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import CheckIcon from '../assets/CheckIcon';

const Checkbox = ({onPress}) => {
  const [checked, setChecked] = useState(false);

  return (
    <TouchableOpacity
      style={styles.touchable}
      onPress={() => {
        setChecked(!checked);
        onPress && onPress();
      }}
    >
      {checked ? <CheckIcon /> : <CheckIcon opacity={0} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    width: 38,
    height: 38,
    borderRadius: 50,
    backgroundColor: '#e5e5e5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  disabledTouchable: {
    marginTop: 40,
    marginBottom: 20,
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 12,
    backgroundColor: '#e3e3e3',
    opacity: 0.5,
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 12,
    backgroundColor: '#ef3737',
  },
  text: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
  },
});

export default Checkbox;
