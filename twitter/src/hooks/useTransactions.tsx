import { useCallback, useState } from "react";
import axios from "axios";
import { Alert } from "react-native";

const API_URL = "https://wallet-tracker-cyan.vercel.app";


export const useTransactions = (userId) => {
  const [transactions, setTransactions] = useState([]);
  const [summary, setSummary] = useState({
    balance: 0,
    income: 0,
    expense: 0,
  });

  const [isLoading, setIsLoading] = useState(true);

  const fetchTransactions = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/api/transactions/${userId}`);
      const data = await response.json();
      setTransactions(data);
    } catch (error) {
        console.log("Error fetching transactions:", error)
    }
  },[userId])



  const fetchSummary = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/api/transactions/summary/${userId}`);
      const data = await response.json();
      setSummary(data);
    } catch (error) {
        console.log("Error fetching transactions:", error)
    }
  },[userId])



  const loadData = useCallback(async () => {
    if (!userId) {
        return
    }
    setIsLoading(true)
    try {
      await Promise.all([fetchTransactions(),fetchSummary()])
    } catch (error) {
        console.log("Error loading data:", error)
    }finally{
        setIsLoading(false)
    }
  },[fetchTransactions, fetchSummary, userId])


  const deleteTransaction = async () => {
    try {
      const response = await fetch(`${API_URL}/api/transactions/summary/${userId}`,{method: "DELETE"});
      if (!response.ok) {
        throw new Error("Failed to delete transactions")
      }

      loadData()
      Alert.alert("Success","Transaction deleted successfully")
    } catch (error) {
        console.log("Error deleting transactions:", error)
      Alert.alert("Error",error.message)
    }
  }


  return {transactions, summary , isLoading, loadData, deleteTransaction}

};
