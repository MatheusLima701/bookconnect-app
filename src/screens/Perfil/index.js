import React from 'react';
import { View, Text, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const ProfileScreen = () => {
  const settingsItems = [
    {
      icon: 'heart',
      label: 'Favoritos',
    },
    {
      icon: 'history',
      label: 'Histórico',
    },
    {
      icon: 'star',
      label: 'Review',
    },
    {
      icon: 'cog',
      label: 'Configurações',
    },
  ];

  return (
    <View style={{ flex: 1, justifyContent: 'top' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 45 }}>
        <Image
          source={require('/Users/Matheus/Desktop/APP_CELULAR/bookconnect-app/assets/foto.png')}
          style={{ width: 100, height: 100, borderRadius: 50, marginRight: 14 }}
        />
        <View>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Matheus Lima</Text>
          <Text style={{ fontSize: 18, color: '#666' }}>Resende, RJ</Text>
        </View>
      </View>

      <View>
        {settingsItems.map((item, index) => (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomWidth: 1,
              borderBottomColor: '#ccc',
              paddingLeft: 16,
              marginBottom: 16,
            }}
          >
            <FontAwesome5 name={item.icon} size={24} color="black" />
            <View style={{ flex: 1, marginLeft: 16 }}>
              <Text style={{ fontSize: 18 }}>{item.label}</Text>
            </View>
            <Feather
              name="chevron-right"
              size={24}
              color="black"
              style={{ marginRight: 16 }}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export default ProfileScreen;
