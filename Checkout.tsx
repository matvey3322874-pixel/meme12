import { X, Check } from 'lucide-react';
import { useState } from 'react';
import { PokemonCard } from './ProductCard';

interface CartItem extends PokemonCard {
  quantity: number;
}

interface CheckoutProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onConfirm: (formData: FormData) => void;
}

export interface FormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  comment: string;
}

export function Checkout({ isOpen, onClose, items, onConfirm }: CheckoutProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    address: '',
    comment: ''
  });

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirm(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-background w-full max-w-2xl rounded-xl shadow-2xl max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-foreground">Оформление заказа</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-accent rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-foreground" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h3 className="text-foreground mb-3">Ваши товары</h3>
              <div className="space-y-2 bg-card p-3 rounded-lg border border-border">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <span className="text-card-foreground">{item.name} x{item.quantity}</span>
                    <span className="text-card-foreground">{item.price * item.quantity} ₽</span>
                  </div>
                ))}
                <div className="pt-2 border-t border-border flex justify-between items-center">
                  <span className="text-foreground">Итого:</span>
                  <span className="text-foreground">{total} ₽</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-foreground mb-3">Контактные данные</h3>
              <div className="space-y-3">
                <div>
                  <label htmlFor="name" className="block text-foreground mb-1">
                    Имя *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 bg-input-background border border-border rounded-lg text-foreground"
                    placeholder="Введите ваше имя"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-foreground mb-1">
                    Телефон *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 bg-input-background border border-border rounded-lg text-foreground"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-foreground mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 bg-input-background border border-border rounded-lg text-foreground"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-foreground mb-1">
                    Адрес доставки *
                  </label>
                  <input
                    id="address"
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3 py-2 bg-input-background border border-border rounded-lg text-foreground"
                    placeholder="Город, улица, дом, квартира"
                  />
                </div>

                <div>
                  <label htmlFor="comment" className="block text-foreground mb-1">
                    Комментарий к заказу
                  </label>
                  <textarea
                    id="comment"
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    className="w-full px-3 py-2 bg-input-background border border-border rounded-lg text-foreground resize-none"
                    rows={3}
                    placeholder="Дополнительная информация"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Check className="w-5 h-5" />
              Подтвердить заказ
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
