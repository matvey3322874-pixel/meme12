import { Check, ShoppingBag } from 'lucide-react';

interface OrderSuccessProps {
  isOpen: boolean;
  onClose: () => void;
  orderNumber: string;
}

export function OrderSuccess({ isOpen, onClose, orderNumber }: OrderSuccessProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-background w-full max-w-md rounded-xl shadow-2xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-green-600" />
        </div>

        <h2 className="text-foreground mb-2">Заказ оформлен!</h2>

        <p className="text-muted-foreground mb-1">Номер вашего заказа:</p>
        <p className="text-foreground mb-6">#{orderNumber}</p>

        <p className="text-muted-foreground mb-6">
          Мы свяжемся с вами в ближайшее время для подтверждения заказа и уточнения деталей доставки.
        </p>

        <button
          onClick={onClose}
          className="w-full py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <ShoppingBag className="w-5 h-5" />
          Продолжить покупки
        </button>
      </div>
    </div>
  );
}
