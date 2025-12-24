import { ProductPriceProps } from '@/types/product.types';
import { CreditCard } from 'lucide-react';


const ProductPrice = ({
  price,
  installments,
  className = '',
  priceClassName = '',
  installmentsClassName = '',
}: ProductPriceProps) => {
  const basePriceClass = `leading-tight ${priceClassName}`;
  const baseInstallmentsClass = `flex flex-col gap-0.5 text-md text-neutral-600 mt-4 ${installmentsClassName}`;

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {/* Precio */}
      <p className={basePriceClass}>$ {price.toLocaleString()}</p>

      {/* Cuotas */}
      {installments?.length ? (
        <div className={baseInstallmentsClass}>
          {installments.map(({ quantity, interestFree }) => {
            const installmentPrice = quantity !== 0 ? price / quantity : 0;
            return (
              <div
                key={quantity}
                className='flex items-center gap-2 leading-tight'
              >
                <CreditCard size={16} className='text-neutral-500 ' />
                <span>
                  {quantity} cuotas
                  {interestFree && (
                    <span className='font-medium'> sin interés</span>
                  )}{' '}
                  de{' '}
                  <span className='font-medium text-neutral-800 '>
                    ${installmentPrice.toLocaleString()}
                  </span>
                </span>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default ProductPrice;
