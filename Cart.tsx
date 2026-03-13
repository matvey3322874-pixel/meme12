import { X, ShoppingBag, Minus, Plus } from 'lucide-react';
import { PokemonCard } from './ProductCard';

interface CartItem extends PokemonCard {
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
  onCheckout: () => void;
}

export function Cart({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem, onCheckout }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end md:items-center justify-center">
      <div className="bg-background w-full md:max-w-lg md:rounded-xl shadow-2xl max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-6 h-6 text-primary" />
            <h2 className="text-foreground">Корзина ({items.length})</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-accent rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-foreground" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <ShoppingBag className="w-16 h-16 text-muted-foreground mb-4" />
              <p className="text-muted-foreground">Корзина пуста</p>
              <p className="text-muted-foreground mt-2">Добавьте карты из каталога</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3 bg-card p-3 rounded-lg border border-border">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 pokemon-card-image rounded"
                  />

                  <div className="flex-1 min-w-0">
                    <h4 className="text-card-foreground truncate">{item.name}</h4>
                    <p className="text-muted-foreground">{item.type}</p>
                    <p className="text-card-foreground mt-1">{item.price} ₽</p>
                  </div>

                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-muted-foreground hover:text-destructive"
                    >
                      <X className="w-5 h-5" />
                    </button>

                    <div className="flex items-center gap-2 bg-secondary rounded-lg p-1">
                      <button
                        onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="p-1 hover:bg-accent rounded transition-colors"
                      >
                        <Minus className="w-4 h-4 text-secondary-foreground" />
                      </button>
                      <span className="w-6 text-center text-secondary-foreground">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-accent rounded transition-colors"
                      >
                        <Plus className="w-4 h-4 text-secondary-foreground" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border p-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-foreground">Итого:</span>
              <span className="text-foreground">{total} ₽</span>
            </div>

            <button
              onClick={onCheckout}
              className="w-full py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors"
            >
              Оформить заказ
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
