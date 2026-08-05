import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function FollowButton() {
  const [following, setFollowing] = useState(false);

  return (
    <TouchableOpacity
      style={[styles.btn, following && styles.btnActive]}
      onPress={() => setFollowing(prev => !prev)}
    >
      <Text style={[styles.text, following && styles.textActive]}>
        {following ? 'Seguindo' : 'Seguir'}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: 100,
    paddingVertical:20,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#000000ff',
  },
  btnActive: {
    backgroundColor: '#000000ff',
  },
  text: {
    color: '#000000ff',
    fontWeight: '600',
    fontSize: 20,
  },
  textActive: {
    color: '#fff',
  },
});
