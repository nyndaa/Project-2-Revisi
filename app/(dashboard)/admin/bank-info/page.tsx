"use client";

import Button from "@/app/(landing)/components/ui/button";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";
import BankInfoList from "../../components/bank-info/bank-info-list";
import BankInfoModal from "../../components/bank-info/bank-info-modal";

const BankInfoManagement = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBank, setSelectedBank] = useState(null);

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedBank(null);
  };

  const handleEdit = (bank: any) => {
    setSelectedBank(bank);
    setIsOpen(true);
  };

  const handleDelete = (id: string) => {
    console.log("delete:", id);
  };

  const fetchBanks = () => {
    console.log("refresh bank list");
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="font-bold text-2xl">Bank Info Management</h1>
          <p className="opacity-50">
            Manage destination accounts for customer transfers.
          </p>
        </div>

        <Button className="rounded-lg" onClick={() => setIsOpen(true)}>
          <FiPlus size={24} />
          Add Bank Account
        </Button>
      </div>

      <BankInfoList
        banks={[]} // nanti isi dari API
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <BankInfoModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        bank={selectedBank}
        onSuccess={fetchBanks}
      />
    </div>
  );
};

export default BankInfoManagement;