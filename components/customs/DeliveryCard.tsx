import { useState } from "react";
import { MapPin, CheckCircle, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Label from "@/components/ui/label";
import NumberInput from "./NumberInput";

type DeliveryCardProps = {
  delivery: Delivery;
  onComplete: (id: number, data: DeliveryData) => void;
};

const DeliveryCard = ({ delivery, onComplete }: DeliveryCardProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [quantity, setQuantity] = useState(0);
  const [serialNumber, setSerialNumber] = useState("");
  const [result, setResult] = useState("정상");

  const handleComplete = () => {
    onComplete(delivery.id, { quantity, serialNumber, result });
    setIsDialogOpen(false);
    setQuantity(0);
    setSerialNumber("");
    setResult("정상");
  };

  return (
    <Card
      className={`mb-4 ${
        delivery.status === "완료" ? "bg-green-50" : "bg-white"
      }`}
    >
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold text-lg">{delivery.orderNumber}</h3>
          {delivery.status === "완료" ? (
            <span className="text-green-600 flex items-center">
              <CheckCircle className="w-4 h-4 mr-1" /> 완료
            </span>
          ) : (
            <span className="text-yellow-600 flex items-center">
              <AlertTriangle className="w-4 h-4 mr-1" /> 미처리
            </span>
          )}
        </div>
        <p className="text-gray-600 mb-1">주문자: {delivery.customer}</p>
        <p className="text-gray-600 mb-1">서비스: {delivery.service}</p>
        {delivery.status === "완료" && (
          <p className="text-gray-600 mb-3">
            수거결과: {delivery.result} (수량: {delivery.quantity})
          </p>
        )}
        <div className="flex justify-between space-x-2">
          <Button className="flex-1 h-12 bg-white hover:bg-gray-100">
            <MapPin className="mr-2 h-5 w-5" /> 지도 열기
          </Button>
          {delivery.status !== "완료" && (
            <Button
              className="flex-1 h-12 bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => setIsDialogOpen(true)}
            >
              결과 입력
            </Button>
          )}
        </div>
      </CardContent>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              수거 결과 입력
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="quantity" className="text-right">
                수거 수량
              </Label>
              <NumberInput value={quantity} onChange={setQuantity} />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="serialNumber" className="text-right">
                기재번호
              </Label>
              <Input
                id="serialNumber"
                value={serialNumber}
                onChange={(e) => setSerialNumber(e.target.value)}
                className="col-span-3"
                type="number"
                placeholder="5자리 이상 숫자 입력"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">수거결과</Label>
              <RadioGroup
                value={result}
                onValueChange={setResult}
                className="col-span-3"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="정상" id="normal" />
                  <Label htmlFor="normal">정상</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="파손" id="damaged" />
                  <Label htmlFor="damaged">파손</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="노쇼" id="noshow" />
                  <Label htmlFor="noshow">노쇼</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
              onClick={handleComplete}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              완료
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default DeliveryCard;
