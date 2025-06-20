import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useRouter } from 'expo-router';

export default function QuerCamuflar() {
  const router = useRouter();

  const apps = [
    { id: '1', emoji: '🕓', title: 'Relógio', route: 'relogio' },
    { id: '2', emoji: '🌌', title: 'Temas', route: 'temas' },
    { id: '3', emoji: '🌡️', title: 'Clima', route: 'clima' },
    { id: '4', emoji: '📅', title: 'Calendário', route: 'calendario' },
    { id: '5', emoji: '🧮', title: 'Calculadora', route: 'calculadora' },
    { id: '6', emoji: '📔', title: 'Agenda', route: 'agenda' },
  ];

  const renderItem = ({ item }: { item: typeof apps[0] }) => (
    <TouchableOpacity style={styles.card} onPress={() => router.push(item.route as any)}>
      <Text style={styles.emoji}>{item.emoji}</Text>
      <Text style={styles.label}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Certo. Escolha um nome para mudar</Text>
      <Text style={styles.subtitle}>Selecione um aplicativo</Text>

      <FlatList
        data={apps}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  grid: {
    paddingTop: 16,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    width: '48%',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 28,
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
  },
});
