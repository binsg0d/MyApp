import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    backgroundColor: "#fff",
  },
  highlightedContainer: {
    backgroundColor: "#fff3cd",
    opacity: 0.85,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
    marginRight: 8,
  },
  badge: {
    backgroundColor: "#e8f0fe",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  badgeText: {
    fontSize: 12,
    color: "#1a73e8",
    fontWeight: "600",
  },
  description: {
    fontSize: 14,
    color: "#444",
    marginBottom: 6,
  },
  meta: {
    flexDirection: "row",
    gap: 12,
  },
  metaText: {
    fontSize: 13,
    color: "#666",
  },
});
