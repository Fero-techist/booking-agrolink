import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Bookings from "./pages/Bookings.jsx";
import Home from "./pages/Home.jsx";
import ReviewRequest from "./pages/ReviewRequest.jsx";
import Settings from "./pages/Settings.jsx";
import Wallet from "./pages/Wallet.jsx";
import Withdraw from "./pages/Withdraw.jsx";
import ConfirmWithdrawal from "./pages/ConfirmWithdrawal.jsx";
import WithdrawalSuccess from "./pages/WithdrawalSuccess.jsx";
import TransactionDetails from "./pages/TransactionDetails.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          index
          element={<Home />}
        />
        <Route
          path="bookings"
          element={<Bookings />}
        />
        <Route
          path="bookings/:requestId"
          element={<ReviewRequest />}
        />
        <Route
          path="wallet"
          element={<Wallet />}
        />
        <Route
          path="withdraw"
          element={<Withdraw />}
        />
        <Route
          path="withdraw/confirm"
          element={<ConfirmWithdrawal />}
        />
        <Route
          path="withdraw/success"
          element={<WithdrawalSuccess />}
        />
        <Route
          path="withdraw/transaction"
          element={<TransactionDetails />}
        />
        {/* <Route path="settings" element={<Settings />} /> */}
      </Route>
    </Routes>
  );
}
