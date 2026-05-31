// src/screens/dashboard/DashboardScreen.jsx
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, RefreshControl } from 'react-native';
import { useState, useCallback } from 'react';

const DashboardScreen = ({ 
  title = "Dashboard", 
  stats = [],
  recentItems = [],
  onRefresh,
  onItemPress,
  loading = false 
}) => {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = useCallback(async () => {
    setRefreshing(true);
    if (onRefresh) await onRefresh();
    setRefreshing(false);
  }, [onRefresh]);

  const renderStatCard = (stat, index) => (
    <View key={index} style={styles.statCard}>
      <Text style={styles.statValue}>{stat.value}</Text>
      <Text style={styles.statLabel}>{stat.label}</Text>
      {stat.change && (
        <Text style={[styles.statChange, stat.change > 0 ? styles.positive : styles.negative]}>
          {stat.change > 0 ? `+${stat.change}` : stat.change}%
        </Text>
      )}
    </View>
  );

  const renderRecentItem = (item, index) => (
    <TouchableOpacity 
      key={index} 
      style={styles.recentItem} 
      onPress={() => onItemPress?.(item)}
    >
      <View style={styles.recentIcon}>
        <Text style={styles.recentIconText}>{item.icon || '📄'}</Text>
      </View>
      <View style={styles.recentContent}>
        <Text style={styles.recentTitle}>{item.title}</Text>
        <Text style={styles.recentDate}>{item.date}</Text>
      </View>
      <Text style={styles.recentArrow}>›</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView 
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
    >
      <Text style={styles.title}>{title}</Text>

      {/* Stats Grid */}
      <View style={styles.statsGrid}>
        {stats.map(renderStatCard)}
      </View>

      {/* Recent Items Section */}
      <View style={styles.recentSection}>
        <Text style={styles.sectionTitle}>Atividades Recentes</Text>
        {recentItems.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Nenhuma atividade recente</Text>
          </View>
        ) : (
          recentItems.map(renderRecentItem)
        )}
      </View>

      {loading && (
        <View style={styles.loadingOverlay}>
          <Text>Carregando...</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  title: { fontSize: 28, fontWeight: 'bold', padding: 20, paddingBottom: 10, color: '#333' },
  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 16, gap: 12 },
  statCard: { flex: 1, minWidth: '45%', backgroundColor: 'white', borderRadius: 12, padding: 16, marginBottom: 12, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, elevation: 2 },
  statValue: { fontSize: 28, fontWeight: 'bold', color: '#333' },
  statLabel: { fontSize: 14, color: '#666', marginTop: 4 },
  statChange: { fontSize: 12, marginTop: 4 },
  positive: { color: '#4CAF50' },
  negative: { color: '#f44336' },
  recentSection: { marginTop: 8, paddingHorizontal: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 12 },
  recentItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', borderRadius: 12, padding: 12, marginBottom: 8, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, elevation: 1 },
  recentIcon: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#f0f0f0', justifyContent: 'center', alignItems: 'center' },
  recentIconText: { fontSize: 22 },
  recentContent: { flex: 1, marginLeft: 12 },
  recentTitle: { fontSize: 16, fontWeight: '500', color: '#333' },
  recentDate: { fontSize: 12, color: '#999', marginTop: 2 },
  recentArrow: { fontSize: 18, color: '#ccc' },
  emptyContainer: { backgroundColor: 'white', borderRadius: 12, padding: 40, alignItems: 'center' },
  emptyText: { fontSize: 14, color: '#999' },
  loadingOverlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(255,255,255,0.7)', justifyContent: 'center', alignItems: 'center' },
});