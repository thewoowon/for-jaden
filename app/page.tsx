"use client";

import { useState } from "react";
import { Search, User } from "lucide-react";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button/Button";
import { deliveries } from "@/constants";
import { DeliveryCard } from "@/components/customs";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("전체");
  const [deliveryList, setDeliveryList] = useState(deliveries);

  const filteredDeliveries = deliveryList.filter(
    (delivery) =>
      (delivery.orderNumber.includes(searchTerm) ||
        delivery.customer.includes(searchTerm)) &&
      (activeTab === "전체" || delivery.status === activeTab)
  );

  const todayTotal = deliveryList.length;
  const todayPending = deliveryList.filter((d) => d.status === "미처리").length;
  const handleComplete = (id: number, data: DeliveryData) => {
    setDeliveryList((prevList) =>
      prevList.map((delivery) =>
        delivery.id === id ? { ...delivery, status: "완료", ...data } : delivery
      )
    );
  };
  return (
    <div
      className="bg-gray-100 min-h-screen font-sans"
      style={{ maxWidth: "390px", margin: "0 auto" }}
    >
      <header className="bg-white shadow-sm p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-blue-800">오늘의 배송</h1>
          <Button>
            <User className="h-6 w-6 text-blue-800" />
          </Button>
        </div>
        <p className="text-sm text-gray-600">
          총 {todayTotal}건 중 {todayPending}건 미처리
        </p>
      </header>

      <main className="p-4">
        <div className="mb-4">
          <div className="flex mb-4">
            <Input
              type="text"
              placeholder="주문번호 또는 주문자명 검색"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow mr-2"
            />
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Search className="h-4 w-4 text-white" />
            </Button>
          </div>

          <div className="flex space-x-2 mb-4">
            {["전체", "미처리", "완료"].map((tab) => (
              <Button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "bg-white text-blue-600"
                }`}
              >
                {tab}
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filteredDeliveries.map((delivery) => (
            <DeliveryCard
              key={delivery.id}
              delivery={delivery}
              onComplete={handleComplete}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
